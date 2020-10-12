/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-10-10 16:49:12
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-10-12 15:00:31
 */
//request.js文件

import { notification, message } from 'antd';
import axios from 'axios';
// import qs from 'qs';
// import * as func from './function';
// import { userRefreshToken } from './userRefreshToken';
// import { ymrRefreshToken } from './ymrRefreshToken';

const codeMessage = {
//   40101: '再输错两次将锁住',
// 　40200: '用户不存在',
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const showError = error => {
    debugger
  console.log(error, 'error');
  const { response } = error;
  console.log("response",response);
  if (
    response &&
    response.status &&
    response.statusText &&
    response.config.url.indexOf('login') >= 0
  ) {

    if (response.statusText.toUpperCase() === 'NOT FOUND') {
      if(response.data!==undefined&&response.data!==null){
        const responseData = response.data;
        if(responseData.message.toUpperCase()==='NOT PERMISSION'){
          message.error("未配置矿山工程权限，请配置");
        }
        else{
          message.error('凭证有误，请重新登陆');
        }
      }
    }
    setTimeout(function() {
      window.location.href = '/#/login';
    }, 1000);
  } else if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;
    console.log('errorText', `请求错误 ${status}:${url};${errorText}`);
  } else if (!response) {
    notification.error({
      description: '您的网络发生异常，无法连接服务器',
      message: '网络异常',
    });
  }
};

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

/*添加请求拦截器*/
axios.interceptors.request.use(
  config => {
      debugger
    // //用户tokenInfo
    // const tokenObj = func.getUserToken();
    // //云麦尔用户tokenInfo
    // const yme_tokenObj = func.getYMEUserToken();

    // //用户登陆
    // if (config.url.indexOf('/login') >= 0 || config.url.indexOf('/logout') >= 0) {
    //   return config;
    // }
    // //用户token刷新
    // if (config.url.indexOf('/flush_token') >= 0) {
    //   if (tokenObj) {
    //     config.headers.common['token'] = tokenObj.access_token;
    //     return config;
    //   }
    // }
    // //云麦尔登陆与token刷新
    // if (config.url.indexOf('/oauth/token') >= 0) {
    //   config.headers.common['Authorization'] = 'Basic c3Npczpiam5zYy4uMTIz';
    //   config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    //   return config;
    // }

    // //用户请求是否刷新token
    // if (config.url.indexOf('/userapi/api') >= 0) {
    //   if (tokenObj) {
    //     config.headers.common['token'] = tokenObj.access_token;
    //     config = userRefreshToken(config, tokenObj);
    //     return config;
    //   }
    // }

    // //云麦尔请求是否刷新token
    // if (config.url.indexOf('/ymeapi') >= 0 || config.url.indexOf('/ppatest') >= 0) {
    //   if (yme_tokenObj) {
    //     config.headers.common['Authorization'] = `Bearer ${yme_tokenObj.access_token}`;
    //     config = ymrRefreshToken(config, yme_tokenObj);
    //     return config;
    //   }
    // }

    // // 通道清理和环水保请求是否刷新token
    // if (config.url.indexOf('/yfbapi/api') >= 0 || config.url.indexOf('/hsbapi/api') >= 0) {
    //   if (tokenObj) {
    //     config.headers.common['token'] = `PMS Bearer ${yme_tokenObj.access_token}`;
    //     //config.headers.common['ignore-origin'] = true;
    //     config = ymrRefreshToken(config, yme_tokenObj);
    //     return config;
    //   }
    // }

    config.cancelToken = source.token; //全局添加cancelToken
    return config;
  },
  function(error) {
    showError(error);
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
      debugger
    if (response.config.url.indexOf('logout') >= 0) {
      source.cancel();
    }
    return response;
  },
  error => {
      debugger
    if (axios.isCancel(error)) {
      return new Promise(() => {});
    } else {
      showError(error);
      return Promise.reject(error);
    }
  },
);

const request = (method, ...args) => {
  return axios[method](...args)
    .then(response => {
      const { status, statusText, data, config, headers } = response;
      if (status >= 200 && status < 300) {
        if (config.url.indexOf('/login') >= 0) {
          func.setUserToken(headers);
        }
        return data;
      }
      const error = new Error(statusText);
      showError(error);
      return response;
    })
    .catch(error => {
      showError(error);
    });
};

export default {
  get: (...args) => request('get', ...args),
  post: (...args) => request('post', ...args),
  put: (...args) => request('put', ...args),
  delete: (...args) => request('delete', ...args),
};

// import fetch from 'dva';
// import error from './error';

