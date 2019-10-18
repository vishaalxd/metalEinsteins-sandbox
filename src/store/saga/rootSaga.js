import { all, fork } from 'redux-saga/effects';
import globalSagaWatcher from "./saga";

export default function* rootRunner() {
    yield all ([
        // fork(globalSagaWatcher)
    ])
}