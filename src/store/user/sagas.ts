import {call, put, takeEvery} from 'redux-saga/effects';
// import axios from 'axios';

import {USER_ACTION} from '../../actions';
import constants from '../../actions';
const {
    action,
    type: {INSERT_USERNAME, SET_GENDER, UPDATE_DETAILS},
    reducer: {LOADING, ERROR, SUCCESS, INIT},
} = USER_ACTION;

// let BASE_URL = `https://134.209.5.234:5000`;
// let INSERT_SOCIAL_TOKEN_API = `/api/insert_social_token`;

async function fetchInsertUserNameApi(userName) {
    // TODO payload load it maan

    var requestOptions = {
        method: 'POST',
    };
    console.log('makingapi');
    let url = `http://134.209.5.234:5000/api/insert_username?newUserName=alaa`;
    try {
        console.log('url >>>> ', url);
        const response = await fetch(url, requestOptions);
        // TODO Exception handling based on response
        return await response.json();
    } catch (error) {
        console.log('error', error);
        return error;
    }
}

async function updateUserDetailsApi(userDetails) {
    // TODO payload load it maan

    var requestOptions = {
        method: 'POST',
        params: {
            newUserGender: userDetails.gender,
            newUserCity: userDetails.cityCoords,
        },
    };
    console.log('makingapi');
    let url = `http://134.209.5.234:5000/api/insert_personal_details`;
    try {
        console.log('url >>>> ', url);
        const response = await fetch(url, requestOptions);
        // TODO Exception handling based on response
        console.log('response >>>> ', response);
        return await response.json();
    } catch (error) {
        console.log('error', error);
        return error;
    }
}

function* _updateUserDetails({payload}) {
    console.log('_updateUserDetails', _updateUserDetails);

    yield put({
        type: constants(action, UPDATE_DETAILS, LOADING),
    });
    try {
        console.log('wtf');
        const json = yield call(updateUserDetailsApi, payload);
        // TODO ERROR CHECK FOR LOGIN FAIL
        console.log('wtf2', json.data);

        // if (json.status === 'success') {
        yield put({
            type: constants(action, UPDATE_DETAILS, SUCCESS),
            payload: json,
        });
        // }
    } catch (e) {
        console.log('ee', e);

        yield put({
            type: constants(action, UPDATE_DETAILS, ERROR),
            payload: e,
        });
    }
}

function* _insertUserName({payload}) {
    yield put({
        type: constants(action, INSERT_USERNAME, LOADING),
    });
    try {
        console.log('wtf');
        const json = yield call(fetchInsertUserNameApi, payload);
        // TODO ERROR CHECK FOR LOGIN FAIL
        console.log('wtf2', json.data);

        // if (json.status === 'success') {
        yield put({
            type: constants(action, INSERT_USERNAME, SUCCESS),
            payload: json,
        });
        // }
    } catch (e) {
        console.log('ee', e);

        yield put({
            type: constants(action, INSERT_USERNAME, ERROR),
            payload: e,
        });
    }
}

function* _setGender({payload}) {
    yield put({
        type: constants(action, SET_GENDER, SUCCESS),
        payload,
    });
}

export function* insertUserName() {
    yield takeEvery<any>(
        constants(action, INSERT_USERNAME, INIT),
        _insertUserName,
    );
}

export function* updateUserDetails() {
    yield takeEvery<any>(
        constants(action, UPDATE_DETAILS, INIT),
        _updateUserDetails,
    );
}

export function* setGender() {
    yield takeEvery<any>(constants(action, SET_GENDER, INIT), _setGender);
}
