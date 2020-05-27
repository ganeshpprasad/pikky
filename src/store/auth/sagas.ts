import {call, put, takeEvery} from 'redux-saga/effects';
// import axios from 'axios';

import {LOGIN_ACTION} from '../../actions';
import constants from '../../actions';
const {
    action,
    type: {SOCIAL_LOGIN},
    reducer: {LOADING, ERROR, SUCCESS, INIT},
} = LOGIN_ACTION;

// let BASE_URL = `https://134.209.5.234:5000`;
// let INSERT_SOCIAL_TOKEN_API = `/api/insert_social_token`;

async function fetchInsertSocialTokenApi(payload) {
    // TODO payload load it maan

    var requestOptions = {
        method: 'POST',
    };
    console.log('makingapi', payload);
    let url = `https://pikky.io/phase1/api/insert_social_token?user_id=${'23'}&token=${'s4'}`;
    try {
        const response = await fetch(url, requestOptions);
        console.log('response', response);
        // TODO Exception handling based on response
        let json = response.json();
        return json;
    } catch (error) {
        console.log('error', error);
        return error;
    }
}

function* socialLogin({payload}) {
    yield put({
        type: constants(action, SOCIAL_LOGIN, LOADING),
    });
    try {
        const json = yield call(fetchInsertSocialTokenApi, payload);
        // TODO ERROR CHECK FOR LOGIN FAIL

        console.log('json in auth', json);
        // if (json.status === 'success') {
        yield put({
            type: constants(action, SOCIAL_LOGIN, SUCCESS),
            payload: json,
        });
        // } else {
        // throw json.message;
        // }
    } catch (e) {
        console.log('ee', e);

        yield put({
            type: constants(action, SOCIAL_LOGIN, ERROR),
            payload: e,
        });
    }
}

export default function* login() {
    yield takeEvery<any>(constants(action, SOCIAL_LOGIN, INIT), socialLogin);
}
