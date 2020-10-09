/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-10-09 09:22:17
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-10-09 10:30:22
 */

import React from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { Button } from 'antd';
import {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
    StarTwoTone,
  } from '@ant-design/icons';  
 
 
const Index = (props) => {
  const { count, add, minus, init } = props;
  return (
      <React.Fragment>
        <div className={styles.mainView}>
            <h1 className={styles.title}>Page Calculator</h1>
            <p>{count}</p>
            <Button onClick={() => { add(100) }}>+</Button> & nbsp;& nbsp;
            <Button onClick={() => { minus(100) }}>-</Button> & nbsp;& nbsp;
            {/* ○ */}
            <Button onClick={() => { init(100) }}><SyncOutlined spin  twoToneColor="#eb2f96"/></Button>
        </div >
        <StarTwoTone twoToneColor="#eb2f96" />
    </React.Fragment>
  )
}
 
const mapStatetoprops = state =>
{
    debugger
    return(
    {
        count: state.count
    }
)};
 
const actionCreater = {
  add: (payload) => ({ type: "count/add", payload }),
  minus: (payload) => ({ type: "count/minus", payload }),
  init: (payload) => {
    return {
      type: "count/init", payload
    }
  }
}
 
export default connect(mapStatetoprops, actionCreater)(Index);