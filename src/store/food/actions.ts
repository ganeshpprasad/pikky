import {FOOD_ACTION} from '../../actions';
import constants from '../../actions';
const {
    action,
    type: {
        // INSERT_BASE_CUISINE,
        INSERT_PREF,
        // INSERT_FAV_CUISINE,
        // SEARCH_CUISINE,
    },
    reducer: {INIT},
} = FOOD_ACTION;

// TODO no any. what does google data look like
export const insertFoodPreferences = (foodData: any) => ({
    type: constants(action, INSERT_PREF, INIT),
    payload: foodData,
});
