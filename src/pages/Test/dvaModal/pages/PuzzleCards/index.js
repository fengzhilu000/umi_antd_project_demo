/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-10-10 08:59:52
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-10-10 10:33:41
 */

import React, { Component } from 'react';
import { Card /* ,Button */ } from 'antd';
import { connect } from 'dva';
import styles from './index.less';

const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
  debugger
  const cardList = state[namespace]?.data;
  return {
    cardList,
  };
};

const mapDispatchToProps = (dispatch) => {
  debugger
  return {
    onDidMount: () => {
      dispatch({
        type: `${namespace}/queryInitCards`,
      });
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class PuzzleCards extends Component {
  componentDidMount() {
    debugger
    this.props?.onDidMount();
  }
  render() {
    debugger
    return (
      <div>
        <h2 className={styles['title']}>Page PuzzleCards</h2>
        {
          this.props.cardList?.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
      </div>
    );
  }
}

export default PuzzleCards;