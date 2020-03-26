import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Container} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 224,
  },
  tabs: {
    borderRight: '1px solid ${theme.palette.divider}',
  },
}));

export default function About() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Container>
        <Container maxWidth={'md'}>
          <Box mt={3}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Card>
                  <CardHeader title={'About Us'}/>
                  <CardMedia
                      component={'img'}
                      image={About1}
                      title="Contemplative Reptile"
                      height={400}
                  />
                  <CardContent style={{textAlign: 'center'}}>
                    <Typography variant="body1" component="p"
                                style={{marginBottom: '20px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Urna condimentum mattis pellentesque id nibh
                      tortor id aliquet lectus. Egestas maecenas pharetra
                      convallis posuere morbi leo urna molestie. Nullam vehicula
                      ipsum a arcu cursus. Praesent elementum facilisis leo vel.
                    </Typography>

                    <Typography variant="body1" component="p"
                                style={{marginBottom: '20px'}}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Urna condimentum mattis pellentesque id nibh
                      tortor id aliquet lectus. Egestas maecenas pharetra
                      convallis posuere morbi leo urna molestie. Nullam vehicula
                      ipsum a arcu cursus. Praesent elementum facilisis leo vel.
                    </Typography>

                    <Typography variant="body1" component="p"
                                style={{marginBottom: '20px'}}>
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

            <div className={classes.root}>
              <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Company History"
                  className={classes.tabs}
              >
                <Tab label="The Beginning" {...allyProps(0)} />
                <Tab label="The Middle" {...allyProps(1)} />
              </Tabs>
              <TabPanel index={0} value={value}>
                The beginning of the company started like this...
              </TabPanel>
              <TabPanel index={1} value={value}>
                The story went like this...
              </TabPanel>
            </div>

          </Box>

        </Container>
        <Footer/>
      </Container>
  );
}
