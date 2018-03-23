import React, {PureComponent} from 'react';
import {withStyles, Switch, Button} from 'material-ui';
import { TableCell, TableRow } from 'material-ui/Table';

import {deleteEvaluation, publishEvaluation} from '../../services'

import {Link} from 'react-router-dom';

const styles = {
  tableCell : {
    textAlign: 'center'
  }
};

class Evaluation extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      id: props.evaluation._id,
      date: props.evaluation.date,
      name: props.evaluation.name,
      groupClass: props.evaluation.groupClass,
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

  render() {
    console.log(this.state)
      return(
        <TableRow key={this.state.id}>
          <TableCell style={styles.tableCell} >{this.state.name}</TableCell>
          <TableCell style={styles.tableCell} >{this.state.groupClass}</TableCell>
          <TableCell style={styles.tableCell} >
            https://markus.ebm.nymous.io/{this.state.id}/answer
          </TableCell>
          <TableCell style={styles.tableCell}>
            <Link to={`/${this.state.id}/addquestions`}>
              + Questions
            </Link>
          </TableCell>

          <TableCell style={styles.tableCell}>
            <Switch
              checked={this.state.published}
              onChange={this.handleChange}
            />
          </TableCell>

          <TableCell style={styles.tableCell}>
            <Button variant="raised" color="secondary" onClick={this.handleDeleteEvaluation(this.state.id)}>
             Supprimer
            </Button>
          </TableCell>
        </TableRow>
      )
  }
}
export default withStyles(styles)(Evaluation);
