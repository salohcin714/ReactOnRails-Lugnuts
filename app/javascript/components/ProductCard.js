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
import Box from '@material-ui/core/Box';
import {AttachMoney} from '@material-ui/icons';
import smartTruncate from 'smart-truncate';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid item xs={12} sm={6} lg={3}>
        <Card style={{height: '100%'}}>
          <CardMedia component={'img'} image={this.props.product.imageURL}/>
          <CardHeader title={this.props.product.name}/>
          <CardContent style={{marginTop: '-24px'}}>
            <Chip icon={<AttachMoney/>} label={this.props.product.retail}/>
            <Box mt={1}>
              <Typography variant={'body2'}>
                {smartTruncate(this.props.product.description, 64)}
              </Typography>
            </Box>
          </CardContent>
          <CardActions style={{alignItems: 'flex-end'}}>
            <Link to={{
              pathname: '/product/detail',
              state: {product: this.props.product},
            }} style={{color: '#FFFFFF', textDecoration: 'none'}}>
              <Button variant={'contained'} color={'secondary'}>View
                Product</Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
