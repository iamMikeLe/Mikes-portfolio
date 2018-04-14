import * as actionTypes from "./actionTypes";

export const increment = (passedValue) => {
    return {
        type: actionTypes.INCREMENT,
        value: passedValue
    };
};