import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Typography, Paper, Button, withStyles} from 'material-ui';

const styles = {};

class ListEvaluation extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  constructor(props){
    super(props);
    this.state = {
      evaluations: []
    };
  }

  componentWillMount(){
    this.fetchEvalutation();
  }

  fetchEvalutation() {
    const URL = '/api/evaluations';
    fetch(URL)
      .then((response) => { return response.json(); })
      .then((evaluations) => {
        this.setState({evaluations})
        console.log('v', this.state.evaluations)
      })
  }

  render() {
    return this.state.evaluations.map((evaluation) => {
            return(
              <Paper elevation={4}>
                <Typography variant="headline" component="h1">
                  {evaluation.name}
                  <Button variant="raised" color="primary">
                    +
                  </Button>
                </Typography>
                <Typography component="p">
                  {evaluation.date}
                </Typography>
              </Paper>
            )
        })
    }
}
export default withStyles(styles)(ListEvaluation);
