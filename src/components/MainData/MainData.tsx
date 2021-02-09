import React from 'react';
import { MainDataStyled } from '../../../styles/MainData/MainData';

const MainData = (props) => {
  return <MainDataStyled>{props.children}</MainDataStyled>;
};
export default MainData;
