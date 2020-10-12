/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-09-04 16:08:08
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-10-10 17:04:56
 */
import React from 'react';
import styles from './index.less';
import Calculator from '../Calculator/index';
import PuzzleCards from '../Test/dvaModal/pages/PuzzleCards/index';
import ApiPage from '../Test/apiTest/pages/apiModel/index';

export default () => {
  return (
    <div>
      <h1 className={styles.title}>Page HelloWorld/index</h1>
      {/* <Calculator />
      <PuzzleCards /> */}
      <ApiPage />
    </div>
  );
}
