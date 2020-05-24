import {combineReducers} from 'redux';

import auth from './auth';
import user from './user/reducers';
import food from './food/reducers';

const rootReducer = combineReducers({
    auth,
    user,
    food,
});

export default rootReducer;
