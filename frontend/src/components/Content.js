import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui';
import {Route, withRouter} from 'react-router-dom';

import Home from './Home';
import StepsEvaluation from './evaluation/StepsEvaluation';
import AnswerQuestion from './question/AnswerQuestion';
import FormQuestion from './question/FormQuestion';
import {getUser} from '../services'

const style = {};

class Content extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired
  };

  constructor(props){
    super(props);
    this.state = {
      user: null
    };
  }

  static defaultProps = {
    className: ''
  };

  async componentWillMount(){
    //TODO Attention premier login, probleme de synchro, rien dans home/sessionStorage
    const user = await getUser()
    this.setState({user})
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  render() {
    return (
      <div className={this.props.className}>
        <Route exact path="/" component={Home}/>
        <Route path="/evaluations/new" component={StepsEvaluation}/>
        <Route path="/:evaluation_id/addquestions" component={FormQuestion}/>
        <Route path="/:evaluation_id/answer" component={AnswerQuestion}/>
      </div>
    )
  }
}

export default withRouter(withStyles(style)(Content));