// // const checkStatus = response => {
// function checkStatus() {
//     debugger
//     if (response.status >= 200 && response.status < 300) {
//       return response;
//     }
//     const errortext = error[response.status] || response.statusText;
//     let isLogin = response.url.search('/unsecure/login') !== -1;
//     if (response.status === 401) {
//       if (isLogin) {
//         message.error(`请求错误 ${response.status}: ${errortext}`);
//       } else {
//         console.log('gogogo')
//         // router.push('/user/login');
//       }
//     } else {
//       if (!isLogin) {
//         message.error(`请求错误 ${response.status}: ${errortext}`);
//       }
//     }
//     return response;
// };

// export default function request(url, option) {
//   debugger
//   //获取token
//   let token = localStorage.getItem('token');
//   const options = {
//     ...option,
//     headers: {
//       'X-Authorization': token,
//       'x-language': 'chinese',
//     },
//   };
//   const newOptions = { ...options, credentials: 'include' };
//   if (
//     newOptions.method === 'POST' ||
//     newOptions.method === 'PUT' ||
//     newOptions.method === 'DELETE'
//   ) {
//       debugger
//         if (!(newOptions.body instanceof FormData)) {
//         newOptions.headers = {
//             Accept: 'application/json',
//             'Content-Type': 'application/json; charset=utf-8',
//             ...newOptions.headers,
//         };
//         if (newOptions.dataType !== 'string') {
//             newOptions.body = JSON.stringify(newOptions.body);
//         }
//         } else {
//       newOptions.headers = {
//         Accept: 'application/json',
//         ...newOptions.headers,
//       };
//     }
//   }
//   return (
//     fetch(url, newOptions)
//       .then(checkStatus)
//         .then(res => {
//             debugger
//         return res;
//         })
//       .then(response => {
//         debugger
//         if (newOptions.responseType === 'blob') {
//           return response.blob();
//         }
//         let type = typeof response;
//         switch (type) {
//           case 'object':
//             return response.json();
//           case 'string':
//             return response.text();
//           default:
//             break;
//         }
//         return response.json();
//       })
//       .then(res => {
//           debugger
//         return res;
//       })
//       .catch(e => { })
//   );
// }

//****************************************************************************************** */

// import config from './config';

// function parseJSON(response) {
//   return response.json();
// }

// function checkStatus(response) {
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }

//   const error = new Error(response.statusText);
//   error.response = response;
//   throw error;
// }

// const assyParams = (obj) => {
//   let str = ''
//   for (let key in obj) {
//     const value = typeof obj[key] !== 'string' ? JSON.stringify(obj[key]) : obj[key]
//     str += '&' + key + '=' + value
//   }
//   return str.substr(1)
// }

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
// export default function request(obj) {
//     debugger
//   let url = '';
//   let options = {
//     method: obj.method,
//     headers: {
//       'Content-Type': 'application/json; charset=utf-8',
//     },
//     credentials: 'include'     //是否携带cookie，默认为omit不携带; same-origi同源携带; include同源跨域都携带
//   };
//   if (obj.method === 'GET' || obj.method === 'get') {
//     url = (config.proxy ? obj.url : config.apiUrl + obj.url) + '?' + assyParams(obj.data);
//   }
//   if (obj.method === 'POST' || obj.method === 'post') {
//     url = config.proxy ? obj.url : config.apiUrl + obj.url;
//     options.body = JSON.stringify(obj.data);
//   }
// //   return fetch(url, options)
// //     .then(checkStatus)
// //     .then(parseJSON)
// //     .then(data => ({ data }))
// //     .catch(err => ({ err }))

//   return fetch(url, newOptions)
//       .then(checkStatus)
//       .then(response => {
//           debugger
//         if (newOptions.responseType === 'blob') {
//           return response.blob();
//         }
//         let type = typeof response;
//         switch (type) {
//           case 'object':
//             return response.json();
//           case 'string':
//             return response.text();
//           default:
//             break;
//         }
//         return response.json();
//       })
//       .then(res => {
//           debugger
//         return res;
//       })
//       .catch(e => {
//           alert(e);
//        });
// }

// import { error } from './error';

// const checkStatus = response => {
//   debugger
//   if (response.status >= 200 && response.status < 300) {
//     return response;
//   }
//   const errortext = error[response.status] || response.statusText;
//   let isLogin = response.url.search('/unsecure/login') !== -1;
//   if (response.status === 401) {
//     if (isLogin) {
//       message.error(`请求错误 ${response.status}: ${errortext}`);
//     } else {
//       console.log('gogogo')
//       // router.push('/user/login');
//     }
//   } else {
//     if (!isLogin) {
//       message.error(`请求错误 ${response.status}: ${errortext}`);
//     }
//   }
//   return response;
// };