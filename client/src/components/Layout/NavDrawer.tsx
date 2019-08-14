import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withWidth,
  Theme,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import MailIcon from '@material-ui/icons/Mail';
import { WithWidthProps } from '@material-ui/core/withWidth';
import { NavLinkInterface } from '../../interfaces';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}));

const NavDrawer: FunctionComponent<WithWidthProps> = ({ width }) => {
  const classes = useStyles();
  const isSmWidth = width === 'sm';

  const navLinks: NavLinkInterface[] = [
    { name: 'Timer', icon: '' },
    { name: 'Activities', icon: '' },
    { name: 'Reports', icon: '' },
  ];

  const listLinks = navLinks.map((navLink, index) => (
    <ListItem button key={navLink.name}>
      <ListItemIcon>
        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
      </ListItemIcon>
      <ListItemText primary={navLink.name} />
    </ListItem>
  ));

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: !isSmWidth,
        [classes.drawerClose]: isSmWidth,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: !isSmWidth,
          [classes.drawerClose]: isSmWidth,
        }),
      }}
      open={!isSmWidth}
    >
      <div className={classes.toolbar} />
      <List>{listLinks}</List>
    </Drawer>
  );
};

export default withWidth()(NavDrawer);
