import { combineReducers } from '@reduxjs/toolkit';

import companies from '../modules/companies/companiesSlice';

const rootReducer = combineReducers({
  companies
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
