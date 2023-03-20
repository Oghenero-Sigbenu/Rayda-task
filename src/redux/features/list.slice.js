import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLists = createAsyncThunk(
  "/listings",
  async ({ rejectWithValue }) => {
    console.log(9);

    try {
      const response = await axios.get(
        "https://run.mocky.io/v3/7f02819f-8254-410a-b8af-ab98572bd26b"
      );
      console.log(response.data, 9);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const listSlice = createSlice({
  name: "listings",
  initialState: {
    lists: [],
    loading: false,
    error: "",
  },

  reducers: {},

  extraReducers: {
    [getLists.pending]: (state) => {
      state.loading = true;
    },
    [getLists.fulfilled]: (state, action) => {
      state.loading = false;
      state.lists = action.payload.data;
    },
    [getLists.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export default listSlice.reducer;
