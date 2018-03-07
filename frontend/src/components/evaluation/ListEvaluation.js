import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Typography, Button, Paper, withStyles} from 'material-ui';


import ListQuestion from '../question/ListQuestion'
import FormQuestion from '../question/FormQuestion'

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
      })
  }

  handleDeleteEvaluation (evaluation_id) {
    return () => {
      const URL = `/api/evaluations/${evaluation_id}`;
      fetch(
        URL,
        {
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            method: "DELETE",
        })
    }
  }

  render() {
    return this.state.evaluations.map((evaluation) => {
            return(
              <div key={evaluation._id}>
                <Paper elevation={4}>
                  <Typography variant="headline" component="h1">
                    {evaluation.name}
                    <Button onClick={this.handleDeleteEvaluation(evaluation._id)}>
                     Supprimer
                    </Button>
                  </Typography>
                  <ListQuestion questions={evaluation.questions} />
                  <FormQuestion evaluation_id={evaluation._id} />
                </Paper>
              </div>
            )
        })
    }
}
export default withStyles(styles)(ListEvaluation);
