import { all, takeLatest } from "redux-saga/effects";

import { Types as ListsTypes } from "../ducks/lists";

import { getLists, removeTool, searchTool } from "./lists";
import { addTool } from "./addTool";

export default function* rootSaga() {
  yield all([
    takeLatest(ListsTypes.GET_REQUEST, getLists),
    takeLatest(ListsTypes.SEARCH_REQUEST, searchTool),
    takeLatest(ListsTypes.REMOVE_REQUEST, removeTool),
    takeLatest(ListsTypes.ADD_TOOL_REQUEST, addTool)
  ]);
}
