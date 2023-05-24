import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";

let redusers=combineReducers({
    profilesPage:profileReducer,
    dialogsPage:dialogReducer
})

let store=createStore(redusers);

export default store