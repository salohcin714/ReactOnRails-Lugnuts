import React from "react";
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";
import Shop1 from '../assets/images/shop1.jpg';
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import SwipeableViews from 'react-swipeable-views'
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import * as PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    title: {
        flexGrow: 1,
    },
    shopHero: {
        backgroundImage: "url(" + Shop1 + ")",
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '40vh',
        textAlign: 'center'
    },

    shopHeroText: {
        color: '#FFFFFF',
        flexGrow: 1,
        textAlign: 'center',
        paddingTop: theme.spacing(2)
    },
    linkFix: {
        textDecoration: 'none',
        color: "#FFFFFF"
    }

}));

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
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

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


export default function Shop() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };
    return (
        <Container className={classes.root}>
            <Box m={1} mt={3}>
                <Paper className={classes.shopHero} style={{justifyContent: 'center'}}>
                    <Typography variant="h3" className={classes.shopHeroText} mt={4}>
                        Shop
                    </Typography>
                    <Box m={4}>
                        <Link to={"/shop"} className={classes.linkFix}>
                            <Button variant="contained" color="secondary" size={"large"} className={classes.linkFix}>
                                View What's new
                            </Button>
                        </Link>
                    </Box>
                </Paper>
            </Box>

            <Box mt={4}>
                <Grid container spacing={3} style={{justifyContent: 'center'}}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h4" style={{marginBottom: '15px'}}>
                            Find what you're looking for
                        </Typography>


                        <TextField
                            id="search"
                            fullWidth
                            placeholder="Search the shop..."
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon/>
                                    </InputAdornment>
                                )
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>

            <Box mt={4}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>


                    </Grid>
                </Grid>
            </Box>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Browse by Product" {...a11yProps(0)} />
                    <Tab label="Browse by Category" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    Item One
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    Item Two
                </TabPanel>

            </SwipeableViews>

        </Container>
    )
}