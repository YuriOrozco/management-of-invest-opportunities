 import {createSlice} from '@reduxjs/toolkit';
 import loginUser from '../../services/authApiService'

 const initialState = {
    user: null,
    error: null,
    loading: false
 };

 const authSlice = createSlice({
    name: 'auth', 
    initialState,
    reducers:{
        loginStart(state){
            state.login = true;
            state.error = null;
        },
        loginSuccess(state, action){
            state.login = false;
            state.user = action.payload;
        },
        loginFailure(state, action){
            state.login = false;
            state.error = action.payload;
        }
    }
 });

 export const {loginStart, loginSuccess, loginFailure} = authSlice.actions;

 export const login = (params) =>async (dispatch) => {
    dispatch(loginStart());
    try{
        const response = await loginUser(params);
        dispatch.loginSuccess(response.data.user);
    }catch(error){
        dispatch(loginFailure(error.message));
    }
 };

 export default authSlice.reducer;