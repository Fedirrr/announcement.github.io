import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {announcementReducer} from "./components/redux/reducer/reducer";
import thunk from "redux-thunk";

const store = createStore(
    announcementReducer,
    composeWithDevTools(applyMiddleware(thunk))
)
export default store;

