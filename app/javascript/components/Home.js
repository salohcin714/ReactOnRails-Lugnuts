import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HeroImage from '../assets/images/heroimage.jpg';
import Accessories from '../assets/images/caraccessories.jpg';
import Product1 from '../assets/images/product1.jpg';
import {Container} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Navbar from "./Navbar";
import Grid from '@material-ui/core/Grid';
import CssBaseline from "@material-ui/core/CssBaseline";
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';

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
        textAlign: 'center',
        top: '0px',
    },
    pageHeroText: {
        color: '#FFFFFF',
        flexGrow: 1,
        textAlign: 'center',
        paddingTop: theme.spacing(2)
    },
    firstSection: {
        marginTop: '5%',
    },
    accessories: {
        flexGrow: 1,
        paddingLeft: '6%',
        paddingBottom: '10px',
    },
    quantityBox: {
        width: 60,
    },

}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (

        // main hero section

            <React.Fragment>
                <div>
            <Container maxWidth="xl">
                <CssBaseline />
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

                <Grid container spacing={3} className={classes.firstSection}>
                    <Grid item xs={6}>
                        <Typography variant="h4" className={classes.accessories}>
                            Accessories
                        </Typography>
                        <Typography variant="p" className={classes.accessoriesText}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus.
                            Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Nullam
                            vehicula ipsum a arcu cursus. Praesent elementum facilisis leo vel.

                        </Typography>
                        <div style={{marginTop: '25%', marginLeft: '25%'}}>
                        <Button variant="contained" color="secondary">
                            See Our Accessories
                        </Button>
                        </div>
                    </Grid>

                    <Grid item xs={6}>
                       <img src={Accessories} height="400vh" width="500vh"/>
                    </Grid>
                </Grid>



                 <Grid container spacing={3} className={classes.firstSection}>
                     <Grid item xs={6}>
                         <img src={Product1} height="400vh" width="500vh" />
                     </Grid>

                     <Grid item xs={6}>
                         <Typography variant="h4">Product Name</Typography>
                         <Chip
                             label="$$$$"
                             clickable
                             color="primary"
                             variant="outlined"
                         />
                         <Typography variant="caption" display="block">Quantity</Typography>
                         <form className={classes.root} noValidate autoComplete="off">
                             <TextField id="outlined-basic" label="1" variant="outlined" className={classes.quantityBox}/>
                         </form>

                         <div style={{marginTop: '30px'}}>
                             <Button variant="contained" color="secondary">
                                 Add To Cart
                             </Button>
                         </div>

                         <Typography variant="p" style={{paddingTop: '20px'}} display="block">
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                             sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                             Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus.
                         </Typography>
                     </Grid>
                 </Grid>
                </div>
            </React.Fragment>




    );
}