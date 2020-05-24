// Generating All Constants for Sagas and Reducers.

let default_reducers = {
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error',
    INIT: 'init',
};

export const LOGIN_ACTION = {
    action: 'login',
    type: {SOCIAL_LOGIN: 'social_login', INSERT_USERNAME: 'insert_username'},
    reducer: {...default_reducers},
};

export const USER_ACTION = {
    action: 'user',
    type: {
        INSERT_USERNAME: 'insert_username',
        SET_GENDER: 'set_gender',
        UPDATE_DETAILS: 'update_details',
    },
    reducer: {...default_reducers},
};

export default function constants(action: any, type: any, reducer: any) {
    return `${type}/${action}/_/${reducer}`;
}
