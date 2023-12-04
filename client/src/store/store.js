import { configureStore } from '@reduxjs/toolkit'
import modalSlice from './actionCreators/modalSlice'
import updateStringData   from './actionCreators/dataSlice';

export default configureStore({
  reducer: {
    modal: modalSlice,
    stringData: updateStringData
  }
})