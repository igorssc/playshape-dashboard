import React from 'react';
import Header from '../Header/Header';
import {
  NavLink,
  StyledListItem,
  TitlePlayShape,
} from '../../../styles/Sidebar/Sidebar';
import {
  ConfirmationNumber,
  PieChart,
  EmojiObjects,
  People,
  Store,
  NotificationsActive,
  Settings,
} from '@material-ui/icons';
import {
  createStyles,
  CssBaseline,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      background: '#363740',
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
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
          ['Início', <PieChart />],
          ['Cupons', <ConfirmationNumber />],
          ['Suporte', <EmojiObjects />],
          ['Usuários', <People />],
          ['Lojas', <Store />],
          ['Notificações', <NotificationsActive />],
        ].map((text, index: number) => (
          <StyledListItem button key={index}>
            <ListItemIcon>{text[1]}</ListItemIcon>
            <ListItemText primary={text[0]} />
          </StyledListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[['Configurações', <Settings />, 'settings']].map((text, index) => (
          <NavLink key={index} href={`/${text[2]}`}>
            <StyledListItem button>
              <ListItemIcon>{text[1]}</ListItemIcon>
              <ListItemText primary={text[0]} />
            </StyledListItem>
          </NavLink>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <Header callbackParent={handleDrawerToggle}></Header>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <TitlePlayShape>PlayShape</TitlePlayShape>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </>
  );
}
