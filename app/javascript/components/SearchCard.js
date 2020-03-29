import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

const SearchCard = props => {


  return (
      <div className={classes.root}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  $$$$
                </Typography>
                <Typography variant="h5" component="h2">
                  Product test
                </Typography>
                <Typography variant="body2" component="p">
                  test example of product
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add To Cart</Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {cost}
                </Typography>
                <Typography variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography variant="body2" component="p">
                  {description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Add To Cart</Button>
              </CardActions>
            </Card>
          </Paper>
        </Grid>
      </div>
  );
};

export default SearchCard;