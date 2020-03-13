import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import HeroImage from '../assets/images/heroimage.jpg';
import Accessories from '../assets/images/caraccessories.jpg';
import Product1 from '../assets/images/product1.jpg';
import {Container} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import {Link} from 'react-router-dom'
import CardMedia from "@material-ui/core/CardMedia";
import Grid from '@material-ui/core/Grid';
import CssBaseline from "@material-ui/core/CssBaseline";
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import useTheme from "@material-ui/core/styles/useTheme";
import CardActions from "@material-ui/core/CardActions";


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
    linkFix: {
        textDecoration: 'none',
        color: "#FFFFFF"

    },
    cardLayout: {
        display: "flex",
        flexDirection: "column"
    },
    accessories: {
        backgroundImage: "url(" + Accessories + ")",
        height: "32vh"
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },

}));

export default function ButtonAppBar() {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Container className={classes.root}>
            <Box m={1} mt={3}>
                <Paper className={classes.pageHero} style={{justifyContent: 'center'}}>
                    <Typography variant="h3" className={classes.pageHeroText} mt={4}>
                        Welcome
                    </Typography>
                    <Box m={4}>
                        <Link to={"/shop"} className={classes.linkFix}>
                            <Button variant="contained" color="secondary" size={"large"}>
                                Shop Now
                            </Button>
                        </Link>
                    </Box>
                </Paper>
            </Box>
            <Box m={1} mt={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.root}>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="320"
                                image={Accessories}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus.
                                    Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Nullam
                                    vehicula ipsum a arcu cursus. Praesent elementum facilisis leo vel.
                                </Typography>
                            </CardContent>

                            <CardActions>

                                <Button size="small" color="primary">
                                    View Accessories
                                </Button>

                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card className={classes.root}>
                            <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="320"
                                image={Product1}
                                title="Contemplative Reptile"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="h2">
                                    Product Name
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus.
                                    Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Nullam
                                    vehicula ipsum a arcu cursus. Praesent elementum facilisis leo vel.
                                </Typography>
                            </CardContent>

                            <CardActions>
                                <Chip label={"$X.XX"}/>
                                <Button size="small" color="primary">
                                    Add to Cart
                                </Button>

                            </CardActions>
                        </Card>
                    </Grid>


                </Grid>
            </Box>
        </Container>


    );
}