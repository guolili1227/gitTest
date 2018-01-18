import * as ACTIONS from '../action/action.js'
const ACTION_HANDLERS = {
    [ACTIONS.DETAIL_LIST]:(state,action)=>(
        Object.assign({},state,{
            list:action.list
        })
    )
}
const initialState = {
    list:[]
}
export function Reducer(state= initialState,action){
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state,action):state
}

export default Reducer
