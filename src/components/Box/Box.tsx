import React from 'react';
import { BoxStyled } from '../../../styles/Box/Box';
const Box = (props) => {
  return <BoxStyled>{props.children}</BoxStyled>;
};
export default Box;
