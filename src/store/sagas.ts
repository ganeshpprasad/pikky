import {all} from 'redux-saga/effects';

import socialLogin from './auth/sagas';
import insertUserName from './user/sagas';

function* rootSaga() {
    yield all([
        socialLogin(),
        insertUserName(),
        // some more
    ]);
}

export default rootSaga;
