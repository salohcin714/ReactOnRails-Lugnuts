import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {Container} from '@material-ui/core';
import Shop1 from '../assets/images/shop1.jpg';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link, Route, Switch} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import fc1 from '../assets/images/fc1.jpg';
import fc2 from '../assets/images/fc2.jpg';
import fc3 from '../assets/images/fc3.jpg';
import fc4 from '../assets/images/fc4.jpg';
import fc5 from '../assets/images/caraccessories.jpg';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';
import fb from '../assets/images/Facebook.svg';
import ig from '../assets/images/Instagram.svg';
import tw from '../assets/images/Twitter.svg';

import {withStyles} from '@material-ui/styles';
import Footer from './Footer';

const styles = () => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
  shopHero: {
    backgroundImage: 'url(' + Shop1 + ')',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '40vh',
    textAlign: 'center',
  },

  shopHeroText: {
    color: '#FFFFFF',
    flexGrow: 1,
    textAlign: 'center',
  },
  linkFix: {
    textDecoration: 'none',
    color: '#FFFFFF',
  },
  media: {
    height: 200,
  },

});

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      results: {},
      loading: false,
      message: '',
    }

  }

  componentDidMount() {
    axios.get('api/v1/products', {withCredentials: true})
    .then((response) => {
      console.log("server response", response)
    }).catch((error) => {
      console.log("server error", error)
    });
  }

  render() {
    const {classes} = this.props;
    return (
        <Container className={classes.root}>

          <Box m={1} mt={3}>
            <Card>
              <CardMedia
                  component={'img'}
                  image={Shop1}/>
            </Card>
          </Box>

          <Box mt={4}>
            <Grid container spacing={3} style={{justifyContent: 'center'}}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h4" style={{marginBottom: '15px'}}>
                  Find what you're looking for
                </Typography>


                <TextField
                    id="search"
                    fullWidth
                    placeholder="Search the shop..."
                    InputProps={{
                      startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon/>
                          </InputAdornment>
                      ),
                    }}
                />
              </Grid>
            </Grid>
          </Box>

          <Box mt={4}>
            <Grid container spacing={3}>
              <Grid item xs={12}>


              </Grid>
            </Grid>

            // Todo add product line links back in


            <Box mt={8}>
              <Grid container spacing={3} style={{textAlign: 'center'}}>
                <Grid item xs={12}>
                  <Typography variant="h4" style={{textAlign: 'center'}}>
                    Customer Favorites
                  </Typography>
                </Grid>

                <Grid item md={4} xs={12}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                          className={classes.media}
                          image={fc1}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Product 1
                        </Typography>
                        <Typography variant="body2" color="textSecondary"
                                    component="p">
                          Product description should go here
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        $$$$
                      </Button>
                      <Button size="small" color="primary">
                        Add To Cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item md={8} xs={12}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                          className={classes.media}
                          image={fc2}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Product 2
                        </Typography>
                        <Typography variant="body2" color="textSecondary"
                                    component="p">
                          Product description should go here
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        $$$$
                      </Button>
                      <Button size="small" color="primary">
                        Add To Cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item md={4} xs={12}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                          className={classes.media}
                          image={fc3}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Product 3
                        </Typography>
                        <Typography variant="body2" color="textSecondary"
                                    component="p">
                          Product description should go here
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        $$$$
                      </Button>
                      <Button size="small" color="primary">
                        Add To Cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item md={4} xs={12}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                          className={classes.media}
                          image={fc4}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Product 4
                        </Typography>
                        <Typography variant="body2" color="textSecondary"
                                    component="p">
                          Product description should go here
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        $$$$
                      </Button>
                      <Button size="small" color="primary">
                        Add To Cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>

                <Grid item md={4} xs={12}>
                  <Card className={classes.root}>
                    <CardActionArea>
                      <CardMedia
                          className={classes.media}
                          image={fc5}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Product 5
                        </Typography>
                        <Typography variant="body2" color="textSecondary"
                                    component="p">
                          Product description should go here
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        $$$$
                      </Button>
                      <Button size="small" color="primary">
                        Add To Cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>

              </Grid>
            </Box>
          </Box>

          <Footer/>
        </Container>
    );
  }
}

Shop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Shop);
