import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import CardHeader from '@material-ui/core/CardHeader';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import {CardContent} from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import {Delete} from '@material-ui/icons';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';

class CartList extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    const root = {
      flexGrow: 1,
      width: '100%',
    };
    if (this.props.cart.length !== 0) {
      return (
          this.props.cart.map((product, i) => {
                return (
                    <ListItem key={i} style={root}>
                      <ListItemAvatar>
                        <Avatar alt={product.name} src={product.imageURL}/>
                      </ListItemAvatar>
                      <ListItemText primary={product.name}
                                    secondary={'$' + product.retail}/>
                      <ListItemSecondaryAction>
                        <IconButton edge={'end'}
                                    onClick={() => this.props.handleRemoveFromCart(
                                        product)}>
                          <Delete/>
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                );
              },
          ));
    } else {
      return (
          <ListItemText primary={'You Don\'t Have Anything in Your Cart!'}/>
      );
    }

  }
}

class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
    };
  }

  componentDidMount() {
    this.calculateTotal(this.props.cart);
  }

  calculateTotal(cart) {
    if (cart.length !== 0) {
      let runningTotal = 0;
      cart.forEach((product) => {
        runningTotal += Number(product.retail);
      });
      this.setState({
        total: runningTotal.toFixed(2),
      });
    } else {
      this.setState({
        total: 0,
      });
    }
  }

  render() {
    return (
        <Container maxWidth={'sm'}>
          <Box mt={3}>
            <Card>
              <CardHeader title={'Cart'}/>
              <CardContent>
                <List>
                  <CartList cart={this.props.cart}
                            handleRemoveFromCart={this.props.handleRemoveFromCart}/>
                </List>
              </CardContent>
            </Card>
          </Box>
          <Box mt={3}>
            <TableContainer component={Paper}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Your Current Total:</TableCell>
                    <TableCell
                        align={'right'}>{`$${this.state.total}`}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <Box m={2} style={{textAlign: 'center'}}>
                <Button variant={'contained'}
                        color={'secondary'}>Checkout</Button>
              </Box>
            </TableContainer>
          </Box>
        </Container>
    );
  }
}

export default Cart;