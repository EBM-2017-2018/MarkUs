import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {TextField, Button, withStyles} from 'material-ui';

import {createEvaluation} from '../../services'

const styles = {};

class FormEvaluation extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  constructor(props){
    super(props);
    this.state = {
      name: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    createEvaluation(this.state.name)
      .then(() => {
        this.setState({name: ''})
      })
  }

  handleNameChange(event) {
    this.setState({name: (event.target.value)});
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <TextField name="name" label="Titre de l'évaluation" value={this.state.name} onChange={this.handleNameChange}/>
          <Button variant="raised" color="secondary" onClick={this.handleSubmit}>
            Créer
          </Button>
        </form>
    );
  }
}
export default withStyles(styles)(FormEvaluation);
