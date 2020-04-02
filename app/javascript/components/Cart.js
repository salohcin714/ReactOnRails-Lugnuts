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
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

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
                    <div key={i} style={root}>
                      <ListItemText primary={product.name}
                                    secondary={'$' + product.retail}/>
                      <ListItemSecondaryAction>
                        <IconButton edge={'end'}
                                    onClick={() => this.props.handleRemoveFromCart(
                                        product)}>
                          <Delete/>
                        </IconButton>
                      </ListItemSecondaryAction>
                    </div>
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
        </Container>
    );
  }
}

export default Cart;