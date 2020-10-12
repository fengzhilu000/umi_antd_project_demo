/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-10-10 17:14:24
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-10-12 10:48:40
 */
//config.js文件

const config = {
    apiUrl: process.env.NODE_ENV === 'development' ? ' http://localhost:8001' : 'https://www.baidu.com',
    apiPrefix: ' http://localhost:8001',
    proxy: false  //是否开启mock代理
  };
  
  export default config;