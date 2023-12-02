import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './actionCreators/modalSlice'

export default configureStore({
  reducer: {
    modal: modalSlice
  }
})