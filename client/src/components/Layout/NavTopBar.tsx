import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  Toolbar,
  Grid,
  Theme,
  IconButton,
} from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
  signIn: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
}));

const NavTopBar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Grid container direction="row" justify="flex-end">
          <IconButton
            size="small"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            // onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle fontSize="large" />
          </IconButton>

          <Button color="inherit" variant="outlined" className={classes.signIn}>
            SIGN IN
          </Button>
          <Button color="inherit" variant="outlined">
            SIGN UP
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavTopBar;
