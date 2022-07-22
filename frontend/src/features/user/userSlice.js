import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'
import { setToken, removeToken } from '../Token';
import api from '../../api/index'

const login = createAsyncThunk(
  'login',
  async (payload, { rejectWithValue }) => {
    console.log(payload)
    try {
      const response = await axios.post(api.login(), payload);
      console.log(response)
      // setToken()
      return response;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const logout = createAsyncThunk(
  'logout',
  async (state, { rejectWithValue }) => {
    try {
      const response = await axios.post(api.logout());
      removeToken();
      return response;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const signup = createAsyncThunk(
  'signup',
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post(api.signup(), payload);
      console.log(response)
      // setToken()
      return response;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const checkNickname = createAsyncThunk(
  'checkNickname',
  async (payload, { rejectWithValue }) => {
    const {nickname} = payload
    try {
      const response = await axios.get(api.nicknameCheck(nickname));
      return response;
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const initialState = {
  user: {},
  isAuthenticated: false,
  isAdmin: false,
  isPossibleNickname: false,
  isLoading: false,
  addressCode: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    testLogin: state => {
      state.isAuthenticated = !state.isAuthenticated
    },
    petchAddressCode: (state, action) => {
      state.addressCode = action.payload
    }
  },
  extraReducers: {
    [signup.pending]: state => {
      state.isLoading = true;
    },
    [signup.fulfilled]: state => {
      state.isLoading = false;
    },
    [signup.rejected]: state => {
      state.isLoading = false;
    },
    [login.fulfilled]: state => {
      state.isAuthenticated = true;
    },
    [login.rejected]: state => {
      state.isAuthenticated = false;
    },
    [logout.fulfilled]: state => {
      state.isAuthenticated = false;
    },
    [checkNickname.fulfilled]: state => {
      state.isPossibleNickName = true;
    },
    [checkNickname.rejected]: state => {
      state.isPossibleNickName = false;
    },
  },
});

export { login, logout, signup, checkNickname }
export const { testLogin, petchAddressCode } = userSlice.actions;

export default userSlice.reducer;