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
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import {Link} from 'react-router-dom';
import Modal from '@material-ui/core/Modal';
import {makeStyles} from '@material-ui/core/styles';
import {Container} from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import {VerifiedUser} from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Footer() {

  const classes = useStyles();

  const linkFix = {
    textDecoration: 'none',
    color: '#FFFFFF',
  };


  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    window.alert('Your information has been added!');
  };

  const body = (
    <Container maxWidth={'xs'} component={Paper}>
      <Box mt={12} m={3} style={{textAlign: 'center'}}
           className={classes.paper}>
        <VerifiedUser/>
        <Typography variant={'h6'}>Refund Policy</Typography>
        <Typography variant={'body2'}>
          All orders can be returned within 30 days of ship date. Any defective
          products must go through the manufacturer's warranty.
        </Typography>


      </Box>
    </Container>
  );

  return (
    <Box mt={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card style={{height: '100%'}}>
            <CardHeader
              title={'Quick Links'}/>
            <br/>
            <CardActions>
              <Link to={'/shop'} style={linkFix}>
                <Button variant={'text'} size={'large'}>Search</Button>
              </Link>
              <Link to={'/contact'} style={linkFix}>
                <Button variant={'text'} size={'large'}>Contact Us</Button>
              </Link>
              <Button variant={'text'} size={'large'} onClick={handleOpen}>Refund
                Policy</Button>
            </CardActions>
            <Modal open={open} onClose={handleClose}>{body}</Modal>
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
                        style={{alignContent: 'right'}}
                        onClick={handleSubmit}>Subscribe</Button>

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
          <img src={fb} height={24} width={32} alt={'Facebook'}/>
          <img src={ig} height={24} alt={'Instagram'}/>
          <img src={tw} height={24} alt={'Twitter'}/>
        </Grid>
      </Grid>
    </Box>
  );
}
