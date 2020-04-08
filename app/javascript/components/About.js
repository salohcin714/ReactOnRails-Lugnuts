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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Urna condimentum mattis pellentesque id nibh
                    tortor id aliquet lectus. Egestas maecenas pharetra
                    convallis posuere morbi leo urna molestie. Nullam vehicula
                    ipsum a arcu cursus. Praesent elementum facilisis leo vel.
                  </Typography>
                  <br/>
                  <Typography variant="body1" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Urna condimentum mattis pellentesque id nibh
                    tortor id aliquet lectus. Egestas maecenas pharetra
                    convallis posuere morbi leo urna molestie. Nullam vehicula
                    ipsum a arcu cursus. Praesent elementum facilisis leo vel.
                  </Typography>

                  <Typography variant="body1" component="p">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Urna condimentum mattis pellentesque id nibh
                    tortor id aliquet lectus. Egestas maecenas pharetra
                    convallis posuere morbi leo urna molestie. Nullam vehicula
                    ipsum a arcu cursus. Praesent elementum facilisis leo vel.
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
