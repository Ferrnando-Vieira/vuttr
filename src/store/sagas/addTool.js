import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as ListsActions } from "../ducks/lists";

export function* addTool(action) {
  try {
    const response = yield call(api.post, "/tools", action.payload.data);

    console.log("SAGA_ADD_TOOL_SUCESSO", response.data);

    yield put(ListsActions.addNewToolSuccess(response.data));
  } catch (err) {
    console.log("SAGA_ADD_TOOL_ERRO", err);
    yield put(ListsActions.addNewToolFailure(err));
  }
}
