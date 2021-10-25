import { combineReducers } from "redux";
import { alert } from "./alert.reducer";
import { users } from './users.reducer';
import { sidebar } from './sidebar.reducer';
import { authentication } from './authentication.reducer';

const rootReducer = combineReducers({
    authentication,
    users,
    alert,
    sidebar
})    

export default rootReducer;