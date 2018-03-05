import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Typography, withStyles} from 'material-ui';

import logo from '../markus.png';

const style = {
  logo: {
    height: 80
  }
};

class Content extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {classes} = this.props;

    return (
      <div className={this.props.className}>
          <img src={logo} className={classes.logo} alt="logo" />
        <Typography variant="headline">Welcome to MarkUs</Typography>
        <Typography variant="subheading">powered by EBM</Typography>
      </div>
    )
  }
}

export default withStyles(style)(Content);
