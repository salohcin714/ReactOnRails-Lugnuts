import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';
import {Container} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import HelpIcon from '@material-ui/icons/Help';
import Footer from './Footer';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import {AttachMoney} from '@material-ui/icons';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class ProductDetail extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    const {product} = this.props.location.state.product;
    console.log(product);
  }

  render() {
    const {product} = this.props.location.state;
    return (
        <Container maxWidth="lg">
          <Box mt={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Card>
                  <CardMedia component={'img'} image={product.imageURL}/>
                </Card>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Card>
                  <CardHeader title={product.name}/>
                  <CardContent>
                    <Chip color={'secondary'} icon={<AttachMoney/>}
                          label={product.retail}/>
                    <Box mt={1}>
                      <Typography
                          variant={'body1'}>{product.description}</Typography>
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Link to={{
                      pathname: '/cart',
                      state: {},
                    }} className={'linkFix'}><Button variant={'contained'}
                                                     color={'primary'}
                    >Add to Cart</Button>
                    </Link>
                  </CardActions>
                </Card>


              </Grid>
            </Grid>
          </Box>


          <Box mt={3}>
            <Card>
              <CardContent>
                <Grid container spacing={3} style={{textAlign: 'center'}}>
                  <Grid item xs={4}>
                    <LocalShippingIcon/>
                    <Typography variant="h5">Free 2-day Shipping</Typography>
                    <Typography variant="body2">
                      Orders over $50 qualify for free shipping.
                    </Typography>
                    <Typography variant={'caption'}>Note: This does not apply to
                      international orders</Typography>
                  </Grid>

                  <Grid item xs={4}>
                    <VerifiedUserIcon/>
                    <Typography variant="h5">Refund Policy</Typography>
                    <Typography variant="body2">
                      All orders can be returned within 30 days of ship date.
                      Any
                      defective products must go through the manufacturer's
                      warranty.
                    </Typography>
                  </Grid>

                  <Grid item xs={4}>
                    <HelpIcon/>
                    <Typography variant="h5">Dependable Customer
                      Service</Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>


          <Footer/>
        </Container>
    );
  }
}

ProductDetail.propTypes = {
  location: PropTypes.object.isRequired,
};

export default ProductDetail;
