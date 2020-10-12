/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-10-10 17:51:24
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-10-10 17:55:45
 */
export const dva = {
    config: {
      onError(err) {
          debugger
        err.preventDefault();
        console.error(err.message);
      },
    },
    onError(err) {
        debugger
      err.preventDefault();
      console.error(err.message);
    },
  };