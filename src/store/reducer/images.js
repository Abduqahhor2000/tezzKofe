import { createSlice } from "@reduxjs/toolkit";

export const imagesSlice = createSlice({
  name: "images",
  initialState: {
    images: {},
  },
  reducers: {
    addImage: (state, action) => {
      state.images[action.payload.url] = action.payload.image;
    },
  },
});

export const { addImage } = imagesSlice.actions;

export default imagesSlice.reducer;
