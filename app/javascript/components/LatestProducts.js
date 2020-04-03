import React, {Component} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import ProductCard from './ProductCard';

class LatestProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latest: [],
    };
  }

  componentDidMount() {
    axios.get('api/v1/latest_products', {withCredentials: true}).
      then((response) => {
        this.setState({
          latest: response.data.latest,
        });
      }).catch((error) => {
      console.log('server error', error);
    });
  }

  render() {
    return (
      <Grid container spacing={3}>
        {this.state.latest.map((product, i) => {
          return (<ProductCard key={i} product={product}/>);
        })}
      </Grid>
    );
  }
}

export default LatestProducts;

