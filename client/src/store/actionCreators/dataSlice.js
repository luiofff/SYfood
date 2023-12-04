import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    stringData: String
}

const stringDataSlice = createSlice({
    name: 'stringData',
    initialState,
    reducers: {
      updateStringData: (state, action) => {
        state.stringData = action.payload;
      }
    }
  });
  
  export const { updateStringData } = stringDataSlice.actions;  // Update the exported name
  
  export default stringDataSlice.reducer;