import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "alldata",
  initialState: {
    table_id: "",
    cafe_id: "",
    products: [],
    menus: [],
    allData: {},
    images: {},
    basket: {}
  },
  reducers: {
    setCafeID: (state, action) => {
      state.cafe_id = action.payload;
    },
    setTableID: (state, action) => {
      state.table_id = action.payload;
    },
    setMenus: (state, action) => {
      state.menus = action.payload;
    },
    setProducts: (state, action) => {
      let arr = [];
      action.payload.map((item) => {
        arr = [...arr, ...item.products];
      });
      state.products = arr
    },
    setAllData: (state, action) => {
      state.allData = action.payload;
    },
    addImage: (state, action) => {
      state.images[action.payload.url] = action.payload.image;
    },
    setBasket: (state, action) => {
      state.basket = action.payload;
    },
  },
});

export const {
  setCafeID,
  setTableID,
  setMenus,
  setProducts,
  setAllData,
  addImage,
  setBasket,
} = counterSlice.actions;

export default counterSlice.reducer;
