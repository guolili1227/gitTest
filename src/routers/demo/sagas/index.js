//
import {take, put, call, fork, actionChannel} from 'redux-saga/effects'
import * as API from "../api"
import * as actions from '../actions'

export function* clickFlow() {
    console.log("hi");
    const chan = yield actionChannel('SELECT_BUTTON')
    while (true) {
        const action = yield take(chan)
        const posts = yield call(API.fetchPostsApi, action.reddit)
        yield put(actions.getNoticeList(posts))
    }
}
export function* getAllProducts() {
    console.log("hehe")
    const posts = yield call(API.fetchPostsApi, 'start')
    console.log("hehe2")
    yield put(actions.getNoticeList(posts))
    console.log("hehe3")
}
export default function*() {
    yield fork(getAllProducts);
    yield fork(clickFlow)

}