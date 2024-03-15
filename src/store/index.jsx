
import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';
import user_auth_slice from './slices/user_auth_slice';

const store = configureStore({
    reducer: rootReducer,
    user_auth: user_auth_slice,
});

export default store; 

const both = undefined;
const user_auth = false;
const auth_required = false;

both === true ? '---' : null
user_auth === auth_required ? '---' : null
both === true  || user_auth === auth_required ? '---' : null