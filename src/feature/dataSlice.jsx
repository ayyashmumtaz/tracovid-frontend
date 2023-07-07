import data from '../utils/constants/provinsi.js'
import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        covid19: data,
    },
    reducers: {
        addData: (state, action) => {
            state.covid19 = action.payload;
        },
        updateData: (state, action) => {
            state.covid19 = action.payload;
            // return {...state, covid19: action.payload};
    }
    }
});

const {addData, updateData} = dataSlice.actions;
const reducer = dataSlice.reducer;
export {addData, updateData};
export default reducer;