import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null,
}

export const signInUser = createAsyncThunk('/auth/sign-in', async data => {
    const pass = 12345678
    if (data.password == pass) {
        return {
            success: true,
            message: `Login successfully ${data.email}`,
            user: {
                name: `User`,
                email: `${data.email}`,
                role: 'user',
            },
        }
    } else {
        return {
            success: false,
            message: `wrong credentials`,
            user: null,
        }
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = null
            state.isAuthenticated = false
        },
    },
    extraReducers: builder => {
        builder
            .addCase(signInUser.pending, state => {
                state.isLoading = true
            })
            .addCase(signInUser.fulfilled, (state, action) => {
                ;(state.isLoading = false),
                    (state.user = action.payload.success ? action.payload.user : null),
                    (state.isAuthenticated = action.payload.success ? true : false)
            })
            .addCase(signInUser.rejected, state => {
                ;(state.isLoading = false), (state.user = null), (state.isAuthenticated = false)
            })
    },
})

export const { setUser } = authSlice.actions
export default authSlice.reducer
