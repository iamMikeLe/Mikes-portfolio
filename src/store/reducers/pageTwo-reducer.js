import * as actionTypes from "../actions/actionTypes";

const initialState = {
    firstName: "Mike",
    listOfNames: ["Mike", "Tom", "Natasha"],
    mikeObject: { name: "Mike Le", age: 25 }
}

const pageTwoReducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.INCREMENT:
        return {
            ...state,
            mikeObject: {
                ...state.mikeObject,
                age: state.mikeObject.age + action.value
            }
        };
        
        default:
        return state;
    }
};

export default pageTwoReducer;
