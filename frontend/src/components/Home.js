import React, {PureComponent} from 'react';
import {withStyles} from 'material-ui';

import Student from './Student';
import Admin from './Admin';
import { getUser } from "./UserManager";

const style = {};


class Home extends PureComponent {

  user = getUser();

  render() {
    let content;
    console.log('kk', this.user)
    if (this.user.role === "administrateur" || this.user.role === "intervenant") {
      content = <Admin />
    }else if (this.user.role === "etudiant"){
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
