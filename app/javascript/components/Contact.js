import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Contactus from '../assets/images/contactus.jpg';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Footer from './Footer';

export default function Contact() {
  return (
    <>
      <Container maxWidth={'sm'}>
        <Box mt={3}>
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
        <Box mt={3}>
          <Card>
            <form>
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
                <Container maxWidth={'xs'} style={{textAlign: 'center'}}>
                  <div className="g-recaptcha"
                       data-sitekey="6LfYiugUAAAAANJzlDvUUnjej6EZkiBhUWwUi3wd"
                       style={{display: 'inline-block'}}/>
                </Container>
                <Box mt={1} style={{textAlign: 'center'}}>
                  <Button variant="contained" color="secondary">
                    Send
                  </Button>
                </Box>
              </CardContent>
            </form>
          </Card>

        </Box>


      </Container>
      <Footer/>
    </>
  );
}
