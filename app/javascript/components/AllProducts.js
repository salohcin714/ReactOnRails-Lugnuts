import React from "react";
import {Container} from "@material-ui/core";
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import ListSubheader from '@material-ui/core/ListSubheader';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function AllProducts() {
    const classes = useStyles();

    const [checked, setChecked] = React.useState([1]);

    const handleToggle = value => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    }
    return (
        <Container maxWidth={"lg"}>
            <Box mt={4}>
                <Grid container spacing={3}>
                    <Grid item xs={3}>
                        <List dense subheader={<ListSubheader>Scale</ListSubheader>}>
                            {[0,1,2,3].map(value => {
                                const labelID = 'checkbox-list-secondary-label-${value}';
                                return (
                                    <ListItem key={value} button>
                                        <ListItemText id={labelID} primary={'Line item ${value + 1}'} />
                                        <ListItemSecondaryAction>
                                            <Checkbox
                                                edge="end"
                                                onChange={handleToggle(value)}
                                                checked={checked.indexOf(value) !== -1}
                                                inputProps={{ 'aria-labelledby': labelID }}
                                            />
                                        </ListItemSecondaryAction>
                                    </ListItem>
                                );
                            })}
                        </List>
                    </Grid>

                    <Grid item xs={9}>

                    </Grid>
                </Grid>
            </Box>
        </Container>
    )

}