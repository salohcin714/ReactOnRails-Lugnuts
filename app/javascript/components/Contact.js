import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Container} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Contactus from '../assets/images/contactus.jpg';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Divider from '@material-ui/core/Divider';
import fb from '../assets/images/Facebook.svg';
import ig from '../assets/images/Instagram.svg';
import tw from '../assets/images/Twitter.svg';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Footer from './Footer';

export default function Contact() {
  return (
      <>
        <Container maxWidth={'sm'}>
          <Box m={3}>
            <Card>

              <CardMedia
                  component={'img'}
                  image={Contactus}/>
              <CardHeader title={'Contact us'}/>
              <CardContent>
                <Typography variant="body1">
                  (555)555-5555
                </Typography>
                <Typography variant="body1">
                  123 Street Name, City, State 12345
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box m={3}>
            <Card>
              <CardContent>


                <TextField
                    required
                    id="fullname"
                    name="fullname"
                    label="Full name"
                    fullWidth
                />


                <TextField
                    required
                    id="email"
                    name="email"
                    label="Email Address"
                    fullWidth
                />

                <TextField
                    required
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    fullWidth
                />

                <TextField
                    id="orderNum"
                    name="orderNum"
                    label="Order Number"
                    fullWidth
                />

                <TextField
                    required
                    id="message"
                    label="Message"
                    multiline
                    rowsMax="4"
                    fullWidth
                />
                <Box mt={1}>
                  <Button variant="contained" color="secondary">
                    Send
                  </Button>
                </Box>
              </CardContent>

            </Card>

          </Box>


        </Container>
        <Footer/>
      </>
  );
}
