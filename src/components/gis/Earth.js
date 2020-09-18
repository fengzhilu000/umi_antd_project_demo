/*
 * @Description: 
 * @Author: xfGuo
 * @Date: 2020-09-04 14:21:22
 * @LastEditors: xfGuo
 * @LastEditTime: 2020-09-04 14:50:43
 */
import { connect } from 'umi';
import React,{ useState, useEffect } from 'react';
import NSCEarth,{ NSCEarthUI } from 'nsc-earth';

const Earth = (props) =>{

    const [nscEarth, setNscEarth] = useState(null);

    const initGlobalNscEarth = () =>{
        debugger
        if(!window.Cesium){
            setTimeout(initGlobalNscEarth, 500);
            return;
        }

        setNscEarth(new NSCEarth(window.Cesium));
    }

    useEffect(()=>{
        initGlobalNscEarth();
    },[]);

    return(
        nscEarth ?
        <NSCEarthUI 
            NSCEarth={nscEarth}
        ></NSCEarthUI>
        :
        <React.Fragment></React.Fragment>
    );
}

export default connect()(Earth);