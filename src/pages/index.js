/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-09-04 13:51:14
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-09-30 10:21:51
 */
import React,{ Component } from 'react';
import styles from './index.less';
// import Iconfont from '@/components/IconFont/index';
import Earth from '@/components/gis/Earth';
import cls from 'classnames';
import *  as portals  from 'react-reverse-portal';
import { history } from 'umi';
// import { render } from 'react-dom';
import { connect } from 'dva';

import PageIndex from '@/pages/HelloWorld/index';
import EarthLayout from './Earth/index';
import Earth2Layout from './Earth2/index';


@connect(({ global }) => {
  return {
    activePage: global.activePage,
  };
})

class Index extends Component {
  constructor(props){
    super(props);
    this.portalNode = portals.createHtmlPortalNode();
  }

  renderModules() {
    debugger

    let activePage = this.props.activePage;
  
    const maps = {
      index: EarthLayout,
      earth: Earth2Layout,
      pageIndex: PageIndex,
    };
  
    if(maps.hasOwnProperty(activePage)==false)
    {
      activePage = 'pageIndex';
    }
  
    return maps[activePage];
  }

  render(){
    const ModuleLayout = this.renderModules();

    return (
      // <div className={styles['main-view']}>
      //   <a className={styles['return']} onClick={() => { history.push('/HelloWorld'); }}>
      //     <Iconfont className={styles["left-icon"]} type="iconshuangjiantouyou"></Iconfont> 
      //     首 页
      //     <Iconfont className={styles["right-icon"]} type="iconshuangjiantouyou"></Iconfont>
      //   </a>
      //   <div>
      //     <Earth></Earth>
      //   </div>
      // </div>
      <div className={cls(styles['content'])}>
        {/*
            Render the content that you want to move around later.
            InPortals render as normal, but send the output to detached DOM.
            MyExpensiveComponent will be rendered immediately, but until
            portalNode is used in an OutPortal, MyExpensiveComponent, it
            will not appear anywhere on the page.
        */}
        <portals.InPortal node={this.portalNode}>
          <Earth onRef={(ref) => { this.NscEarthRef = ref }} />
        </portals.InPortal>
        {ModuleLayout !== undefined ? <ModuleLayout portalNode={this.portalNode}></ModuleLayout> : <pageIndex></pageIndex>}
      </div>
    );
  }
}

export default Index;