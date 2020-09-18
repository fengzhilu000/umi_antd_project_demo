/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-09-05 10:14:08
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-09-05 10:14:29
 */
import React, { Component } from 'react';
// import LeftBlock from './blocks/leftblock';
import styles from './index.less';
// import ModuleContainer from '@/components/ModuleContainer';
import *  as portals from 'react-reverse-portal';
// import YearStripPickSchedule from './mainBlocks/leftBlocks/yearStripPickSchedule';
// import GeneralProgress from './mainBlocks/leftBlocks/generalProgress';

// import MonthStripPickSchedule from './mainBlocks/bottomBlock/monthStripPickSchedule';
// import DiggerProgress from './mainBlocks/bottomBlock/diggerProgress';

export default class ProductionProgressLayout extends Component {


    render() {
        return (
            <div className={styles['content-container']}>
                <div className={styles['upper-row-container']}>
                    <div className={styles['left-column-container']}>
                        <div className={styles['year-strip-pick-schedule-container']}>
                            {/* <YearStripPickSchedule /> */}
                        </div>
                        <div className={styles['general-progress-container']}>
                            {/* <GeneralProgress /> */}
                        </div>
                    </div>
                    <div className={styles['globe-region']}>
                        <portals.OutPortal node={this.props.portalNode} />
                    </div>
                </div>

                <div className={styles['lower-row-container']}>
                    <div className={styles['month-strip-pick-schedule-container']}>
                        {/* <MonthStripPickSchedule /> */}
                    </div>
                    <div className={styles['digger-progress-container']}>
                        {/* <DiggerProgress /> */}
                    </div>
                </div>
            </div>
        );
    }
}
// import React from 'react';
// import styles from './index.less';

// export default () => {
//   return (
//     <div>
//       <h1 className={styles.title}>Page Earth2/index</h1>
//     </div>
//   );
// }
