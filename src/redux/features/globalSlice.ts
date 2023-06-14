import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GlobalState = {
  pagesCounter: number;
  pages: any[];
  numOfResults: number;
  toIndex: number;
  category: string;
  search: string;
  limit: number;
  openFilters: boolean;
  fromIndex: number;
  chunkedPages: any[];
  goToPage: boolean;
  jobPositionTop: number;
  pageNum: number;
}

const initialState: GlobalState = {
  pagesCounter: 0,
  pages: [],
  numOfResults: 10,
  toIndex: 10,
  category: "software-dev",
  search: "",
  limit: 0,
  openFilters: false,
  fromIndex: 0,
  chunkedPages: [],
  goToPage: false,
  jobPositionTop: 0,
  pageNum: 1
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setpagesCounter: (state, action: PayloadAction<number>) => {
      state.pagesCounter = action.payload;
    },
    setPages: (state, action: PayloadAction<any[]>) => {
      state.pages = [...action.payload];
    },
    setNumOfResults: (state, action: PayloadAction<number>) => {
      state.numOfResults = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setOpenFilters: (state, action: PayloadAction<boolean>) => {
      state.openFilters = !action.payload;
    },
    setfromIndex: (state, action: PayloadAction<number>) => {
      state.fromIndex = action.payload;
    },
    setChunkedPages: (state, action: PayloadAction<any[]>) => {
      state.chunkedPages = [...action.payload];
    },
    setgoToPage: (state, action: PayloadAction<boolean>) => {
      state.goToPage = action.payload;
    },
    setJobPositionTop: (state, action: PayloadAction<number>) => {
      state.jobPositionTop = action.payload;
    },
    settoIndex: (state, action: PayloadAction<number>) => {
      state.toIndex = action.payload;
    },
    setPageNum: (state, action: PayloadAction<number>) => {
      state.pageNum = action.payload;
    }
  }
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
