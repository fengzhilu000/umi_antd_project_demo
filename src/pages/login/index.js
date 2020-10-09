/*
 * @Description:
 * @Author: xfGuo
 * @Date: 2020-09-03 09:06:16
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-09-30 14:41:41
 */
import React, { Component } from 'react';
import styles from './index.less';
import Iconfont from '@/components/IconFont/index';
// import emitter from '@/utils/ev';

// export default () => {
class Index extends Component {
  enterBackSystem = e => {
    // debugger;
    // e.stopPropagation();//去除冒泡事件
    // emitter.emit('enterGreenMineSystem', null);
    this.props.enterSystem && this.props.enterSystem();
  };

  render() {
    return (
      // <div>
      //   <h1 className={styles.title}>Page HomePage/index</h1>
      // </div>
      <div className={styles['main-view']}>
        <a className={styles['return']} onClick={this.enterBackSystem}>
          <Iconfont
            className={styles['left-icon']}
            type="iconshuangjiantouyou"
          ></Iconfont>
          绿色矿山系统
          {/* <span ><Iconfont type="icon-tiaozhuan" className={styles['iconfont']} /></span> */}
          <Iconfont
            className={styles['right-icon']}
            type="iconshuangjiantouyou"
          ></Iconfont>
        </a>
      </div>
    );
  }
}

export default Index;
