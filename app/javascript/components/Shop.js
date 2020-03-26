import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import {Container} from '@material-ui/core';
import Shop1 from '../assets/images/shop1.jpg';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
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

import {withStyles} from "@material-ui/styles";

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
    paddingTop: theme.spacing(2),
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

  }

  render() {
    const {classes} = this.props;
    return (
      <Container className={classes.root}>

        <Box m={1} mt={3}>
          <Paper className={classes.shopHero}
                 style={{justifyContent: 'center'}}>
            <Typography variant="h3" className={classes.shopHeroText} mt={4}>
              Shop
            </Typography>
            <Box m={4}>
              <Link to={'/shop'} className={classes.linkFix}>
                <Button variant="contained" color="secondary" size={'large'}
                        className={classes.linkFix}>
                  View What's new
                </Button>
              </Link>
            </Box>
          </Paper>
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

              <Grid item xs={4}>
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

              <Grid item xs={8}>
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

              <Grid item xs={4}>
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

              <Grid item xs={4}>
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

              <Grid item xs={4}>
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


          <Box mt={6}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h5">Quick Links</Typography>
                <ButtonGroup variant="text" color="primary"
                             aria-label="text primary button group">
                  <Button>Search</Button>
                  <Button>Contact Us</Button>
                  <Button>Refund Policy</Button>
                </ButtonGroup>
              </Grid>

              <Grid item xs={12} sm={6} style={{textAlign: 'right'}}>
                <Typography variant="h5">Join the mailing list</Typography>
                <TextField id="outlined-basic" label="E-Mail Address"
                           variant="outlined"/>
                <Button variant="contained" color="primary"
                        style={{
                          padding: '15px',
                          marginLeft: '5px'
                        }}>Subscribe</Button>
              </Grid>
            </Grid>

            <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>

            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Typography variant="caption" gutterBottom>All Major Credit
                  Cards Accepted</Typography>
              </Grid>

              <Grid item xs={12} sm={6} style={{textAlign: 'right'}}>
                <img src={fb} height={24} width={32}/>
                <img src={ig} height={24}/>
                <img src={tw} height={24}/>
              </Grid>
            </Grid>
          </Box>

        </Box>
      </Container>
    );
  }
}

Shop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Shop);
