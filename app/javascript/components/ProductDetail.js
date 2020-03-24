import React from "react";
import {Container} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import fc2 from '../assets/images/fc2.jpg';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from "@material-ui/core/Button";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import HelpIcon from '@material-ui/icons/Help';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import fb from "../assets/images/Facebook.svg";
import ig from "../assets/images/Instagram.svg";
import tw from "../assets/images/Twitter.svg";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
   img: {
        width: '550px',
       height: '600px',
       marginRight: '10px',
   },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function ProductDetail() {

    const classes = useStyles();

    return(
        <Container maxWidth="lg">
            <Box mt={4}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <img src={fc2} className={classes.img}/>
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="h3">
                            Product Name
                        </Typography>

                        <Typography variant="h5">
                            $$$$
                        </Typography>
                        <ExpansionPanel style={{marginTop: '10%'}}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Description</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <ExpansionPanel style={{marginTop: '10px'}}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>What's Included</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <ExpansionPanel style={{marginTop: '10px'}}>
                            <ExpansionPanelSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className={classes.heading}>Details & Care</Typography>
                            </ExpansionPanelSummary>
                            <ExpansionPanelDetails>
                                <Typography>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                    sit amet blandit leo lobortis eget.
                                </Typography>
                            </ExpansionPanelDetails>
                        </ExpansionPanel>

                        <Button variant="contained" color="secondary" style={{marginTop: '10%'}}>
                            Add To Cart
                        </Button>

                    </Grid>
                </Grid>
            </Box>


            <Box mt={6}>
                <Grid container spacing={3} style={{textAlign: 'center'}}>
                    <Grid item xs={4}>
                        <LocalShippingIcon />
                        <Typography variant="h5">Free 2-day Shipping</Typography>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <VerifiedUserIcon />
                        <Typography variant="h5">Refundable Policy</Typography>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </Grid>

                    <Grid item xs={4}>
                        <HelpIcon />
                        <Typography variant="h5">Dependable Customer Service</Typography>
                        <Typography variant="body2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>


            <Box mt={6}>
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