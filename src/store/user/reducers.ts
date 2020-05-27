import {USER_ACTION} from '../../actions';
import constants from '../../actions/';
const {
    action,
    type: {INSERT_USERNAME, SET_GENDER, UPDATE_DETAILS},
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
                name: payload,
                init: true,
            };
        case constants(action, INSERT_USERNAME, ERROR):
            return {
                ...state,
                msg: payload.message,
                error: true,
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
        case constants(action, SET_GENDER, SUCCESS):
            return {
                ...state,
                loading: false,
                success: true,
                gender: payload,
            };
        case constants(action, UPDATE_DETAILS, SUCCESS):
            return {
                ...state,
                loading: false,
                success: true,
                city: payload,
            };
        default:
            return state;
    }
};
export default User;
