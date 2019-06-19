import { all, takeLatest } from "redux-saga/effects";

import { Types as ListsTypes } from "../ducks/lists";
import { Types as AddTypes } from "../ducks/addTool";

import { getLists, removeTool, searchTool } from "./lists";
import { addTool } from "./addTool";

export default function* rootSaga() {
  yield all([
    takeLatest(ListsTypes.GET_REQUEST, getLists),
    takeLatest(ListsTypes.SEARCH_REQUEST, searchTool),
    takeLatest(ListsTypes.REMOVE_REQUEST, removeTool),
    takeLatest(AddTypes.ADD_TOOL_REQUEST, addTool)
  ]);
}
