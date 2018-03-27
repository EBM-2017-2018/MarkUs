import React, {PureComponent} from 'react';
import {withStyles, Switch, Button, Icon} from 'material-ui';
import { TableCell, TableRow } from 'material-ui/Table';

import {publishEvaluation, deleteEvaluation} from '../../services'

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
      promo: props.evaluation.promo,
      questions: props.evaluation.questions,
      published: props.evaluation.published,
    };
  }

  handleChange = (event) => {
    this.setState({ published: event.target.checked })
    console.log(event.target.checked )
    publishEvaluation(this.state.id, event.target.checked)
  };

  handleDeleteEvaluation = () => {
    deleteEvaluation(this.state.id)
    console.log(this.props.index);
    this.props.updateListState(this.props.index)
  }


  render() {
      return(
        <TableRow>
          <TableCell style={styles.tableCell} >{this.state.name} <b>{this.state.questions.length} </b></TableCell>
          <TableCell style={styles.tableCell} >{this.state.promo}</TableCell>
          <TableCell style={styles.tableCell} >
            {this.state.id}
          </TableCell>

          <TableCell style={styles.tableCell} >
            <Link to={`/${this.state.id}/feedback`}>
              <Icon color="action">
                check
              </Icon>
            </Link>
          </TableCell>

          <TableCell style={styles.tableCell}>
            <Link to={`/${this.state.id}/addquestions`}>
              <Icon color="action">
                add_circle
              </Icon>
            </Link>
          </TableCell>

          <TableCell style={styles.tableCell}>
            <Switch
              checked={this.state.published}
              onChange={this.handleChange}
            />
          </TableCell>

          <TableCell style={styles.tableCell}>
            <Button variant="raised" color="secondary" onClick={this.handleDeleteEvaluation}>
              <Icon color="action">
                close
              </Icon>
            </Button>
          </TableCell>
        </TableRow>
      )
  }
}
export default withStyles(styles)(Evaluation);
