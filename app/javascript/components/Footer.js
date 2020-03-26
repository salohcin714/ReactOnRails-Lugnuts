import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import fb from '../assets/images/Facebook.svg';
import ig from '../assets/images/Instagram.svg';
import tw from '../assets/images/Twitter.svg';
import Box from '@material-ui/core/Box';
import React from 'react';

export default function Footer() {
  return (
      <Box mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h5">Quick Links</Typography>
            <ButtonGroup
                variant="text"
                color="primary"
                aria-label="text primary button group"
            >
              <Button>Search</Button>
              <Button>Contact Us</Button>
              <Button>Refund Policy</Button>
            </ButtonGroup>
          </Grid>

          <Grid item xs={12} sm={6} style={{textAlign: 'right'}}>
            <Typography variant="h5">Join the mailing list</Typography>
            <TextField
                id="outlined-basic"
                label="E-Mail Address"
                variant="outlined"
            />
            <Button variant="contained" color="primary"
                    style={{
                      padding: '15px',
                      marginLeft: '5px',
                    }}>Subscribe</Button>
          </Grid>
        </Grid>

        <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="caption" gutterBottom>
              All Major Credit Cards Accepted
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} style={{textAlign: 'right'}}>
            <img src={fb} height={24} width={32}/>
            <img src={ig} height={24}/>
            <img src={tw} height={24}/>
          </Grid>
        </Grid>
      </Box>
  );
}
