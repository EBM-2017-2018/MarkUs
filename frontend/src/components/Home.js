import React, {PureComponent} from 'react';
import {withStyles} from 'material-ui';

import Student from './Student';
import Admin from './Admin';

const user = JSON.parse(sessionStorage.getItem('user'));

const style = {};

class Home extends PureComponent {

  render() {
    let content;
    if (user.role === "administrateur" || user.role === "intervenant") {
      content = <Admin />
    }else if (user.role === "etudiant"){
      content = <Student />
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}
export default withStyles(style)(Home);
