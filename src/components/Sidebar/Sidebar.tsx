import React from 'react';

import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PieChartIcon from '@material-ui/icons/PieChart';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import PeopleIcon from '@material-ui/icons/People';
import StoreIcon from '@material-ui/icons/Store';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import SettingsIcon from '@material-ui/icons/Settings';
import Header from '../Header/Header';
import {
  NavLink,
  Root,
  StyledDrawer,
  StyledListItem,
} from '../../../styles/Sidebar/Sidebar';
import { List } from '@material-ui/core';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Sidebar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Divider />
      <List>
        {[
          ['Início', <PieChartIcon />],
          ['Cupons', <ConfirmationNumberIcon />],
          ['Suporte', <EmojiObjectsIcon />],
          ['Usuários', <PeopleIcon />],
          ['Lojas', <StoreIcon />],
          ['Notificações', <NotificationsActiveIcon />],
        ].map((text, index: number) => (
          <StyledListItem button key={index}>
            <ListItemIcon>{text[1]}</ListItemIcon>
            <ListItemText primary={text[0]} />
          </StyledListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[['Configurações', <SettingsIcon />, 'settings']].map(
          (text, index) => (
            <NavLink key={index} href={`/${text[2]}`}>
              <StyledListItem button>
                <ListItemIcon>{text[1]}</ListItemIcon>
                <ListItemText primary={text[0]} />
              </StyledListItem>
            </NavLink>
          ),
        )}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <Header callbackParent={handleDrawerToggle}></Header>
      <nav aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <StyledDrawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </StyledDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <StyledDrawer variant="permanent" open>
            {drawer}
          </StyledDrawer>
        </Hidden>
      </nav>
    </Root>
  );
}
