import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
}));

function f() {

}

function calculateTotal(cart) {
  if (cart.length !== 0) {
    let runningTotal = 0;
    cart.forEach((product) => {
      runningTotal += Number(product.retail);
    });
    return runningTotal.toFixed(2);
  } else {
    return 0;
  }
}

export default function Review(props) {
  const classes = useStyles();
  const products = props.cart;
  const total = calculateTotal(products);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {products.map((product) => (
          <ListItem className={classes.listItem} key={product.name}>
            <ListItemText primary={product.name}/>
            <Typography
              variant="body2">${product.retail}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total"/>
          <Typography variant="subtitle1" className={classes.total}>
            $ {total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom
                      className={classes.title}>
            Shipping
          </Typography>
          <Typography variant={'body1'}
                      gutterBottom>{props.customer.firstName} {props.customer.lastName}</Typography>
          <Typography variant={'body1'}
                      gutterBottom>{props.customer.address}</Typography>
          <Typography variant={'body1'}
                      gutterBottom>{props.customer.city}, {props.customer.state} {props.customer.postalCode}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom
                      className={classes.title}>
            Payment details
          </Typography>

        </Grid>
      </Grid>
    </React.Fragment>
  );
}
