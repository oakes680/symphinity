  
import { combineReducers } from 'redux';

import { dashboardReducer } from './reducers/dashboardReducer';
import { savedReducer } from './reducers/savedReducer';
import { searchReducer } from './reducers/searchReducer';

export const rootReducer = combineReducers({search: searchReducer, saved: savedReducer, dashboard: dashboardReducer})