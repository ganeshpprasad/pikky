import {FOOD_ACTION} from '../../actions';
import constants from '../../actions/';
const {
    action,
    type: {
        // INSERT_BASE_CUISINE,
        // INSERT_FAV_CUISINE,
        INSERT_PREF,
        SEARCH_CUISINE,
    },
    reducer: {LOADING, SUCCESS, ERROR, INIT},
} = FOOD_ACTION;

const initialState: any = {
    loading: false,
    success: false,
    init: false,
    error: false,
    data: null,
};

const Food = (state = initialState, {type, payload}: any): any => {
    switch (type) {
        case constants(action, INSERT_PREF, LOADING):
            return {
                ...state,
                init: false,
                loading: true,
            };
        case constants(action, INSERT_PREF, INIT):
            return {
                ...state,
                init: true,
            };
        case constants(action, INSERT_PREF, ERROR):
            return {
                ...state,
                error: payload,
                loading: false,
                success: false,
            };
        case constants(action, INSERT_PREF, SUCCESS):
            return {
                ...state,
                loading: false,
                success: true,
                preferences: payload,
            };
        case constants(action, SEARCH_CUISINE, INIT):
            return {
                ...state,
                searchResults: [],
            };
        case constants(action, SEARCH_CUISINE, SUCCESS):
            return {
                ...state,
                loading: false,
                success: true,
                searchResults: payload,
            };
        default:
            return state;
    }
};

export default Food;
