import React from 'react';
// import { useEffect, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, CssBaseline, IconButton, Toolbar } from '@material-ui/core';
import { TitlePlayShape } from '../../../styles/Header/Header';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
interface Props {
  title: string;
  callbackParent: VoidFunction;
}
const Header = (props: Props) => {
  // const [title, setTitle] = useState(null);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setTitle(document.title);
  //   }, 0);
  // }, []);
  const title = props.title;
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar position="absolute" className={classes.appBar}>
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
