import React from "react";
import Typography from "@material-ui/core/Typography";
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

                    <Grid item xs={12}>
                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus.
                            Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Nullam
                            vehicula ipsum a arcu cursus. Praesent elementum facilisis leo vel.
                        </Typography>

                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus.
                            Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Nullam
                            vehicula ipsum a arcu cursus. Praesent elementum facilisis leo vel.
                        </Typography>

                        <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus.
                            Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Nullam
                            vehicula ipsum a arcu cursus. Praesent elementum facilisis leo vel.
                        </Typography>
                    </Grid>
                </Grid>


            </Box>

        </Container>
    )
}