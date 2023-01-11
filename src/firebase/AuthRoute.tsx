import React, { ReactNode, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

type AuthRouteProps = {
  children?: ReactNode
}

const AuthRoute = ({ children }: AuthRouteProps) => {
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
