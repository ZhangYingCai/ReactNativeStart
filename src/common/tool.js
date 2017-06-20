/**
 * Created by cvicseks-mac1 on 2017/6/20.
 */

//export function urlByAppendingParams(url: string, params: Object) {
//    let result = url
//    if (result.substr(result.length - 1) != '?') {
//        result = result + `?`
//    }
//
//    for (let key in params) {
//        let value = params[key]
//        result += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`
//    }
//
//    result = result.substring(0, result.length - 1);
//    return result;
//}

export default function serveridByAppendingParams(serverid: string, params: Object) {
    let result = 'serviceId='+serverid+'&'

    for (let key in params) {
        let value = params[key]
        result += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`
    }

    result = result.substring(0, result.length - 1);
    return result;
}