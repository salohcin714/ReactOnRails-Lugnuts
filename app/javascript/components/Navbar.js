import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import HeroImage from "../assets/images/heroimage.jpg";
import {Link} from "react-router-dom";

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

export default function Navbar() {
    const classes = useStyles();

    return (
        <Box mb={1}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Lugnuts
                    </Typography>
                    <Link to="/about">
                        <Button color={"inherit"}>About</Button>
                    </Link>
                    <Link to="/shop">
                        <Button color={"inherit"}>Shop</Button>
                    </Link>
                    <Link to="/contact">
                        <Button color={"inherit"}>Contact</Button>
                    </Link>
                    <Link to="/">
                        <Button color={"inherit"}>Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </Box>
    )

}