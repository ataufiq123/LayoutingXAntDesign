import React from 'react';
import {View} from 'react-native';
import { SearchBar, Button, WhiteSpace, WingBlank,Grid } from 'antd-mobile';

const data = Array.from(new Array(9)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
  }));

  const data1 = Array.from(new Array(9)).map(() => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
  }));

  const GridExample = () => {
    return (
        <WingBlank>
        <Grid data={data1} columnNum={2} hasLine={false}/>
        </WingBlank>
        
    );
};

export default GridExample;