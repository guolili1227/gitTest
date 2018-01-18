
export const SELECT_BUTTON = 'SELECT_BUTTON'
export const DEMO_NOTICE_LIST_GET = 'DEMO_NOTICE_LIST_GET'

export function selectButtonType(reddit) {
    return {
        type: SELECT_BUTTON,
        reddit
    }
}

export function getNoticeList(list) {
    return {
        type: DEMO_NOTICE_LIST_GET,
        list
    }
}