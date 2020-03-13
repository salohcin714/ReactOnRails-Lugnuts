import React from "react";
import Typography from "@material-ui/core/Typography";
import Navbar from "./Navbar";
import {Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import About1 from '../assets/images/about1.jpg';

export default function About() {
    return (
        <Container>
            <Typography variant={"h3"} style={{textAlign: 'center'}}>
                About Us
            </Typography>

            <Box mt={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <img src={About1} height="400vh" width="800vh"/>
                    </Grid>
                </Grid>
            </Box>

        </Container>
    )
}