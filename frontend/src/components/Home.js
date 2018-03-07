import React, {PureComponent} from 'react';
import {withStyles, Typography} from 'material-ui';
import {Link} from 'react-router-dom';

const style = {
  logo: {
    height: 80
  }
};

class Home extends PureComponent {

  render() {
    return (
      <div>
        <Typography variant="headline">Welcome to MarkUs</Typography>
        <Link to="/evaluations/new">Créer une évaluation</Link>
        <br/>
        <Link to="/evaluations">Liste des évaluations</Link>
      </div>
    );
  }
}
export default withStyles(style)(Home);
