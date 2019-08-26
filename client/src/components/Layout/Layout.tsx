import React, { FC } from 'react';
import NavTopBar from './NavTopBar';
import NavDrawer from './NavDrawer';
import { makeStyles, createStyles, useTheme } from '@material-ui/core/styles';
import { Theme, CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

const Layout: FC = ({ children }) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavTopBar />
      <NavDrawer />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default Layout;
