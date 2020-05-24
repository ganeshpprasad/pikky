import {combineReducers} from 'redux';

import auth from './auth';
import user from './user/reducers';

const rootReducer = combineReducers({
    auth,
    user,
});

export default rootReducer;
