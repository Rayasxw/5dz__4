
import { combineReducers } from "redux";
import PostsReducer from "./reducers/PostsReducer";
import usersReducer from "./reducers/usersReducer";


export const rootReducer = combineReducers({
    PostsReducer,
    usersReducer
})