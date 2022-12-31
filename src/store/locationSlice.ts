import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import type { AppState } from "./store";

export interface LocationState {
  locationName: string;
}

const initialState: LocationState = {
  locationName: "",
};

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocationName(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.locationName = action.payload;
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { setLocationName } = locationSlice.actions;

export const selectLocationName = (state: AppState) =>
  state.location.locationName;

export default locationSlice.reducer;
