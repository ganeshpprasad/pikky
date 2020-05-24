import {all} from 'redux-saga/effects';

import socialLogin from './auth/sagas';
import {insertUserName, setGender, updateUserDetails} from './user/sagas';
import {foodPrefs} from './food/sagas';

function* rootSaga() {
    yield all([
        socialLogin(),
        insertUserName(),
        setGender(),
        updateUserDetails(),
        foodPrefs(),
        // some more
    ]);
}

export default rootSaga;
