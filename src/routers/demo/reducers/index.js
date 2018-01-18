import * as ACTIONS from '../actions'
const ACTION_HANDLERS = {
    //登录
    [ACTIONS.SELECT_BUTTON]: (state, action) => (
        Object.assign({}, state, {
            buttonType: action.reddit
        })
    ),
    [ACTIONS.DEMO_NOTICE_LIST_GET]: (state, action) => (
        Object.assign({}, state, {
            list: action.list
        })
    )

}

const initialState = {
    buttonType: 'default',
    list: []
}
export function Reducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
}

export default Reducer