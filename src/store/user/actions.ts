import {USER_ACTION} from '../../actions';
import constants from '../../actions';
const {
    action,
    type: {INSERT_USERNAME},
    reducer: {INIT},
} = USER_ACTION;

export const insertUserName = (userName: any) => ({
    type: constants(action, INSERT_USERNAME, INIT),
    payload: userName,
});
