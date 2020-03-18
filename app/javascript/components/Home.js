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
import Chip from '@material-ui/core/Chip';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import useTheme from "@material-ui/core/styles/useTheme";
import CardActions from "@material-ui/core/CardActions";
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import fc1 from '../assets/images/fc1.jpg';
import fc2 from '../assets/images/fc2.jpg';
import fc3 from '../assets/images/fc3.jpg';
import fc4 from '../assets/images/fc4.jpg';
import CardActionArea from "@material-ui/core/CardActionArea";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import fb from "../assets/images/Facebook.svg";
import ig from "../assets/images/Instagram.svg";
import tw from "../assets/images/Twitter.svg";
import axios from 'axios'


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

    const url = `/api/v1/products/index`;
    const products = [];

    axios.get('api/v1/products.json')
        .then(resp => {
            console.log(resp)
        })
        .catch(data => {
            debugger
        });


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
                                    Accessories
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
                                <Typography gutterBottom variant="h4" component="h4">
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


            <Box mt={4}>
                <Typography variant="h3" style={{textAlign: 'center', marginBottom: '15px'}}>Testimonials</Typography>
                <Grid container spacing={3} style={{textAlign: 'center'}}>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardContent>
                                <FormatQuoteIcon/>
                                <Typography variant="body2" gutterBottom style={{textAlign: 'justify'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Quos blanditiis tenetur unde suscipit, quam beatae rerum
                                    inventore consectetur, neque doloribus, cupiditate numquam
                                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                                </Typography>
                                <Typography variant="caption" display="block" gutterBottom>
                                    - Client Name
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardContent>
                                <FormatQuoteIcon/>
                                <Typography variant="body2" gutterBottom style={{textAlign: 'justify'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Quos blanditiis tenetur unde suscipit, quam beatae rerum
                                    inventore consectetur, neque doloribus, cupiditate numquam
                                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                                </Typography>
                                <Typography variant="caption" display="block" gutterBottom>
                                    - Client Name
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={4}>
                        <Card>
                            <CardContent>
                                <FormatQuoteIcon/>
                                <Typography variant="body2" gutterBottom style={{textAlign: 'justify'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Quos blanditiis tenetur unde suscipit, quam beatae rerum
                                    inventore consectetur, neque doloribus, cupiditate numquam
                                    dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
                                </Typography>
                                <Typography variant="caption" display="block" gutterBottom>
                                    - Client Name
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>


            <Box mt={4}>
                <Typography variant="h3" style={{textAlign: 'center', marginBottom: '15px'}}>Featured
                    Collection</Typography>
                <Grid container spacing={3} style={{textAlign: 'center'}}>
                    <Grid item xs={12} sm={3}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={fc1}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Product Name
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                        ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Chip label={"$X.XX"}/>
                                <Button size="small" color="primary">
                                    Add to Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={fc2}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Product Name
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                        ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Chip label={"$X.XX"}/>
                                <Button size="small" color="primary">
                                    Add to Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={fc3}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Product Name
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                        ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Chip label={"$X.XX"}/>
                                <Button size="small" color="primary">
                                    Add to Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image={fc4}
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Product Name
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                                        ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
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


            <Box mt={4}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5">Quick Links</Typography>
                        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                            <Button>Search</Button>
                            <Button>Contact Us</Button>
                            <Button>Refund Policy</Button>
                        </ButtonGroup>
                    </Grid>

                    <Grid item xs={12} sm={6} style={{textAlign: 'right'}}>
                        <Typography variant="h5">Join the mailing list</Typography>
                        <TextField id="outlined-basic" label="E-Mail Address" variant="outlined"/>
                        <Button variant="contained" color="primary"
                                style={{padding: '15px', marginLeft: '5px'}}>Subscribe</Button>
                    </Grid>
                </Grid>

                <Divider style={{marginTop: '10px', marginBottom: '10px'}}/>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="caption" gutterBottom>All Major Credit Cards Accepted</Typography>
                    </Grid>

                    <Grid item xs={12} sm={6} style={{textAlign: 'right'}}>
                        <img src={fb} height={24} width={32}/>
                        <img src={ig} height={24}/>
                        <img src={tw} height={24}/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}