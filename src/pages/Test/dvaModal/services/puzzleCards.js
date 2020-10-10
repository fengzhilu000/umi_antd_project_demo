/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-10-10 09:02:48
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-10-10 09:03:03
 */
function checkStatus(response) {
    debugger
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
  
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  
  /**
   * Requests a URL, returning a promise.
   *
   * @param  {string} url       The URL we want to request
   * @param  {object} [options] The options we want to pass to "fetch"
   * @return {object}           An object containing either "data" or "err"
   */
  export default async function request(url, options) {
    debugger
    const response = await fetch(url, options);
    checkStatus(response);
    return await response.json();
  }