import {FOOD_ACTION} from '../../actions';
import constants from '../../actions';
const {
    action,
    type: {
        INSERT_BASE_CUISINE,
        INSERT_PREF,
        INSERT_FAV_CUISINE,
        SEARCH_CUISINE,
    },
    reducer: {INIT},
} = FOOD_ACTION;

// TODO no any. what does google data look like
export const insertFoodPreferences = (foodData: any) => ({
    type: constants(action, INSERT_PREF, INIT),
    payload: foodData,
});

export const saveBaseCuisine = (foodData: any) => ({
    type: constants(action, INSERT_BASE_CUISINE, INIT),
    payload: foodData,
});

export const saveFavCuisine = (foodData: any) => ({
    type: constants(action, INSERT_FAV_CUISINE, INIT),
    payload: foodData,
});

export const searchCuisine = (foodData: any) => {
    console.log('searchCuisine', foodData);

    return {
        type: constants(action, SEARCH_CUISINE, INIT),
        payload: foodData,
    };
};
