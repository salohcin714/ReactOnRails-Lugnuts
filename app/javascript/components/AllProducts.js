import React from "react";
import {Container} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {makeStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from "@material-ui/core/Typography";
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

function valueText(value) {
    return '${value}s';
}

export default function AllProducts() {
    const classes = useStyles();

    const [state, setState] = React.useState({

    });

    const [value, setValue] = React.useState([1800, 2000]);

    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.checked });
    }

    const handleSlider = (event, newValue) => {
        setValue(newValue);
    }



    return (
        <Container maxWidth={"lg"}>
            <Box mt={4}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Scale</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="1:10"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="1:12"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="1:18"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="1:72"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="1:24"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="1:32"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="1:50"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="1:700"
                                />
                            </FormGroup>
                        </FormControl>

                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Product Line</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="Classic Cars"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="Motorcycles"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="Trucks & Buses"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="Vintage Cars"
                                />
                            </FormGroup>
                        </FormControl>

                        <Typography id="range-slider" gutterBottom>
                            Year
                        </Typography>
                            <Slider
                                value={value}
                                onChange={handleSlider}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                getAriaValueText={valueText}
                            />

                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Buy Price</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="Under $50"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="$50 - $100"
                                />
                                <FormControlLabel
                                    control={<Checkbox onChange={handleChange} />}
                                    label="$100 +"
                                />
                            </FormGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={9}>

                    </Grid>
                </Grid>
            </Box>
        </Container>
    )

}