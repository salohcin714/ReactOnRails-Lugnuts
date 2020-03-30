import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import fb from '../assets/SVG/facebook.svg';
import ig from '../assets/SVG/instagram.svg';
import tw from '../assets/SVG/twitter.svg';
import Box from '@material-ui/core/Box';
import React from 'react';
import {Card} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';

export default function Footer() {
  return (
      <Box mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card style={{height: '100%'}}>
              <CardHeader
                  title={'Quick Links'}/>
              <br/>
              <CardActions>

                <Button variant={'text'} size={'large'}>Search</Button>
                <Button variant={'text'} size={'large'}>Contact Us</Button>
                <Button variant={'text'} size={'large'}>Refund Policy</Button>

              </CardActions>
            </Card>

          </Grid>

          <Grid item xs={12} md={6}>
            <Card style={{height: '100%'}}>
              <CardHeader
                  title={'Join the mailing list'}/>
              <Box m={1}>
                <CardActions>

                  <TextField variant={'outlined'} label={'Email Address'}
                             style={{flexGrow: 1}}/>
                  <Button variant={'contained'} color={'primary'}
                          style={{alignContent: 'right'}}>Subscribe</Button>

                </CardActions>
              </Box>
            </Card>

          </Grid>
        </Grid>
        <Box mt={3} mb={1}>
          <Divider/>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant={'overline'} gutterBottom>
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
