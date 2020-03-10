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


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
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
    },
    pageHeroText: {
        color: '#FFFFFF',
        flexGrow: 1,
        textAlign: 'center',
        paddingTop: '5%',
    },

}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Lugnuts
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Container maxWidth={"xl"} className={classes.pageHero} style={{height: '50vh' }}>
                <Typography variant="h3" className={classes.pageHeroText}>
                    Welcome
                </Typography>


                <Button variant="contained" color="secondary" style={{justifyContent: 'center'}}>
                    Shop Now
                </Button>

            </Container>
        </div>


    );
}