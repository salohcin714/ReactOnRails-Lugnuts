import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import history from '../utils/history';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Box from '@material-ui/core/Box';
import CardHeader from '@material-ui/core/CardHeader';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loginErrors: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);
  }

  handleSubmit(event) {
    axios.post('api/v1/sessions', {
        user: {
          email: this.state.email,
          password: this.state.password,
        },
      }, {withCredentials: true},
    ).then((response) => {
      if (response.data.logged_in) {
        this.props.handleSuccessfulAuth(response.data, 'login');
      }
    }).catch((error) => {
        console.log('login error', error);
      },
    );
    event.preventDefault();
  }

  handleNewUser(event) {
    history.push('/register');
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value,
      },
    );
  }

  render() {
    return (
      <Container maxWidth={'xs'}>
        <Box mt={3}>
          <Card>
            <CardHeader title={'Login'}/>
            <CardContent>
              <form onSubmit={this.handleSubmit}>
                <Box m={1}>
                  <TextField
                    type={'email'}
                    name={'email'}
                    label={'Email'}
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
                <Box m={1} style={{textAlign: 'center'}}>
                  <Button variant={'contained'} type={'submit'}
                          color={'primary'}>Login</Button>
                </Box>
              </form>
            </CardContent>
            <CardActions>
              <Button onClick={this.handleNewUser}>First Time Here?</Button>
            </CardActions>
          </Card>
        </Box>
      </Container>

    );
  }
}

Login.proptypes = {
  handleSuccessfulAuth: PropTypes.func.isRequired,
};

export default Login;
