import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Typography, TextField, Button, withStyles} from 'material-ui';

import ListQuestion from './ListQuestion';
import {createQuestion} from '../../services'

const styles = {};

class FormEvaluation extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  constructor(props){
    super(props);
    this.state = {
      content: '',
      points: 0
    };

    this.handleContentChange = this.handleContentChange.bind(this);
    this.handlePointsChange = this.handlePointsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    createQuestion(this.props.match.params.evaluation_id, this.state.content, this.state.points)
  }

  handleContentChange(event) {
    this.setState({content: (event.target.value)});
  }
  handlePointsChange(event) {
    this.setState({points: (event.target.value)});
  }

  render() {
    return (
      <div>
        <Typography variant="headline">Ajoutez des questions à l'évaluation</Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField name="content" label="Question" value={this.state.content} onChange={this.handleContentChange}/>
          <TextField name="points" type="number" label="Nb de points" value={this.state.points} onChange={this.handlePointsChange}/>
          <Button variant="raised" color="secondary" onClick={this.handleSubmit}>
            Créer
          </Button>
        </form>
        <ListQuestion evaluation_id={this.props.match.params.evaluation_id}/>
      </div>
    );
  }
}
export default withStyles(styles)(FormEvaluation);
