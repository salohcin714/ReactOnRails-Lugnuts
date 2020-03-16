import React from "react";
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import Contactus from '../assets/images/contactus.jpg';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Divider from "@material-ui/core/Divider";
import fb from "../assets/images/Facebook.svg";
import ig from "../assets/images/Instagram.svg";
import tw from "../assets/images/twitter.svg";

export default function Contact() {
    return (
        <Container>
            <Typography variant={"h3"} style={{textAlign: 'center'}}>
                Contact Us
            </Typography>

            <Box mt={4}>
                <Grid container spacing={3}>
                    <Grid item xs={12} style={{textAlign: 'center'}}>
                        <img src={Contactus} width="800vh" height="400vh" />
                        <Typography variant="body1" mt={3}>
                            555-555-5555
                        </Typography>
                        <Typography variant="body1" mt={3}>
                            123 Street Name, City, State 12345
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="fullname"
                            name="fullname"
                            label="Full name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="Email Address"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="phone"
                            name="phone"
                            label="Phone Number"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="orderNum"
                            name="orderNum"
                            label="Order Number"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="message"
                            label="Message"
                            multiline
                            rowsMax="4"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button variant="contained" color="secondary">
                            Send
                        </Button>
                    </Grid>
                </Grid>

            </Box>

            <Box mt={8}>
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
    )
}