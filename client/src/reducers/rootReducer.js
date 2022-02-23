import { combineReducers } from 'redux';

import { uiReducer } from './uiReducer';
import { colorReducer } from './colorReducer';



export const rootReducer = combineReducers({
    ui: uiReducer,
    color: colorReducer,
})

