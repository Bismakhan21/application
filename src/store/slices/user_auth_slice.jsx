import { createSlice } from "@reduxjs/toolkit";

const initial_state = {
  auth_check_loading: true,
  user_auth: false,
  user_data: {
  role: "bank",
  },
  both: undefined,
  auth_required: false,
};

const user_auth_slice = createSlice({
  name: "user_auth",
  initialState: initial_state,
  reducers: {
    set_user_auth: (state, action) => {
      const { payload } = action;
      state.user_auth = payload.auth;
      state.auth_check_loading = false;
    },
    set_both: (state, action) => {
      state.both = action.payload;
    },
    set_auth_required: (state, action) => {
      state.auth_required = action.payload;
    },
  },
});

export const { set_user_auth, set_both, set_auth_required, auth_check_loading } = user_auth_slice.actions;
export default user_auth_slice.reducer;

