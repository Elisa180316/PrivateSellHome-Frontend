import {createSlice} from '@reduxjs/toolkit'

//Initial State//
const initialState = {
    user: null,
    token: null
}

export const authSlice = createSlice({
    // name of the slice//
    name: 'auth',
    initialState,
    reducers: {
        // Reducer for login
        login (state, action) {
            localStorage.clear()
            state.user = action.payload.others
            state.token = action.payload.token
        },
         // Reducer for register
        register (state, action) {
            localStorage.clear()
            state.user = action.payload.others
            state.token = action.payload.token
        },
         // Reducer for logout
        logout (state) {
            state.user = null
            state.token = null
            localStorage.clear()
        }
    }
})
//Exports the reducer function//
export const {login, register, logout} = authSlice.actions

export default authSlice.reducer