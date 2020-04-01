import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Container} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import Footer from './Footer';
import CardHeader from '@material-ui/core/CardHeader';
import Hero from '../assets/images/hero.png';
import Latest from './Latest';



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

export default Home;
