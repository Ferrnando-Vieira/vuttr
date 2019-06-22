import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as ListsActions } from "../ducks/lists";

export function* getLists() {
  try {
    const response = yield call(api.get, "/tools");

    console.log("Get list sucesso", response.data);

    yield put(ListsActions.getListSuccess(response.data));
  } catch (err) {
    console.log("Get list erro", err);
    yield put(ListsActions.getListFailure(err));
  }
}

export function* removeTool(action) {
  try {
    yield call(api.delete, `/tools/${action.payload.id}`);

    console.log("remove sucesso", `/tools/${action.payload.id}`);

    yield put(ListsActions.removeToolSuccess());
  } catch (err) {
    console.log("remove erro", err);
    yield put(ListsActions.removeToolFailure(err));
  }
}

export function* searchTool(action) {
  try {
    const response = yield call(
      api.get,
      `/tools?${action.payload.seachType}=${action.payload.text}`
    );

    console.log(
      "Search sucesso",
      `/tools?${action.payload.seachType}=${action.payload.text}`
    );

    yield put(ListsActions.getListSuccess(response.data));
  } catch (err) {
    console.log("Search erro", err);

    yield put(ListsActions.getListFailure(err));
  }
}
