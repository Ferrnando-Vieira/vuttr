import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as ListsActions } from "../ducks/lists";

export function* getLists() {
  try {
    const response = yield call(api.get, "/tools");

    yield put(ListsActions.getListSuccess(response.data));
  } catch (err) {
    yield put(ListsActions.getListFailure(err));
  }
}

export function* removeTool(action) {
  try {
    yield call(api.delete, `/tools/${action.payload.id}`);

    yield call(ListsActions.removeToolSuccess());
  } catch (err) {
    yield put(ListsActions.removeToolFailure(err));
  }
}

export function* searchTool(action) {
  try {
    const response = yield call(
      api.get,
      `/tools?${action.payload.seachType}=${action.payload.text}`
    );
    yield put(ListsActions.getListSuccess(response.data));
  } catch (err) {
    yield put(ListsActions.getListFailure(err));
  }
}
