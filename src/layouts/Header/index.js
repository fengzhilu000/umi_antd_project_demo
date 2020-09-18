/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-09-04 15:36:46
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-09-04 17:57:04
 */
import React,{ Component } from 'react';
import styles from './index.less';
import { Layout, Menu } from 'antd';

// import Menu, { SubMenu, MenuItem } from 'rc-menu';
import { Link } from 'umi';
// import 'rc-menu/assets/index.css';
import IconFont from '@/components/IconFont/index';

// const { SubMenu, MenuItem } = Menu;


class Nva extends Component{
  constructor(props) {
    super(props);
    this.state = {};
  }

  // handleClick = e => {
  //   console.log('click ', e);
  //   this.setState({
  //     current: e.key,
  //   });
  // };
  
  render(){
    const { activePage } = this.props;
    debugger
    let location = null;

    if (activePage !=='/') {
      if(activePage?.indexOf('/') === 0){
        location = activePage;
      }
      else{
        //page
        location = '/' + activePage;
      }
    }
    else{
      location='/helloworld';
    }

    return(
      <div className={styles['nav-box']} id="navBox">
        <Menu
        //defaultSelectedKeys={[]}
        // defaultActiveFirst={true}
          // onClick={this.handleClick}
          selectedKeys={[location || '/helloworld']}
          // getPopupContainer={() => document.getElementById('navBox')}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['/helloworld']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="/helloworld">
            <Link to="/helloworld">
              <IconFont type="iconhome"></IconFont>
              <span>首页</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/index">
            <Link to="/?page=index"><IconFont type="iconshengchan"></IconFont>地图</Link>
          </Menu.Item>
          <Menu.Item key="/earth">
            <Link to="/?page=earth"><IconFont type="iconshengchan"></IconFont>Earth</Link>
          </Menu.Item>
          {/* <MenuItem key="/TruckDispatch">
            <Link to="/?page=TruckDispatch"><IconFont type="icontruck-fill"></IconFont>车辆调度</Link>
          </MenuItem>
          <MenuItem  key="/SecurityMonitor" title="安环监测">
              <Link to="/?page=SecurityMonitor"><IconFont  type="iconanquan"></IconFont>安环监测</Link>
          </MenuItem>
          <MenuItem  key="/users" title="视频监控">
              <Link to="/?page=users"><IconFont  type="iconanquan"></IconFont>视频监控</Link>
          </MenuItem> */}
        </Menu>
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">英雄</Menu.Item>
          <Menu.Item key="2">局内道具</Menu.Item>
          <Menu.Item key="3">召唤师技能</Menu.Item>
        </Menu> */}
      </div>
    );
  }
}

export default Nva;

// export default () => {
//   return (
//     <div>
//       <h1 className={styles.title}>Page ../layouts/Header/index</h1>
//     </div>
//   );
// }
