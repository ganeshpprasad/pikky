import {call, put, takeEvery} from 'redux-saga/effects';
// import axios from 'axios';

import {FOOD_ACTION} from '../../actions';
import constants from '../../actions';
const {
    action,
    type: {
        // INSERT_BASE_CUISINE,
        // INSERT_FAV_CUISINE,
        INSERT_PREF,
        // SEARCH_CUISINE,
    },
    reducer: {LOADING, ERROR, SUCCESS, INIT},
} = FOOD_ACTION;

// let BASE_URL = `https://134.209.5.234:5000`;
// let INSERT_SOCIAL_TOKEN_API = `/api/insert_social_token`;

async function fetchInsertPreferences(payload) {
    // TODO payload load it maan

    var requestOptions = {
        method: 'GET',
        params: {
            newUserName: payload.userName,
            newUserFoodPref: payload.prefs,
        },
    };
    console.log('makingapi', requestOptions);
    let url = `http://134.209.5.234:5000/insert_food_preference`;
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

function* insertPrefs({payload}) {
    console.log('insertPrefs');

    yield put({
        type: constants(action, INSERT_PREF, LOADING),
    });
    try {
        console.log('wtf');
        const json = yield call(fetchInsertPreferences, payload);
        // TODO ERROR CHECK FOR LOGIN FAIL
        console.log('wtf2', json.data);

        // if (json.status === 'success') {
        yield put({
            type: constants(action, INSERT_PREF, SUCCESS),
            payload: json,
        });
        // }
    } catch (e) {
        console.log('ee', e);

        yield put({
            type: constants(action, INSERT_PREF, ERROR),
            payload: e,
        });
    }
}

export function* foodPrefs() {
    yield takeEvery<any>(constants(action, INSERT_PREF, INIT), insertPrefs);
}
