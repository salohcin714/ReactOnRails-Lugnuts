import React, {Component} from 'react';
import history from './utils/history';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

export default class NewTestimonial extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      content: '',
      firstName: '',
      lastName: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    axios.post('api/v1/testimonials', {
      testimonial: {
        title: this.state.title,
        content: this.state.content,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
      },
    }).then((response) => {
      if (response.data.status === 'created') {
        history.push('/');
      }
    }).catch((error) => {
      console.log(error);
    });

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <Container maxWidth={'sm'}>
        <Box mt={3}>
          <Card>
            <CardHeader title={'Let Us Know About Your Experience!'}
                        subheader={'*Your submission will be verified before appearing'}
                        style={{textAlign: 'center'}}/>
            <form onSubmit={this.handleSubmit}>
              <CardContent>
                <Grid container spacing={1} direction={'column'}
                      justify={'space-evenly'} alignItems={'stretch'}>

                  <Grid item xs={12}>
                    <TextField
                      type={'text'}
                      name={'title'}
                      label={'Title'}
                      value={this.state.title}
                      onChange={this.handleChange}
                      fullWidth
                      required/>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      type={'text'}
                      name={'content'}
                      label={'Message'}
                      value={this.state.content}
                      onChange={this.handleChange}
                      fullWidth
                      multiline
                      required/>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type={'text'}
                      name={'firstName'}
                      label={'First Name'}
                      value={this.state.firstName}
                      onChange={this.handleChange}
                      fullWidth
                      required
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type={'text'}
                      name={'lastName'}
                      label={'Last Name'}
                      value={this.state.lastName}
                      onChange={this.handleChange}
                      fullWidth
                      required
                    />
                  </Grid>
                </Grid>
                <Box mt={2} style={{textAlign: 'center'}}>
                  <Button variant={'contained'} type={'submit'}
                          color={'secondary'}>Submit</Button>
                </Box>
              </CardContent>

            </form>

          </Card>
        </Box>
      </Container>
    );
  }
}
