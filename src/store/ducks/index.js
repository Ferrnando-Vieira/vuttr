import { combineReducers } from "redux";

import lists from "./lists";
import modals from "./modalActions";

export default combineReducers({
  lists,
  modals
});
