import React, {PureComponent} from 'react';
import {withStyles, Typography, Button} from 'material-ui';
import {Link} from 'react-router-dom';

import ListEvaluation from './evaluation/ListEvaluation';

const style = {
  logo: {
    height: 80
  },
  header:{
    display: 'flex',
    justifyContent: 'space-between'
  }
};

class Admin extends PureComponent {

  render() {
    return (
      <div>
        <div style={style.header} >
          <Typography variant="headline" component="h1">
            Liste des évaluations
          </Typography>
          <Button variant="raised" color="secondary">
            <Link to="/evaluations/new">Créer une évaluation</Link>
          </Button>

        </div>
        <br />
        <ListEvaluation />
      </div>
    );
  }
}
export default withStyles(style)(Admin);
