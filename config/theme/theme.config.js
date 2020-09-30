/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-09-29 14:49:48
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-09-29 17:57:32
 */

import wh_theme from './wh_theme.config';
import cs_theme from './cs_theme.config';

const PROJECT = process.env.PROJECT;
const designWidth = process.env.DesignWidth;
const designHeight = process.env.DesignHeight;

const themeConfig = (function (PROJECT) {
  switch (PROJECT) {
    case 'WH_PROJECT':
      return wh_theme;
    case 'CS_PROJECT':
      return cs_theme;
    default:
      return {};
  }
})(PROJECT);

export default {
  ...themeConfig,
  'prj-design-width': designWidth + 'px',
  'prj-design-height': designHeight + 'px',
};

// import cs_theme from './cs_theme.config';
// import wh_theme from './wh_theme.config';//wh_theme.config

// const PROJECT = process.env?.PROJECT;
// const designWidth = process.env.DesignWidth;
// const designHeight = process.env.DesignHeight;

// const themeConfig = (function () {
//   // debugger
//   console.log("PROJECT: ", PROJECT);
//   switch (PROJECT) {
//     case 'WH_PROJECT':
//       return cs_theme;
//     case 'CS_PROJECT':
//       return wh_theme;
//     default:
//       return {};
//   }
// })(PROJECT);

// export default {
//   ...themeConfig,
//   'prj-design-width': designWidth + 'px',
//   'prj-design-height': designHeight + 'px',
// };