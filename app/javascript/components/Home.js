import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HeroImage from '../assets/images/heroimage.jpg';
import Accessories from '../assets/images/caraccessories.jpg';
import Product1 from '../assets/images/product1.jpg';
import {Container} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useTheme from '@material-ui/core/styles/useTheme';
import CardActions from '@material-ui/core/CardActions';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import fc1 from '../assets/images/fc1.jpg';
import fc2 from '../assets/images/fc2.jpg';
import fc3 from '../assets/images/fc3.jpg';
import fc4 from '../assets/images/fc4.jpg';
import CardActionArea from '@material-ui/core/CardActionArea';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import fb from '../assets/images/Facebook.svg';
import ig from '../assets/images/Instagram.svg';
import tw from '../assets/images/Twitter.svg';
import {withStyles} from '@material-ui/core/styles';
import axios from 'axios';
import Footer from './Footer';
import CardHeader from '@material-ui/core/CardHeader';
import Hero from '../assets/images/hero.png';
import Logo from '../assets/images/logo.png';
import LogoSVG from '../assets/SVG/logo.svg';
import Latest from './Latest';

const styles = (theme) => ({
  root: {
    flexGrow: 1,

  },
  title: {
    flexGrow: 1,
  },
  pageHero: {
    backgroundImage: 'url(' + HeroImage + ')',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '32vh',
    textAlign: 'center',
  },
  pageHeroText: {
    color: '#FFFFFF',
    flexGrow: 1,
    textAlign: 'center',
  },
  linkFix: {
    textDecoration: 'none',
    color: '#FFFFFF',

  },
  cardLayout: {
    display: 'flex',
    flexDirection: 'column',
  },
  accessories: {
    backgroundImage: 'url(' + Accessories + ')',
    height: '32vh',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
  },
  playIcon: {
    height: 38,
    width: 38,
  },

});

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {classes} = this.props;
    return (
        <Container className={classes.root}>
          <Box mt={3}>
            <Card>
              <CardMedia
                  component={'img'}
                  image={Hero}
              />
            </Card>
          </Box>
          <Box m={3} style={{textAlign: 'center'}}>
            <Link to={'/shop'} className={classes.linkFix}>
              <Button variant={'contained'} color={'secondary'} size={'large'}>Go
                to the Store</Button>
            </Link>
          </Box>


          <Box mt={3}>
            <Typography variant="h3"
                        style={{textAlign: 'center', marginBottom: '15px'}}>
              Testimonials
            </Typography>
            <Grid container spacing={3} style={{textAlign: 'center'}}>
              <Grid item xs={12} sm={4}>
                <Card>
                  <CardContent>
                    <FormatQuoteIcon/>
                    <Typography variant="body2" gutterBottom
                                style={{textAlign: 'justify'}}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quos blanditiis tenetur unde suscipit, quam beatae rerum
                      inventore consectetur, neque doloribus, cupiditate numquam
                      dignissimos laborum fugiat deleniti? Eum quasi quidem
                      quibusdam.
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      - Client Name
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Card>
                  <CardContent>
                    <FormatQuoteIcon/>
                    <Typography variant="body2" gutterBottom
                                style={{textAlign: 'justify'}}>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quos blanditiis tenetur unde suscipit, quam beatae rerum
                      inventore consectetur, neque doloribus, cupiditate numquam
                      dignissimos laborum fugiat deleniti? Eum quasi quidem
                      quibusdam.
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      - Client Name
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} sm={4}>
                <Card>
                  <CardContent>
                    <FormatQuoteIcon/>
                    <Typography
                        variant="body2"
                        gutterBottom
                        style={{
                          textAlign: 'justify',
                        }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quos blanditiis tenetur unde suscipit, quam beatae rerum
                      inventore consectetur, neque doloribus, cupiditate numquam
                      dignissimos laborum fugiat deleniti? Eum quasi quidem
                      quibusdam.
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      - Client Name
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
          <Box mt={3}>
            <Card>
              <CardHeader title={'Latest Products'}
                          style={{textAlign: 'center'}}/>
              <CardContent>
                <Latest/>
              </CardContent>
            </Card>

          </Box>
          <Footer/>
        </Container>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
