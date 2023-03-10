import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from '@reduxjs/toolkit';
import { IMeaning, getMeaning as getMeaningApi } from '../../../api/api';
import { RootState } from '../../store';

interface SearchState {
  isTyping: boolean;
  meaning: IMeaning[];
  loading: boolean;
  error: Error | SerializedError | null;
}

const initialState: SearchState = {
  isTyping: false,
  meaning: [],
  loading: false,
  error: null,
};

export const getMeaning = createAsyncThunk(
  'search/getMeaning',
  async (word: string, { rejectWithValue }) => {
    try {
      const response = await getMeaningApi(word).then((data) => data);
      return response as IMeaning[];
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setTyping: (state, action: PayloadAction<boolean>) => {
      state.isTyping = action.payload;
    },
    clearMeaning: (state) => {
      state.isTyping = false;
      state.meaning = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getMeaning.fulfilled,
        (state, action: PayloadAction<IMeaning[]>) => {
          state.meaning = action.payload;
          state.loading = false;
          state.error = null;
        }
      )
      .addCase(getMeaning.pending, (state) => {
        state.loading = true;
        state.isTyping = false;
        state.meaning = [];
        state.error = null;
      })
      .addCase(getMeaning.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
        state.meaning = [];
      });
  },
});

export const selectIsTyping = (state: RootState) => state.search.isTyping;
export const selectMeaning = (state: RootState) => state.search.meaning;
export const selectLoading = (state: RootState) => state.search.loading;
export const selectError = (state: RootState) => state.search.error;

export const { setTyping, clearMeaning } = searchSlice.actions;

export default searchSlice.reducer;
