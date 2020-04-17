import React, {Component} from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Add} from '@material-ui/icons';
import {Link} from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';

class Testimonials extends Component {
  constructor(props) {
    super(props);

    this.state = {
      testimonials: [],
    };
  }

  componentDidMount() {
    axios.get('api/v1/testimonials', {withCredentials: true}).
        then((response) => {
          const testimonials = response.data.testimonials;
          this.setState({
            testimonials: testimonials,
          });
        }).
        catch((error) => {
          console.log('server error', error);
        });
  }

  render() {
    const linkFix = {
      textDecoration: 'none',
      color: '#FFFFFF',
    };

    return (
      <Box mt={3}>
        <Card>
          <CardHeader title={'Testimonials'}/>
          <Link to={'/newtestimonial'} style={linkFix}>
            <Tooltip title={'Add Your Testimonial'}>
              <Fab color={'secondary'} style={{
                float: 'right',
                marginRight: '16px',
                marginTop: '-48px',
              }}>
                <Add/>
              </Fab>
            </Tooltip>
          </Link>
          <CardContent>
            <Grid container spacing={3} direction={'row'}
                  justify={'space-around'} alignItems={'stretch'}>
              {this.state.testimonials.map((testimonial, i) => {
                return (
                  <Grid item xs={12} sm={4} key={i}>
                    <Card>
                      <CardHeader title={testimonial.title}/>
                      <CardContent>
                        <Typography
                          variant={'body1'}>{testimonial.content}</Typography>
                        <Typography
                          variant={'caption'}>- {testimonial.firstName} {testimonial.lastName}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default Testimonials;
