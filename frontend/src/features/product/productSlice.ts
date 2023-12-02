import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../types'

export interface ProductState {
  items: Product[]
}

const initialState: ProductState = {
  items: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProducts } = productsSlice.actions

export default productsSlice.reducer
