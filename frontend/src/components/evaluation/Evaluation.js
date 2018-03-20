import React, {PureComponent} from 'react';
import {Typography, Button, Paper, withStyles, Switch} from 'material-ui';

import {deleteEvaluation, publishEvaluation} from '../../services'

import {Link} from 'react-router-dom';

const styles = {};

class Evaluation extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      id: props.evaluation._id,
      date: props.evaluation.date,
      name: props.evaluation.name,
      // questions: props.evaluation.questions,
      published: props.evaluation.published,
    };
    console.log(props.evaluation.published)
  }

  handleChange = (event) => {
    this.setState({ published: event.target.checked })
    console.log(event.target.checked )
    publishEvaluation(this.state.id, event.target.checked)
  };

  handleDeleteEvaluation (evaluationId) {
    return () => {
      deleteEvaluation(evaluationId)
    }
  }

  componentDidMount(){
    console.log(this.props.id);
  }

  render() {
    console.log(this.state)
      return(

          <Paper elevation={4}>
            <Typography variant="headline" component="h1">
              {this.state.name}
              <Switch
                checked={this.state.published}
                onChange={this.handleChange}
              />
            </Typography>
            <Button onClick={this.handleDeleteEvaluation(this.state.id)}>
             Supprimer
            </Button>
            <Link to={`/${this.state.id}/answer`}>Repondre a une evaluation</Link>
             |
            <Link to={`/${this.state.id}/addquestions`}>Ajouter des questions</Link>
          </Paper>
      )
  }
}
export default withStyles(styles)(Evaluation);
