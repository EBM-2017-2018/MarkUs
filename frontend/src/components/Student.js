import React, {PureComponent} from 'react';
import {withStyles, Typography} from 'material-ui';
import {Link} from 'react-router-dom';

const style = {
  logo: {
    height: 80
  }
};

class Student extends PureComponent {

  render() {
    return (
      <div>
        <Typography variant="headline" component="h1">
          Eleve
        </Typography>
        <Link to="/evaluations">Liste des évaluations</Link>
      </div>
    );
  }
}
export default withStyles(style)(Student);
