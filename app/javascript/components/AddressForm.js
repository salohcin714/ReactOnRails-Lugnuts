import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm(props) {
  return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Billing Address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
                required
                id="firstName"
                name="firstName"
                label="First name"
                value={props.customer.firstName}
                fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              value={props.customer.lastName}
              fullWidth
              autoComplete="lname"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
              required
              id="address1"
              name="address1"
              label="Address"
              value={props.customer.address}
              fullWidth
              multiline
              autoComplete="billing address-line1"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
              required
              id="city"
              name="city"
              label="City"
              value={props.customer.city}
              fullWidth
              autoComplete="billing address-level2"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
              id="state"
              name="state"
              label="State"
              value={props.customer.state}
              fullWidth/>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              value={props.customer.postalCode}
              fullWidth
              autoComplete="billing postal-code"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
