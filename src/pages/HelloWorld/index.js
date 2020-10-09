/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-09-04 16:08:08
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-10-09 09:41:06
 */
import React from 'react';
import styles from './index.less';
import Calculator from '../Calculator/index'

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page HelloWorld/index</h1>
      <Calculator />
    </div>
  );
}
