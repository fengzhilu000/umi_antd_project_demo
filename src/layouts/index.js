/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-09-04 15:06:28
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-09-04 17:52:12
 */

import styles from './index.less';
import { Layout } from 'antd';
import Nva from '@/layouts/Header/index';
import { connect } from 'dva';

const { Header, Content, Footer } = Layout;

function BasicLayout(props) {

  return (
    <Layout>
      <Header>
        {/* <div style={{ color: 'white' }}>xfGuo资料库</div> */}
        <div className={styles.logo}>xfGuo资料库 </div>
        <Nva activePage={props.activePage} />
      </Header>
      <Content style={{ padding: '0 50px' }}>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            {props.children}
          </div>
      </Content>
      {/* <Content style={{ padding: '0 50px' }}>
        {props.children}
      </Content> */}
      <Footer style={{ textAlign: 'center' }}>Umi Design Created by xfguo</Footer>
    </Layout>
  );
}

export default connect(({ global }) => ({
  activePage: global.activePage
}))(BasicLayout);

// import React from 'react';

// function BasicLayout(props) {
//   return (
//     <div>
//       <h1>Yay! Welcome to umi!</h1>
//       {props.children}
//     </div>
//   );
// }

// export default BasicLayout;


// import React from 'react';
// import styles from './index.less';

// export default () => {
//   return (
//     <div>
//       <h1 className={styles.title}>Page layouts/index.js</h1>
//     </div>
//   );
// }
