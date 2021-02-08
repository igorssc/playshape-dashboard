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
  Nav,
  NavLink,
  StyledDrawer,
  StyledListItem,
} from '../../../styles/Sidebar/Sidebar';
import {
  createStyles,
  List,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
    content: {
      padding: '20px',
      flexGrow: 1,
    },
  }),
);

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Sidebar(props: Props) {
  const classes = useStyles();
  const theme = useTheme();
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
    <>
      <Header
        callbackParent={handleDrawerToggle}
        className={classes.appBar}
      ></Header>
      <Nav aria-label="mailbox folders">
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
      </Nav>
    </>
  );
}
