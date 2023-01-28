import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
  SerializedError,
} from '@reduxjs/toolkit';
import { IMeaning, getMeaning as getMeaningApi } from '../../../api/api';
import { RootState } from '../../store';

interface SearchState {
  meaning: IMeaning[];
  loading: boolean;
  error: Error | SerializedError | null;
}

const initialState: SearchState = {
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
    clearMeaning: (state, action) => {
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
        }
      )
      .addCase(getMeaning.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getMeaning.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
        state.meaning = [];
      });
  },
});

export const selectMeaning = (state: RootState) => state.search.meaning;
export const selectLoading = (state: RootState) => state.search.loading;
export const selectError = (state: RootState) => state.search.error;

export const { clearMeaning } = searchSlice.actions;

export default searchSlice.reducer;
