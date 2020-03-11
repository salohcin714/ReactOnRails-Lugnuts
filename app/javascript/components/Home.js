import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HeroImage from '../assets/images/heroimage.jpg';
import {Container} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Navbar from "./Navbar";


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
    pageHero: {
        backgroundImage: "url(" + HeroImage + ")",
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '32vh',
        textAlign: 'center'
    },
    pageHeroText: {
        color: '#FFFFFF',
        flexGrow: 1,
        textAlign: 'center',
        paddingTop: theme.spacing(2)
    },


}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Box m={1}>
                <Paper className={classes.pageHero} style={{justifyContent: 'center'}}>
                    <Typography variant="h3" className={classes.pageHeroText} mt={4}>
                        Welcome
                    </Typography>
                    <Box m={4}>
                        <Button variant="contained" color="secondary">
                            Shop Now
                        </Button>
                    </Box>
                </Paper>
            </Box>
        </Container>


    );
}