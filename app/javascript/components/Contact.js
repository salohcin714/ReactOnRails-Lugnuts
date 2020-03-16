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
import tw from "../assets/images/Twitter.svg";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";

export default function Contact() {
    return (
        <Container>
            <Typography variant={"h3"} style={{textAlign: 'center'}}>
                Contact Us
            </Typography>

            <Box mt={4}>
                <Grid container spacing={3}>
                    <Grid item xs={12} style={{textAlign: 'center'}}>
                        <Card>
                            <Box m={4}>
                                <Paper elevation={2}>
                                    <CardMedia component={"img"} image={Contactus}/>
                                </Paper>
                            </Box>
                            <CardContent>
                                <Typography variant="body1">
                                    (555)555-5555
                                </Typography>
                                <Typography variant="body1">
                                    123 Street Name, City, State 12345
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Paper>

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
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="message"
                                label="Message"
                                multiline
                                rowsMax="4"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} style={{textAlign: "center"}}>
                            <Button variant="contained" color="secondary">
                                Send
                            </Button>
                        </Grid>
                    </Paper>
                </Grid>

            </Box>

            <Box mt={8}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h5">Quick Links</Typography>
                        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                            <Button size={"large"}>Search</Button>
                            <Button size={"large"}>Contact Us</Button>
                            <Button size={"large"}>Refund Policy</Button>
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