import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILoginInfo } from '../types/login-info';
import decodeToken from '../utils/hoc/de-token';
interface AuthState {
  token: string | null;
  user: ILoginInfo | null;
}

const initialState: AuthState = {
  token: localStorage.getItem('token'),
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTokenFromLocalStorage: (state) => {
      const token = localStorage.getItem('token');
      if (token) {
        // Decode token to get user info (assuming you have a function for this)
        const user = decodeToken(token);
        if (user) {
          state.user = {
            username: user.username,
            avatar: user.avatar,
          };
        }
        state.token = token;
      }
    },
    setToken: (state, action: PayloadAction<{ token: string; user: ILoginInfo }>) => {
      state.token = action.payload.token;
      // get user info from token
      state.user = {
        username: action.payload.user.username,
        avatar: action.payload.user.avatar,
      };
    },
    clearToken: (state) => {
      state.token = null;
      state.user = null;
    },
    setUser: (state, action: PayloadAction<ILoginInfo>) => {
      state.user = action.payload;
    },
  },
});

export const { setToken, clearToken, setUser, setTokenFromLocalStorage } = authSlice.actions;

export default authSlice.reducer;
