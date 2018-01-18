//
import {put, call, fork, actionChannel} from 'redux-saga/effects'
import * as API from "../api/api.js"
import * as actions from '../action/action.js'

export function* getDetailProducts() {
    const posts = yield call(API.fetchDetailApi, 'start')
    yield put(actions.detailList(posts))
    // console.log("hehe3")
}
export default function*() {
    yield fork(getDetailProducts);
}