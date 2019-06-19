import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as AddActions } from "../ducks/addTool";

export function* addTool(action) {
  try {
    const response = yield call(api.post, "/tools", action.payload.data);

    yield put(AddActions.addNewToolSuccess(response.data));
  } catch (err) {
    yield put(AddActions.addNewToolFailure(err));
  }
}
