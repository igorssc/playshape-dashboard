import { Drawer, Link, ListItem } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled.div`
  display: 'flex';
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: black !important;
  &:hover {
    text-decoration: none !important;
  }
`;
export const StyledDrawer = styled(Drawer)`
  & > div {
    width: 240px;
    background: #363740;
  }
`;
export const StyledListItem = styled(ListItem)`
  color: #a4a6b3 !important;
  svg {
    color: #a4a6b3;
  }
  &:hover {
    svg {
      color: #f2c215;
    }
    color: #f2c215 !important;
    background: #393a41 !important;
    border-left: 3px solid #dde2ff;
  }
`;
