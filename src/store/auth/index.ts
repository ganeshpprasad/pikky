import {LOGIN_ACTION} from '../../actions';
import constants from '../../actions/';
const {
    action,
    type: {SOCIAL_LOGIN},
    reducer: {LOADING, SUCCESS, ERROR, INIT},
} = LOGIN_ACTION;

// TODO any no any
const initialState: any = {
    loading: false,
    success: false,
    init: false,
    error: false,
    data: null,
};

const Auth = (state = initialState, {type, payload}: any): any => {
    switch (type) {
        case constants(action, SOCIAL_LOGIN, LOADING):
            return {
                ...state,
                loading: true,
            };
        case constants(action, SOCIAL_LOGIN, INIT):
            return {
                ...state,
                init: true,
            };
        case constants(action, SOCIAL_LOGIN, ERROR):
            return {
                ...state,
                error: payload,
                loading: false,
                success: false,
            };
        case constants(action, SOCIAL_LOGIN, SUCCESS):
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

export default Auth;
