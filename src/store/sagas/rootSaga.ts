import { all, fork } from "redux-saga/effects";

import todoSaga from "./saga";

export function* rootSaga() {
  yield all([fork(todoSaga)]);
}