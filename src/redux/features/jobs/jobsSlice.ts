import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../../store";
import { setPages, setpagesCounter } from "../globalSlice";

type JobsType = {
  loading: boolean;
  jobs: any[];
  hasData: boolean;
  categories: any[];
  allJobs: any[];
  errorMessage: string
};

const initialState: JobsType = {
  loading: false,
  jobs: [],
  hasData: true,
  categories: [],
  allJobs: [],
  errorMessage: ''
};

export const getCategories = createAsyncThunk(
  "jobs/getCategories",
  async () => {
    let dataUrl = `https://remotive.io/api/remote-jobs/categories`;
    let response = await axios.get(dataUrl);
    // console.log(response.data);
    return response.data;
  }
);

type AsyncProps = {
  limit: number;
  category: string;
  search: string;
};

export const getJobs = createAsyncThunk(
  "jobs/getJobs",
  async ({ limit, category, search }: AsyncProps, thunkAPI) => {
    // console.log({ limit, category, search });
    
    const state = thunkAPI.getState() as RootState;
    const { numOfResults } = state.global;
    let myLimit = limit !== 0 && limit;

    let dataUrl = `https://remotive.io/api/remote-jobs?limit=${myLimit}&category=${category}&search=${search}`;
    let response = await axios.get(dataUrl);
    // console.log("jobs: ", response.data);

    let pagesArr = [];

    for (let i = 0; i < response.data.jobs.length / numOfResults; i++) {
      pagesArr.push(i);
    }

    // setpagesCounter(pagesArr.length);
    thunkAPI.dispatch(setpagesCounter(pagesArr.length));
    thunkAPI.dispatch(setPages(pagesArr));

    return response.data;
  }
);

export const getAllJobs = createAsyncThunk("jobs/getAllJobs", async () => {
  // const limit = 0;
  // const category = "";
  // const search = "";
  // let dataUrl = `https://remotive.io/api/remote-jobs?limit=${limit}&category=${category}&search=${search}`;
  let dataUrl = `https://remotive.io/api/remote-jobs`;
  let response = await axios.get(dataUrl);
  console.log("all jobs: ", response.data);

  return response.data;
});


const jobsSlice = createSlice({
  name: "jobs",
  initialState: initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getJobs.pending, (state) => {
        state.loading = true;
      })
      .addCase(getJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = [...action.payload.jobs];
      })
      .addCase(getJobs.rejected, (state) => {
        state.loading = false;
        state.hasData = false;
        state.errorMessage = "Ops, something went wrong!";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = [...action.payload.jobs];
      })
      .addCase(getCategories.rejected, (state) => {
        state.hasData = false;
        state.errorMessage = "Ops, something went wrong!";
      })
      .addCase(getAllJobs.fulfilled, (state, action) => {
        state.allJobs = [...action.payload.jobs];
      })
      .addCase(getAllJobs.rejected, (state) => {
        state.hasData = false;
        state.errorMessage = "Ops, something went wrong!";
      });
  },
});

export const { setIsLoading } = jobsSlice.actions;

export default jobsSlice.reducer;
