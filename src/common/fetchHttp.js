/**
 * Created by cvicseks-mac1 on 2017/6/20.
 */

import { tool } from './index';
//const ip = 'http://192.168.128.18:8089/shyc-service/service/callService.do';
//const ip = 'http://192.168.132.57:9080/shyc-service/service/callService.do';
const ip = 'http://192.168.132.66:8080/mygod-service/service/callService.do';

var fetchHttp = {}
fetchHttp.postJson = function(serviceId,params){
    return new Promise(function(resolve, reject){
        fetch(ip, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                //'Content-Type': 'application/json'
                'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body:serveridByAppendingParams(serviceId,params)
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
                alert('请求成功!');
                resolve(response);
            })
            .catch((err)=> {
                console.log(err)
                alert('请求失败!');
                reject({status:-1});
            })
    })
}

export default fetchHttp;