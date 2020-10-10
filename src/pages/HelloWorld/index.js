/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-09-04 16:08:08
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-10-10 10:22:25
 */
import React from 'react';
import styles from './index.less';
import Calculator from '../Calculator/index';
import PuzzleCards from '../Test/dvaModal/pages/PuzzleCards/index';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page HelloWorld/index</h1>
      <Calculator />
      <PuzzleCards />
    </div>
  );
}
