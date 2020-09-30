
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
    'module-title-color': '#02D0E7', //子标题
    'icon-primary-color': '#00FFFF',
    'icon-warn-color': '#FF3F3F',
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
    'height-base': '80px',
    'height-lg': '60px',
    'height-sm': '80px', //model 标题高度
  
    //Font
    'text-color': colorPalette['font-color-base'],
    'font-size-base': '36px', //字体大小
    'font-line-height-base': '36px', //行高
    'font-family-base': 'PingFang SC', //字体苹方
  
    //border
    'border-color-base': colorPalette['primary-color-700'], // 边框色
    'border-radius-base': '4px', // 组件/浮层圆角
    'border-width-base': '2px',
    'box-shadow-base': '0 4px 16px' + colorPalette['primary-color-100'], // 浮层阴影
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
    'heading-size': '80px',
    'heading-1-size': '48px',
    'heading-2-size': '38px',
    'heading-3-size': '40px',
    'heading-4-size': '38px',
  
    //login
    'login-input-height': '60px',
    'login-font-size': '52px',
    'login-heading-1-size': '120px',
    'login-heading-2-size': '72px',
    'login-heading-3-size': '80px',
  
    //IconFont
    'icon-color': colorPalette['icon-primary-color'],
    'icon-font-1-size': '60px', //登录登出icon
    'icon-font-2-size': '34px', //Icon 默认size
    'icon-font-3-size': '36px',
    'icon-control-size': '48px', //云台控制图标大小
  
    //nav
    'nav-item-width': '344px',
    'nav-item-height': '84px',
  
    //scroll
    'scroll-bar-width': '12px',
  
    //modal
    'modal-body-margin': '20px',
  
    //蒙层
    'mantle-color-primary': '#1663b426',
  
    //按钮背景
    'button-color-checked': '#1663B4', //选中
    'button-color-unchecked': '#0C386B', //未选中

    'test-color': colorPalette['icon-warn-color'],//测试项
  };
  