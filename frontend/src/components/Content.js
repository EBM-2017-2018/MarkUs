import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui';
import {Route, withRouter} from 'react-router-dom';

import Home from './Home';
import FormEvaluation from './evaluation/FormEvaluation';
import ListEvaluation from './evaluation/ListEvaluation';
import AnswerQuestion from './question/AnswerQuestion';
import FormQuestion from './question/FormQuestion';

const style = {};

class Content extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired
  };

  static defaultProps = {
    className: ''
  };

  render() {
    return (
      <div className={this.props.className}>
        <Route exact path="/" component={Home}/>
        <Route path="/evaluations/new" component={FormEvaluation}/>
        <Route path="/evaluations" component={ListEvaluation}/>
        <Route path="/:evaluation_id/addquestions" component={FormQuestion}/>
        <Route path="/:evaluation_id/answer" component={AnswerQuestion}/>
      </div>
    )
  }
}

export default withRouter(withStyles(style)(Content));
