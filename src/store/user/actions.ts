import {USER_ACTION} from '../../actions';
import constants from '../../actions';
const {
    action,
    type: {INSERT_USERNAME, SET_GENDER, UPDATE_DETAILS},
    reducer: {INIT},
} = USER_ACTION;

export const insertUserName = (userName: any) => ({
    type: constants(action, INSERT_USERNAME, INIT),
    payload: userName,
});

export const setGender = (gender: any) => ({
    type: constants(action, SET_GENDER, INIT),
    payload: gender,
});

export const updateUserDetails = (userObj: any) => ({
    type: constants(action, UPDATE_DETAILS, INIT),
    payload: userObj,
});
