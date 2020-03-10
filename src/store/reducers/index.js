import { combineReducers } from "redux";
import users from "store/reducers/users";
import cards from "store/reducers/cards";
import list from "store/reducers/lists"; 

export default combineReducers({
    users,
    list,
    cards
})