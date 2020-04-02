import React, {Component} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {FormatQuote} from '@material-ui/icons';

class LatestTestimonials extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latest: [],
    };
  }

  componentDidMount() {
    axios.get('api/v1/latest_testimonials', {withCredentials: true}).
        then((response) => {
          this.setState({
            latest: response.data.latest,
          });
        }).
        catch((error) => {
          console.log('server error', error);
        });
  }

  render() {
    return (
        <Grid container spacing={3} style={{textAlign: 'center'}}>
          {this.state.latest.map((testimonial, i) => {
            return (
                <Grid item xs={12} sm={4} key={i}>
                  <Card>
                    <CardContent>
                      <FormatQuote/>
                      <Typography
                          variant={'body2'}>{testimonial.content}</Typography>
                      <Typography
                          variant={'caption'}>- {testimonial.firstName} {testimonial.lastName}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
            );
          })}
        </Grid>
    );
  }
}

export default LatestTestimonials;