import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {Container} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {Component} from 'react';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkFix: {
    textDecoration: 'none',
    color: '#FFFFFF',

  },


});

class Navbar extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    const {classes} = this.props;
    return (
      <Container>
        <Box mb={1}>
          <AppBar position="static">
            <Toolbar>
              <Link to={'/'} className={classes.linkFix} style={{flexGrow: 1}}>
                <Typography variant="h6" className={classes.title}>
                  Lugnuts
                </Typography>
              </Link>
              <Link to="/about" className={classes.linkFix}>
                <Button color={'inherit'} variant={'text'}>About</Button>
              </Link>
              <Link to="/shop" className={classes.linkFix}>
                <Button color={'inherit'} variant={'text'}>Shop</Button>
              </Link>
              <Link to="/contact" className={classes.linkFix}>
                <Button color={'inherit'} variant={'text'}>Contact</Button>
              </Link>
              <Link to="/register" className={classes.linkFix}>
                <Button color={'inherit'} variant={'text'}>Login</Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Navbar);
