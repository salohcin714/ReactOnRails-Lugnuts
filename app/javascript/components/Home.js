import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Footer from './Footer';
import CardHeader from '@material-ui/core/CardHeader';
import Hero from '../assets/images/hero.png';
import LatestProducts from './LatestProducts';
import LatestTestimonials from './LatestTestimonials';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const root = {
      flexGrow: 1,
    };

    const linkFix = {
      textDecoration: 'none',
      color: '#FFFFFF',
    };

    return (
      <Container style={root}>
        <Box mt={3}>
          <Card>
            <CardMedia
              component={'img'}
              image={Hero}
            />
          </Card>
        </Box>
        <Box m={3} style={{textAlign: 'center'}}>
          <Link to={'/shop'} style={linkFix}>
            <Button variant={'contained'} color={'secondary'} size={'large'}>Go
              to the Store</Button>
          </Link>
        </Box>


        <Box mt={3}>
          <Card>
            <CardHeader title={'Testimonials'}
                        style={{textAlign: 'center'}}/>
            <CardContent>
              <LatestTestimonials/>
            </CardContent>

            <Box m={2} style={{textAlign: 'center'}}>
              <Link to={'/testimonials'} style={linkFix}>
                <Button variant={'contained'} color={'secondary'}
                        style={{textAlign: 'center'}}>View
                  Testimonials</Button>
              </Link>
            </Box>

          </Card>
        </Box>
        <Box mt={3}>
          <Card>
            <CardHeader title={'Latest Products'}
                        style={{textAlign: 'center'}}/>
            <CardContent>
              <LatestProducts/>
            </CardContent>
            <Box m={2} style={{textAlign: 'center'}}>
              <Link to={'/shop'} style={linkFix}>
                <Button variant={'contained'} color={'secondary'}>
                  View All Products
                </Button>
              </Link>
            </Box>
          </Card>

        </Box>
        <Footer/>
      </Container>
    );
  }
}

export default Home;
