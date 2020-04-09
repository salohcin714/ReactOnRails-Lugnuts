import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import About1 from '../assets/images/about1.jpg';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import Footer from './Footer';

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={'vertical-tabpanel-${index}'}
      aria-labelledby={'vertical-tab-${index}'}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function allyProps(index) {
  return {
    'id': 'vertical-tab-${index}',
    'aria-controls': 'vertical-tabpenl-${index}',
  };
}


export default function About() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth={'lg'}>
      <Container maxWidth={'md'}>
        <Box mt={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardMedia component={'img'} image={About1}
                           title="About Us"/>
                <CardHeader title={'About Us'}/>
                <CardContent>
                  <Typography variant="body1" component="p">
                    Larry Lugnut started an automotive parts supply company
                    nearly 50 years ago. Upon his death, he left the business to
                    his granddaughter Patty Lugnut. The business had grown into
                    a local and regional success. However, Larry eschewed the
                    advances in communications technology, preferring to do
                    business face-to-face, in order to develop long-term
                    customer relationships.
                    <br/>
                    <br/>
                    Patty, as the new CEO, had a background in marketing. Her
                    primary experience with her family’s automotive parts
                    company primarily was listening to long customer and vendor
                    stories during family get-to-gathers. She knew that for the
                    business to survive she would have to provide the leadership
                    to change company culture and embrace the web.

                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>


        </Box>

      </Container>
      <Footer/>
    </Container>
  );
}
