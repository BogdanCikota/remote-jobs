import React, { useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthRoute = (props) => {
  const { children } = props;
  const auth = getAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoading(false);
    } else {
      console.log("unauthorized");
      navigate("/");
    }
  });

  return <div>{loading ? <p>loading...</p> : children}</div>;
};

export default AuthRoute;
