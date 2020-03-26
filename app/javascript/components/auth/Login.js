import React, {Component} from 'react';
import axios from 'axios'
import history from "../utils/history";

export default class Login extends Component {
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
    axios.post("api/v1/sessions", {
        user: {
          email: this.state.email,
          password: this.state.password
        }
      }, {withCredentials: true}
    ).then(response => {
      console.log("response from login", response);
      if (response.data.logged_in) {
        this.props.handleSuccessfulAuth(response.data)
      }
    }).catch(error => {
        console.log("login error", error)
      }
    );


    event.preventDefault();
  }

  handleNewUser(event) {
    history.push("/register")
  }

  handleChange(event) {
    this.setState({
        [event.target.name]: event.target.value
      }
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type={'email'}
            name={'email'}
            placeholder={'Email'}
            value={this.state.email}
            onChange={this.handleChange}
            required/>
          <input
            type={'password'}
            name={'password'}
            placeholder={'Password'}
            value={this.state.password}
            onChange={this.handleChange}
            required/>
          <button type={'submit'}>Login</button>
        </form>
        <button onClick={this.handleNewUser}>First Time Here?</button>
      </div>

    );
  }
}
