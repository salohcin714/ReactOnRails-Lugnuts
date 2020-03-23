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

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
   img: {
        width: '400px',
       height: '700px',
   },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

export default function ProductDetail() {

    const classes = useStyles();

    return(
        <Container maxWidth={lg}>
            <Box mt={4}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <img src={fc2} />
                    </Grid>

                    <Grid item xs={6}>
                        <Typography variant="h3">
                            Product Name
                        </Typography>

                        <Typography variant="h5">
                            $$$$
                        </Typography>
                        <ExpansionPanel>
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

                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}