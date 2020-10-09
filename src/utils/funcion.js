/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-09-30 11:14:08
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-09-30 11:15:59
 */
/* ---全局变量--- */
//#region 菜单类型
export const setDefaultMenuType = menuType => {
    localStorage.setItem('menuType', menuType);
};
  
export const getDefaultMenuType = () => {
    return localStorage.getItem('menuType');
};
//#endregion