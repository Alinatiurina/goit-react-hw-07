import { createSlice } from '@reduxjs/toolkit';

const initialFilterState = {
  nameFilter: ""  
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: initialFilterState,
  reducers: {
    changeNameFilter: (state, action) => {
      state.nameFilter = action.payload;   
    },
  },
});

export const { changeNameFilter } = filtersSlice.actions;
export default filtersSlice.reducer;