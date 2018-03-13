import React, {PureComponent} from 'react';
import {withStyles, Typography} from 'material-ui';

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
      </div>
    );
  }
}
export default withStyles(style)(Home);
