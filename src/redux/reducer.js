
import { combineReducers } from "redux";
import PostsReducer from "./reducers/PostsReducer";
import UsersReducer from "./reducers/usersReducer";


export const rootReducer = combineReducers({
    PostsReducer,
    UsersReducer
})