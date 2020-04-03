import React, {Component} from 'react';
import history from '../utils/history';
import axios from 'axios';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import Container from '@material-ui/core/Container';

export default class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
      registrationErrors: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    axios.post('api/v1/registrations', {
        user: {
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation,
        },
      }, {withCredentials: true},
    ).then((response) => {
      if (response.data.status === 'created') {
        this.props.handleSuccessfulAuth(response.data, 'register');
      }
    }).catch((error) => {
        console.log('registration error', error);
      },
    );

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value,
      },
    );
  }

  handleExistingUser() {
    history.push('/login');
  }

  render() {
    return (
      <Container maxWidth={'xs'}>
        <Box m={3}>
          <Card>
            <CardHeader title={'Register'}/>
            <CardContent>
              <form onSubmit={this.handleSubmit}>
                <Box m={1}>
                  <TextField
                    type={'email'}
                    name={'email'}
                    label={'Email'}
                    helperText={'Don\'t worry, we don\'t share your' +
                    ' information'}
                    value={this.state.email}
                    onChange={this.handleChange}
                    fullWidth
                    required/>
                </Box>
                <Box m={1}>
                  <TextField
                    type={'password'}
                    name={'password'}
                    label={'Password'}
                    value={this.state.password}
                    onChange={this.handleChange}
                    fullWidth
                    required/>
                </Box>
                <Box m={1}>
                  <TextField
                    type={'password'}
                    name={'password_confirmation'}
                    label={'Confirm Password'}
                    value={this.state.password_confirmation}
                    onChange={this.handleChange}
                    fullWidth
                    required/>
                </Box>
                <Box m={1} style={{textAlign: 'center'}}>
                  <Button variant={'contained'} type={'submit'}
                          color={'primary'}>Register</Button>
                </Box>
              </form>
            </CardContent>
            <CardActions>
              <Button onClick={this.handleExistingUser}>Already Have an
                Account?</Button>
            </CardActions>
          </Card>
        </Box>
      </Container>
    );
  }
}
