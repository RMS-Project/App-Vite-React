import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    token?: string,
    email?: string,
    isLogged: boolean
}

const userReduce = createSlice({
    name: "user",
    initialState: {
      isLogged: false,
    } as UserState,
    reducers: {
        setUser(state, action) {
            Object.assign(state, {
                token: action.payload.token,
                email: action.payload.email,
                isLogged: true
            })
        }
    }
})

// 14:00