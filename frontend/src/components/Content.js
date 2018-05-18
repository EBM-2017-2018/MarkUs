import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui';
import {Route, withRouter} from 'react-router-dom';

import Home from './Home';
import StepsEvaluation from './evaluation/StepsEvaluation';
import AnswerQuestion from './question/AnswerQuestion';
import FormQuestion from './question/FormQuestion';
import StepsFeedback from './feedback/StepsFeedback';


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
        <Route path="/evaluations/new" component={StepsEvaluation}/>
        <Route path="/:evaluation_id/addquestions" component={FormQuestion}/>
        <Route path="/:evaluation_id/answer" component={AnswerQuestion}/>
        <Route path="/:evaluation_id/feedback" component={StepsFeedback}/>
      </div>
    )
  }
}

export default withRouter(withStyles(style)(Content));
