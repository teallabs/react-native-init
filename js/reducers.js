import { combineReducers } from "redux";
const navReducer = (state, action) => {
    return state?state:{}
};
  

export default combineReducers({
    nav:navReducer
});
