import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { FeedbackState, IFormInputs } from "../../interfaces/FeedbackContact";
import axios from "axios";

export const getInitialFeedback = createAsyncThunk(
  "feedback/getInitialFeedback",
  async (data: FeedbackState, { rejectWithValue }) => {
    try {
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const feedbackAddContact = createAsyncThunk(
  "feedback/feedbackAddContact",
  async (contact: IFormInputs, { rejectWithValue }) => {
    try {
      const response = await axios.post<IFormInputs>(
        `${process.env.NEXTAUTH_URL_FEEDBACK}`,
        contact
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState: FeedbackState = {
  feedback: [],
};

export const FeedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getInitialFeedback.pending, (state, action) => {})
      .addCase(getInitialFeedback.fulfilled, (state, action: any) => {
        state.feedback = action.payload;
      })
      .addCase(getInitialFeedback.rejected, (state, action) => {});
    builder
      .addCase(feedbackAddContact.pending, (state, action) => {})
      .addCase(
        feedbackAddContact.fulfilled,
        (state, action: PayloadAction<IFormInputs>) => {
          state.feedback.push(action.payload);
        }
      )
      .addCase(feedbackAddContact.rejected, (state, action) => {});
  },
});

export default FeedbackSlice.reducer;
