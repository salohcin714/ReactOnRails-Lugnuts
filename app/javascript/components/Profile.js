import React, {Component} from 'react';
import history from './utils/history';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: this.props.customer.firstName,
      lastName: this.props.customer.lastName,
      phone: this.props.customer.phone,
      address: this.props.customer.address,
      city: this.props.customer.city,
      state: this.props.customer.state,
      postalCode: this.props.customer.postalCode,

    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    const customer = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      postalCode: this.state.postalCode,

    };
    this.props.handleUpdateCustomerInfo(customer);
    history.push('/');
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({
          [event.target.name]: event.target.value,
        },
    );
  }

  render() {
    return (
        <Container maxWidth={'sm'}>
          <Box mt={3}>
            <Card>
              <CardHeader title={'Update Customer Information'}
                          subheader={'International Customers: Please contact us to update your information'}
                          style={{textAlign: 'center'}}/>
              <form onSubmit={this.handleSubmit}>
                <CardContent>
                  <Grid container spacing={1} direction={'column'}
                        justify={'space-evenly'} alignItems={'stretch'}>
                    <Grid item xs={12}>
                      <TextField
                          type={'text'}
                          name={'firstName'}
                          label={'First Name'}
                          value={this.state.firstName}
                          onChange={this.handleChange}
                          fullWidth
                          required/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                          type={'text'}
                          name={'lastName'}
                          label={'Last Name'}
                          value={this.state.lastName}
                          onChange={this.handleChange}
                          fullWidth
                          required/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                          type={'tel'}
                          name={'phone'}
                          label={'Phone #'}
                          value={this.state.phone}
                          onChange={this.handleChange}
                          pattern={'^[\\(]{0,1}([0-9]){3}[\\)]{0,1}[ ]?([^0-1]){1}([0-9]){2}[ ]?[-]?[ ]?([0-9]){4}[ ]*((x){0,1}([0-9]){1,5}){0,1}$'}
                          helperText={'(XXX)XXX-XXXX'}
                          fullWidth
                          required/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                          type={'text'}
                          name={'address'}
                          label={'Address'}
                          value={this.state.address}
                          onChange={this.handleChange}
                          fullWidth
                          multiline
                          required/>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                          type={'text'}
                          name={'city'}
                          label={'City'}
                          value={this.state.city}
                          onChange={this.handleChange}
                          fullWidth
                          required/>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl>
                        <InputLabel htmlFor={'state-select'}>State</InputLabel>
                        <Select
                            native
                            value={this.state.state}
                            onChange={this.handleChange}
                            inputProps={{
                              name: 'state',
                              id: 'state-select',
                            }}>
                          <option value="AL">Alabama</option>
                          <option value="AK">Alaska</option>
                          <option value="AZ">Arizona</option>
                          <option value="AR">Arkansas</option>
                          <option value="CA">California</option>
                          <option value="CO">Colorado</option>
                          <option value="CT">Connecticut</option>
                          <option value="DE">Delaware</option>
                          <option value="DC">District of Columbia</option>
                          <option value="FL">Florida</option>
                          <option value="GA">Georgia</option>
                          <option value="HI">Hawaii</option>
                          <option value="ID">Idaho</option>
                          <option value="IL">Illinois</option>
                          <option value="IN">Indiana</option>
                          <option value="IA">Iowa</option>
                          <option value="KS">Kansas</option>
                          <option value="KY">Kentucky</option>
                          <option value="LA">Louisiana</option>
                          <option value="ME">Maine</option>
                          <option value="MD">Maryland</option>
                          <option value="MA">Massachusetts</option>
                          <option value="MI">Michigan</option>
                          <option value="MN">Minnesota</option>
                          <option value="MS">Mississippi</option>
                          <option value="MO">Missouri</option>
                          <option value="MT">Montana</option>
                          <option value="NE">Nebraska</option>
                          <option value="NV">Nevada</option>
                          <option value="NH">New Hampshire</option>
                          <option value="NJ">New Jersey</option>
                          <option value="NM">New Mexico</option>
                          <option value="NY">New York</option>
                          <option value="NC">North Carolina</option>
                          <option value="ND">North Dakota</option>
                          <option value="OH">Ohio</option>
                          <option value="OK">Oklahoma</option>
                          <option value="OR">Oregon</option>
                          <option value="PA">Pennsylvania</option>
                          <option value="RI">Rhode Island</option>
                          <option value="SC">South Carolina</option>
                          <option value="SD">South Dakota</option>
                          <option value="TN">Tennessee</option>
                          <option value="TX">Texas</option>
                          <option value="UT">Utah</option>
                          <option value="VT">Vermont</option>
                          <option value="VA">Virginia</option>
                          <option value="WA">Washington</option>
                          <option value="WV">West Virginia</option>
                          <option value="WI">Wisconsin</option>
                          <option value="WY">Wyoming</option>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                          type={'text'}
                          name={'postalCode'}
                          label={'Zip Code'}
                          value={this.state.postalCode}
                          onChange={this.handleChange}
                          fullWidth
                          required/>
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