import React from "react";
import Typography from "@material-ui/core/Typography";
import {Container} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import Grid from '@material-ui/core/Grid';
import About1 from '../assets/images/about1.jpg';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

export default function About() {
    return (
        <Container>


            <Box mt={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Card>
                            <CardMedia
                                component={"img"}
                                image={About1}
                                title="Contemplative Reptile"
                                height={400}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h3" component="h3">
                                    About Us
                                </Typography>
                                <Typography variant="body1" component="p">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id
                                    nibh tortor id aliquet lectus. Egestas maecenas pharetra convallis posuere morbi leo
                                    urna molestie. Nullam vehicula ipsum a arcu cursus. Praesent elementum facilisis leo
                                    vel.
                                    <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id
                                    nibh tortor id aliquet lectus. Egestas maecenas pharetra convallis posuere morbi leo
                                    urna molestie. Nullam vehicula ipsum a arcu cursus. Praesent elementum facilisis leo
                                    vel.
                                    <br/>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Urna condimentum mattis pellentesque id
                                    nibh tortor id aliquet lectus. Egestas maecenas pharetra convallis posuere morbi leo
                                    urna molestie. Nullam vehicula ipsum a arcu cursus. Praesent elementum facilisis leo
                                    vel.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

        </Container>
    )
}