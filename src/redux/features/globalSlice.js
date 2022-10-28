import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  const numOfResultsPerPage = 10;
  return {
    pagesCounter: 0,
    pages: [],
    numOfResults: numOfResultsPerPage,
    toIndex: numOfResultsPerPage,
    category: "",
    search: "",
    limit: 0,
    openFilters: false,
    fromIndex: 0,
    chunkedPages: [],
    goToPage: false,
    jobPositionTop: 0,
    pageNum: 1
  };
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setpagesCounter: (state, action) => {
      state.pagesCounter = action.payload;
    },
    setPages: (state, action) => {
      state.pages = [...action.payload];
    },
    setNumOfResults: (state, action) => {
      state.numOfResults = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
    setOpenFilters: (state, action) => {
      state.openFilters = !action.payload;
    },
    setfromIndex: (state, action) => {
      state.fromIndex = action.payload;
    },
    setChunkedPages: (state, action) => {
      state.chunkedPages = [...action.payload];
    },
    setgoToPage: (state, action) => {
      state.goToPage = action.payload;
    },
    setJobPositionTop: (state, action) => {
      state.jobPositionTop = action.payload;
    },
    settoIndex: (state, action) => {
      state.toIndex = action.payload;
    },
    setPageNum: (state, action) => {
      state.pageNum = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  setpagesCounter,
  setPages,
  setNumOfResults,
  setCategory,
  setSearch,
  setLimit,
  setOpenFilters,
  setfromIndex,
  setChunkedPages,
  setgoToPage,
  setJobPositionTop,
  settoIndex,
  setPageNum
} = globalSlice.actions;

export default globalSlice.reducer;
