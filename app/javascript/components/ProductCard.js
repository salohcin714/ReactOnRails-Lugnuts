import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import React, {Component} from 'react';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
        <Grid item xs={12} sm={6} lg={3}>
          <Card style={{height: '100%'}}>
            <CardMedia component={'img'} image={this.props.product.image_url}/>
            <CardHeader title={this.props.product.name}/>
            <CardContent>
              <Chip label={`$${this.props.product.retail}`}/>
              <br/>
              <Typography variant={'body2'}>
                {this.props.product.description}
              </Typography>
            </CardContent>
            <CardActions>
              <Link to={{
                pathname: '/product/detail',
                state: {product: this.props.product},
              }}>
                <Button variant={'text'}>View Product</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
    );
  }
}

export default ProductCard;