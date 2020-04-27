import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppDispatch, AppThunk } from '../../app/store';
import { ApiConfig } from '../../config';
import { Companies, Company } from './types';

const initialState: Companies = {
  data: [],
  requesting: false,
  error: false
};

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {
    fetchCompanies(state, action: PayloadAction<Company[]>) {
      state = {
        data: action.payload,
        error: false,
        requesting: true
      };
      return state;
    }
  }
});

export const fetchCompanies = (): AppThunk => async (dispatch: AppDispatch) => {
  const response = await fetch(
    `${ApiConfig.URL}${ApiConfig.endpoints.companies}`
  ).then((response) => response.json());
  dispatch(companiesSlice.actions.fetchCompanies(response));
};

export default companiesSlice.reducer;
