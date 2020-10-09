/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-09-04 13:58:09
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-09-30 11:18:04
 */
// import { defineConfig } from 'umi';

// export default defineConfig({
//     headScripts: [{ src: "Cesium.js", defer: true }],
//     copy: ['node_modules/cesium/Build/Cesium'],
//     nodeModulesTransform: {
//         type: 'none',
//     },
//     routes: [
//         { path: '/', component: '@/pages/index' },
//     ],
// });

import { defineConfig } from 'umi';
import theme from './theme/theme.config';
import { resolve } from 'path';

export default defineConfig({
  /** start */
  headScripts: [{ src: "Cesium.js", defer: true }],
  copy: ['node_modules/cesium/Build/Cesium'],
  links: [{ rel: 'stylesheet', href: './Widgets/widgets.css' }],
  /** end */
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'xfguo umi_antd_project_demo web',
  base: 'gxf',// '/' or 'http://localhost:8003'
  publicPath: './',
  hash: true,//生成hash文件名
  history: {
    type: 'hash',//hash路由
  },
  alias: {
    '@': resolve(__dirname, './src'), // 解析出一个当前目录下的同级src的绝对路径
    '@/utils': resolve(__dirname, './src/utils'),// 全局变量
    // '@/services': resolve(__dirname, './src/services'),
    // '@/assets': resolve(__dirname, './src/assets'),
    // '@/components': resolve(__dirname, './src/components'),
    // '@/layouts': resolve(__dirname, './src/layouts'),
    // '@/config': resolve(__dirname, './src/config'),
    // '@/pages': resolve(__dirname, './src/pages'),
  },
  theme: theme || {},//主题切换
//   routes: 
// //   [
// //     { path: '/', component: '@/pages/index' },
// //   ],
//   [
//     {
//       path: '/',
//       component: '@/layouts/index',
//       routes: [
//         {
//           path: '/',
//           component: '@/pages/index'
//         //   component: './pages/index',
//         },
//         // {
//         //   path: '/users',
//         //   component: './pages/users',
//         // },
//         ],
//     },
//   ]
});