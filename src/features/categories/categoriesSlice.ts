import { createSlice } from '@reduxjs/toolkit'

type Category = {
  name: string
  color: string
}

interface CategoriesSlice {
  categories: Category[]
}

const initialState: CategoriesSlice = {
  categories: [],
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action) => {
      state.categories.push(action.payload)
      state.categories.sort((a, b) =>
        a.name > b.name ? 1 : b.name > a.name ? -1 : 0
      )
    },
    removeCategory: (state, action) => {
      state.categories.filter(item => item.name !== action.payload.name)
    }
  },
})

export const { addCategory, removeCategory } = categoriesSlice.actions
export default categoriesSlice.reducer
