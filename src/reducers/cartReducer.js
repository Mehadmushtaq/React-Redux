import { ADD_ITEM, DELETE_ITEM } from "../actionTypes/actionTypes";

//defining initial state
const initialState = {
  numOfItems: 0,
  
};

//return object
//takes 2 arguents initial state and action -> result updated instance 
export const cartReducer = (state=initialState,action)=> {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,       //save previous state
        numOfItems: state.numOfItems + 1,
      };

    case DELETE_ITEM:
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      };
    default:
      return state;
  }
};


