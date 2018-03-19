import React, {PureComponent} from 'react';
import {withStyles, Typography} from 'material-ui';

import Student from './Student';
import Admin from './Admin';

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
        <Student />
        <br /> ----------------
        <Admin />
      </div>
    );
  }
}
export default withStyles(style)(Home);
