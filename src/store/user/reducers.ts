import {USER_ACTION} from '../../actions';
import constants from '../../actions/';
const {
    action,
    type: {INSERT_USERNAME},
    reducer: {LOADING, SUCCESS, ERROR, INIT},
} = USER_ACTION;

const initialState: any = {
    loading: false,
    success: false,
    init: false,
    error: false,
    data: null,
};

const User = (state = initialState, {type, payload}: any): any => {
    switch (type) {
        case constants(action, INSERT_USERNAME, LOADING):
            return {
                ...state,
                init: false,
                loading: true,
            };
        case constants(action, INSERT_USERNAME, INIT):
            return {
                ...state,
                init: true,
            };
        case constants(action, INSERT_USERNAME, ERROR):
            return {
                ...state,
                error: payload,
                loading: false,
                success: false,
            };
        case constants(action, INSERT_USERNAME, SUCCESS):
            return {
                ...state,
                loading: false,
                success: true,
                data: payload,
            };
        default:
            return state;
    }
};
export default User;
