import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withStyles, Paper} from 'material-ui';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import Evaluation from './Evaluation';
import {getEvaluations} from '../../services'

const styles = {
  tableCell : {
    textAlign: 'center'
  }
};

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

  componentDidMount(){
    this.updateEvalutation()
  }

  updateEvalutation() {
    getEvaluations()
    .then((evaluations) => {
      this.setState({evaluations})
    })
  }

  render() {
    return(
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={styles.tableCell}>Titre</TableCell>
              <TableCell style={styles.tableCell}>Groupe</TableCell>
              <TableCell style={styles.tableCell}>Partager</TableCell>
              <TableCell style={styles.tableCell} numeric>Modifier</TableCell>
              <TableCell style={styles.tableCell} numeric>Publique</TableCell>
              <TableCell style={styles.tableCell} numeric>Supprimer</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.evaluations.map(e => {
              return (
                <Evaluation evaluation={e} />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    )}
}
export default withStyles(styles)(ListEvaluation);
