import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import {Container} from '@material-ui/core';
import Shop1 from '../assets/images/shop1.jpg';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import ProductCard from './ProductCard';
import {withStyles} from '@material-ui/core/styles';
import Footer from './Footer';

const styles = () => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
  shopHero: {
    backgroundImage: 'url(' + Shop1 + ')',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '40vh',
    textAlign: 'center',
  },

  shopHeroText: {
    color: '#FFFFFF',
    flexGrow: 1,
    textAlign: 'center',
  },
  linkFix: {
    textDecoration: 'none',
    color: '#FFFFFF',
  },
  media: {
    height: 200,
  },

});

class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      search: '',
    };
  };

  updateSearch(event) {
    this.setState({search: event.target.value});
  }

  componentDidMount() {
    axios.get('api/v1/products', {withCredentials: true}).then((response) => {
      const products = response.data.products;
      this.setState({products: products});
    }).catch((error) => {
      console.log('server error', error);
    });
  }

  render() {
    const {classes} = this.props;
    const filteredProducts = this.state.products.filter(
        (product) => {
          return product.name.toLowerCase().
              indexOf(this.state.search.toLowerCase()) !== -1;
        },
    );

    return (
        <Container className={classes.root}>


          <Box mt={4}>
            <Grid container spacing={3} style={{justifyContent: 'center'}}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h4" style={{marginBottom: '15px'}}>
                  Find what you're looking for
                </Typography>


                <TextField
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                    fullWidth
                    placeholder="Search the shop..."
                    InputProps={{
                      startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon/>
                          </InputAdornment>
                      ),
                    }}
                />


              </Grid>
            </Grid>
          </Box>

          <Grid container spacing={3}>
            {filteredProducts.map((product, i) => {
              return <ProductCard key={i} product={product}/>;
            })}
          </Grid>


          <Footer/>
        </Container>
    );
  }
}

Shop.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Shop);
