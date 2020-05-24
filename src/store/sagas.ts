import {all} from 'redux-saga/effects';

import socialLogin from './auth/sagas';
import {insertUserName, setGender, updateUserDetails} from './user/sagas';

function* rootSaga() {
    yield all([
        socialLogin(),
        insertUserName(),
        setGender(),
        updateUserDetails(),
        // some more
    ]);
}

export default rootSaga;
