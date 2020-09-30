/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-09-29 14:48:24
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-09-29 18:02:18
 */
const colorPalette = {
    'primary-color': '#17B5FF',
    'primary-color-50': '#e6f7ff',
    'primary-color-100': '#bae7ff',
    'primary-color-200': '#91d5ff',
    'primary-color-300': '#69c0ff',
    'primary-color-400': '#40a9ff',
    'primary-color-500': '#1890ff',
    'primary-color-600': '#096dd9',
    'primary-color-700': '#0050b3',
    'primary-color-800': '#003a8c',
    'primary-color-900': '#002766',
  
    'primary-color-bg': '#141D3C',
    'module-title-color': '#02D0E7',
    'icon-primary-color': '#00FFFF',
    'primary-trail-color': '#335A8A', //痕迹底色
    'font-color-base': '#FFFFFF', //主字体颜色
};

export default {
  //antd样式覆盖

  //基础配色
  'primary-color': colorPalette['primary-color'], //主题色，标题
  'disable-color': colorPalette['primary-color-50'],
  'link-color': colorPalette['primary-color-500'],

  //组件背景
  'component-background': 'transparent',

  // height rules
  'height-base': '100px',
  'height-lg': '120px',
  'height-sm': '80px',

  //Font
  'text-color': colorPalette['font-color-base'],
  'font-size-base': '48px', //字体大小
  'font-line-height-base': '48px', //行高
  'font-family-base': 'PingFang SC', //字体苹方

  //border
  'border-color-base': colorPalette['primary-color-700'], // 边框色
  'border-radius-base': '2px', // 组件/浮层圆角
  'border-width-base': '1px',
  'box-shadow-base': '0 2px 8px' + colorPalette['primary-color-100'], // 浮层阴影
  'border-color-split': colorPalette['primary-trail-color'],

  //table theme
  'table-header-bg': colorPalette['primary-color-700'],
  'table-header-color': colorPalette['font-color-base'],


  //自定义样式
  //colors
  ...colorPalette,

  'primary-color-light': colorPalette['primary-color-500'], //highlight
  'primary-color-middle': colorPalette['primary-color-700'], //hover
  'primary-color-dark': colorPalette['primary-color-900'], //bg

  //title
  'heading-1-size': '100px',
  'heading-2-size': '84px',
  'heading-3-size': '72px',
  'heading-4-size': '56px',

  //login
  'login-input-height': '128px',
  'login-font-size': '64px',
  'login-heading-1-size': '120px',
  'login-heading-2-size': '72px',

  //IconFont
  'icon-color': colorPalette['icon-primary-color'],
  'icon-font-1-size': '68px',
  'icon-font-2-size': '40px',
  'icon-control-size': '64px', //云台控制图标大小

  //nav
  'nav-item-width': '334px',
  'nav-item-height': '89px',

  //scroll
  'scroll-bar-width': '20px',

  //modal
  'modal-body-margin': '20px',


  'test-color': colorPalette['font-color-base'],
};
  