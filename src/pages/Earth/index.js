/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-09-04 17:56:07
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-09-04 18:22:06
 */
import React, { Component } from 'react';
import styles from './index.less';
// import React,{Component} from 'react';
import *  as portals from 'react-reverse-portal';
// import LeftBlock from './mainBlocks/leftBlock';
// import RightBlock from './mainBlocks/rightBlock';
// import BottomBlock from './mainBlocks/bottomBlock';

// export default (props) => {
class Index extends Component {
  
  render(){
    return (
      // <div>
      //   <h1 className={styles.title}>Page SecurityMonitor/index</h1>
      // </div>
      <div className={styles['content-container']}>
          <div className={styles['left-block-container']}>
              {/* <LeftBlock></LeftBlock> */}
          </div>
          <div  className={styles['middle-block-container']}>
              <div className={styles['globe-region-container']}>
                  <portals.OutPortal node={this.props.portalNode} />
              </div>
              <div className={styles['bottom-region-container']}>
                  {/* <BottomBlock></BottomBlock> */}
              </div>
          </div>
          <div className={styles['right-block-container']}>
              {/* <RightBlock></RightBlock> */}
          </div>
      </div>
    );
  }
}

export default Index;
