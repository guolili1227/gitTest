export function fetchPostsApi(reddit) {
    var num = parseInt(Math.random() * 5, 10)
    return fetch(`http://192.168.140.20:9088/drgs-report-gateway/findAllSystemAnnouncement`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'pageNum=' + num + '&pageSize=12&currentPage=' + num
    })
        .then(response => response.json())
        .then(json => {
            return JSON.parse(json.result).sysAnnouncement
        })
}
export function fetchAddList(reddit) {
    var num = parseInt(Math.random() * 5, 10)
    return fetch(``, {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'pageNum=' + num + '&pageSize=12&currentPage=' + num
    })
        .then(response => response.json())
        .then(json => {
            return JSON.parse(json.result).sysAnnouncement
        })
}