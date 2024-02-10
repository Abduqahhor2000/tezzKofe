import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'alldata',
  initialState: {
    table_id: "",
    cafe_id: "",
    products: [],
    menu: [],
  },
  reducers: {
    setCafeID: (state, action) => {
      state.cafe_id = action.payload
    },
    setTableID: (state, action) => {
      state.table_id = action.payload
    },
    setMenu: (state, action) => {
      state.menu = action.payload
    },
    setProducts: (state, action) => {
      state.products = action.payload
    },
  },
})

export const { setCafeID, setTableID, setMenu, setProducts } = counterSlice.actions

export default counterSlice.reducer