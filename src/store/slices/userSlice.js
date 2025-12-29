import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { authAPI } from '@services';

export const loginThunk = createAsyncThunk(
  'user/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await authAPI.login(credentials);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message || 'Login failed');
    }
  }
);

export const logoutThunk = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
  try {
    await authAPI.logout();
    return true;
  } catch (err) {
    return rejectWithValue(err.message || 'Logout failed');
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'user/fetchCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const res = await authAPI.getCurrentUser();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message || 'Fetch current user failed');
    }
  }
);

const initialState = {
  userInfo: null,
  isLoggedIn: false,
  authLoading: true,
  actionLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUserInfo(state) {
      state.userInfo = null;
      state.isLoggedIn = false;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.pending, (state) => {
        state.authLoading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.authLoading = false;

        if (action.payload?.user) {
          state.userInfo = action.payload.user;
          state.isLoggedIn = true;
        }
      })
      .addCase(fetchCurrentUser.rejected, (state) => {
        state.authLoading = false;
        state.userInfo = null;
        state.isLoggedIn = false;
      })

      .addCase(loginThunk.pending, (state) => {
        state.actionLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.actionLoading = false;
        state.userInfo = action.payload.user;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.actionLoading = false;
        state.error = action.payload;
      })

      .addCase(logoutThunk.pending, (state) => {
        state.actionLoading = true;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.actionLoading = false;
        state.userInfo = null;
        state.isLoggedIn = false;
      })
      .addCase(logoutThunk.rejected, (state) => {
        state.actionLoading = false;
      });
  },
});

export const { clearUserInfo } = userSlice.actions;
export const userReducer = userSlice.reducer;
