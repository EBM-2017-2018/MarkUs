import React, {PureComponent} from 'react';
import {withStyles} from 'material-ui';
import { TableCell, TableRow } from 'material-ui/Table';

const styles = {
  tableCell : {
    textAlign: 'left'
  }
};

class Question extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      content: props.question.content,
      points: props.question.points,
    };
  }


  render() {
      return(
        <TableRow key={this.state.id}>
          <TableCell style={styles.tableCell} >{this.state.content}</TableCell>
        </TableRow>
      )
  }
}

export default withStyles(styles)(Question);
