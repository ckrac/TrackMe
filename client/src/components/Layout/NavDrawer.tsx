import React, { FC } from 'react';
import {
  Link,
  LinkProps,
  RouteComponentProps,
  withRouter,
} from 'react-router-dom';
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
import { WithWidthProps } from '@material-ui/core/withWidth';
import { INavLinkIcon } from '../../interfaces';
import { ESVGIcon } from '../../enums';
import SVGIcon from '../SVGIcon/SVGIcon';

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

const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <Link innerRef={ref as any} {...props} />,
);

const NavDrawer: FC<RouteComponentProps<{}> & WithWidthProps> = ({
  location,
  width,
}) => {
  const classes = useStyles();
  const isSmWidth = width === 'sm';
  const pathName = location.pathname;

  const navLinks: INavLinkIcon[] = [
    { name: 'Timer', icon: ESVGIcon.Timer, route: '/app/timer' },
    { name: 'Activities', icon: ESVGIcon.Menubook, route: '/app/activities' },
    { name: 'Reports', icon: ESVGIcon.Assessment, route: '/app/reports' },
  ];

  const listLinks = navLinks.map(navLink => (
    <ListItem
      key={navLink.name}
      button
      component={AdapterLink}
      to={navLink.route!}
      selected={navLink.route === pathName}
    >
      <ListItemIcon>
        <SVGIcon icon={navLink.icon} />
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

export default withRouter(withWidth()(NavDrawer));
