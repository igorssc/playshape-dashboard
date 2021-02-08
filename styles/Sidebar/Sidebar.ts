import { Link, ListItem } from '@material-ui/core';
import styled from 'styled-components';

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black !important;
  &:hover {
    text-decoration: none !important;
  }
`;
export const StyledListItem = styled(ListItem)`
  color: #a4a6b3 !important;
  border-left: 3px solid transparent !important;
  svg {
    color: #a4a6b3;
  }
  &:hover {
    svg {
      color: #f2c215;
    }
    color: #f2c215 !important;
    background: #535564 !important;
    border-left: 3px solid #dde2ff !important;
  }
`;
export const TitlePlayShape = styled.h1`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #a4a6b3;
  text-align: center;
  margin: 0;
  line-height: 64px;
`;
