/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-10-10 16:53:57
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-10-12 13:50:40
 */
import someDataArray from './someDataArray';
const responseData = {
    status: 'ok',
    code: 200,
    message: '请求成功',
    data: someDataArray,
  }
  
export default {
    // 支持值为 Object 和 Array
    'GET /appservice/common/v1/getSomeData': {...responseData},

    // GET POST 可省略 比如：
    '/api/users/1': { id: 1 },
}