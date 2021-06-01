const { proxy } = require('./config')
const interceptors_res = []
const interceptors_req = []
const interceptors = {
    request: {
        use(callback, err) {
            interceptors_req.push([callback, err])
        }
    },
    response: {
        use(callback, err) {
            interceptors_res.push([callback, err])
        }
    }
}
const get = (url, params) => {
    let defaultParams = {
    }
    let opt = {
        url: url,
        params,
        headers: {}
    }
    params = params ? Object.assign(params.params, defaultParams) : {}
    var xhr = new XMLHttpRequest();
    let str = proxy + url + '?';
    for (let key in params) {
        str += `${key}=${params[key]}&`
    }
    str = str.slice(0, -1);
    interceptors_req.forEach(e => {
        opt = e[0](opt)
    })

    xhr.open('GET', str, true);
    for (let key in opt.headers) {
        xhr.setRequestHeader(key, opt.headers[key])
    }
    xhr.send()
    return new Promise((resovle, reject) => {
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    interceptors_res.forEach(e => {
                        xhr.response = e[0]({
                            response: xhr.response,
                            status: xhr.status
                        })
                    })
                    resovle(JSON.parse(xhr.response))
                } else {
                    interceptors_res.forEach(e => {
                        xhr.response = e[1]({
                            response: xhr.response,
                            status: xhr.status
                        })
                    })
                    reject(xhr.response)
                }
            }
        }
    })
}
const del = (url, params) => {
    let defaultParams = {
    }
    let opt = {
        url: url,
        params,
        headers: {}
    }
    params = params ? Object.assign(params.params, defaultParams) : {}
    var xhr = new XMLHttpRequest();
    let str = proxy + url + '?';
    for (let key in params) {
        str += `${key}=${params[key]}&`
    }
    str = str.slice(0, -1);
    interceptors_req.forEach(e => {
        opt = e[0](opt)
    })

    xhr.open('DELETE', str, true);
    for (let key in opt.headers) {
        xhr.setRequestHeader(key, opt.headers[key])
    }
    xhr.send()
    return new Promise((resovle, reject) => {
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    interceptors_res.forEach(e => {
                        xhr.response = e[0](xhr.response)
                    })
                    resovle(JSON.parse(xhr.response))
                } else {
                    interceptors_res.forEach(e => {
                        xhr.response = e[1](xhr)
                    })
                    reject(xhr.response)
                }
            }
        }
    })
}



const post = (url, body) => {
    let opt = {
        url: url,
        body,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    var xhr = new XMLHttpRequest();
    interceptors_req.forEach(e => {
        opt = e[0](opt)
    })
    let str = proxy + url
    xhr.open('POST', str, true);
    for (let key in opt.headers) {
        xhr.setRequestHeader(key, opt.headers[key])
    }
    let bd = ''
    for (let key in body) {
        bd += `${key}=${body[key]}&`
    }
    bd = bd.slice(0, -1)
    xhr.send(bd)
    return new Promise((resovle, reject) => {
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    interceptors_res.forEach(e => {
                        xhr.response = e[0](xhr.response)
                    })
                    resovle(JSON.parse(xhr.response))
                } else {
                    interceptors_res.forEach(e => {
                        xhr.response = e[1](xhr)
                    })
                    reject(xhr.response)
                }
            }
        }
    })
}


const put = (url, body) => {
    let opt = {
        url: url,
        body,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }
    var xhr = new XMLHttpRequest();
    interceptors_req.forEach(e => {
        opt = e[0](opt)
    })
    let str = proxy + url
    xhr.open('PUT', str, true);
    for (let key in opt.headers) {
        xhr.setRequestHeader(key, opt.headers[key])
    }
    let bd = ''
    for (let key in body) {
        bd += `${key}=${body[key]}&`
    }
    bd = bd.slice(0, -1)
    xhr.send(bd)
    return new Promise((resovle, reject) => {
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    interceptors_res.forEach(e => {
                        xhr.response = e[0](xhr.response)
                    })
                    resovle(JSON.parse(xhr.response))
                } else {
                    interceptors_res.forEach(e => {
                        xhr.response = e[1](xhr)
                    })
                    reject(xhr.response)
                }
            }
        }
    })
}
module.exports = {
    put,
    del,
    get,
    post,
    interceptors
}