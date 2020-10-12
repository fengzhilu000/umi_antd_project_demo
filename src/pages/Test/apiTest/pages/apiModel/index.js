/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-10-10 16:58:54
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-10-12 15:21:42
 */
import React, { Component } from "react";
import { Button } from 'antd';
import { connect } from 'dva';

class ApiPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  getSomeData = async () => {
      debugger
    const { dispatch } = this.props;
    await dispatch({
      type: 'myPage/getSomeData'
    }).then((res) => {
        debugger
      if (res && res.data && res.code === 200) {
        this.setState({ // 这里选择将数据存在 state 中，也可以从 model 中获取
          data: res.data
        })
      }
    })
  }

  render() {
      debugger
    const { data } = this.state;
    return (
      <div>
        <h2>异步请求的返回：{"data--list:"}</h2>
        <Button onClick={() => this.getSomeData()} >请求接口</Button>
        {
            data?.map(item=>{
                const { id, name, age, type } = item;
            return (<p>
                {`${id} '--' ${name} '--' ${age} '--' ${type}`}
            </p>)
            })
        }
      </div>
    )
  }
}

const mapStateToProps = (model) => {
  console.log(model) // 查看 props 中的数据，可以拿到存在 model 中的数据。
  return {};
};

export default connect(mapStateToProps)(ApiPage)