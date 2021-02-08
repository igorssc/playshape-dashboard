import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar, createStyles, makeStyles, Theme } from '@material-ui/core';
import { TitlePlayShape } from '../../../styles/Header/Header';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      [theme.breakpoints.up('sm')]: {
        height: '60px !important',
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: '240px',
        background: 'transparent',
        boxShadow: 'none',
      },
      background: '#363740',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
  }),
);

const Header = (props) => {
  const [title, setTitle] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setTitle(document.title);
    }, 0);
  }, []);
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.callbackParent}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <TitlePlayShape>{title}</TitlePlayShape>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
