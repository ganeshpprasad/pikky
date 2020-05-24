import {LOGIN_ACTION} from '../../actions';
import constants from '../../actions';
const {
    action,
    type: {SOCIAL_LOGIN},
    reducer: {INIT},
} = LOGIN_ACTION;

// TODO no any. what does google data look like
export const saveSocialData = (googleData: any) => ({
    type: constants(action, SOCIAL_LOGIN, INIT),
    payload: googleData,
});
