/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-09-29 17:35:25
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-10-09 14:12:26
 */
import { defineConfig } from 'umi';
export default defineConfig(()=>
{
  const PROJECT = process.env.PROJECT;
  console.log('PROJECT', PROJECT);
  // return {define: {
  //   // 环境的请求基础地址
  //   'process.env.REQUEST_BASE_URL': 'http://10.10.2.1:8080'
  //   }
  // }
});
