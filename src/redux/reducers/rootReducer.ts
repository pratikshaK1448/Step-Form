import { combineReducers } from 'redux';
import updateStepReducer from './configReducer';
import userInfoReducer from './userInfoReducer';
import submitApplication from './submitAppReducer';
// import { IrootReducer } from './reducer.types';

const rootReducer = combineReducers({
    configData: updateStepReducer,
    userInfo: userInfoReducer,
    applicationSubmitted: submitApplication,
});

export default rootReducer;