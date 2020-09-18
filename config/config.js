/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-09-04 13:58:09
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-09-04 15:33:04
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
  base: '/',//http://localhost:8003
  publicPath: './',
  hash: true,//生成hash文件名
  history: {
    type: 'hash',//hash路由
  },
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