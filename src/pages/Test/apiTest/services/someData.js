/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-10-12 08:59:57
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-10-12 14:39:46
 */
// import request from '../utils/request';
import request from '@/utils/request';

export function getSomeData(params) {
    debugger
    // return request({
    //     method: "GET",
    //     url: `/appservice/common/v1/getSomeData`,
    //     data: JSON.stringify(params),
    // })

    // return request('/appservice/common/v1/getSomeData', {

    //     method: 'GET'
    
    // });

    return request.get('/appservice/common/v1/getSomeData');
}