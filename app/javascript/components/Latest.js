import React, {Component} from 'react';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import ProductCard from './ProductCard';

class Latest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latest: [],
    };
  }

  componentDidMount() {
    axios.get('api/v1/latest', {withCredentials: true}).then((response) => {
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

export default Latest;

