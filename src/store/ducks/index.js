import { combineReducers } from "redux";

import lists from "./lists";
import addTool from "./addTool";

export default combineReducers({
  lists,
  addTool
});
