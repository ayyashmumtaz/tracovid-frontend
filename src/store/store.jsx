import {configureStore} from '@reduxjs/toolkit';
import reducer from '../feature/dataSlice.jsx';

const store = configureStore({
    reducer: {
        covid19: reducer,
    },
});

export default store;