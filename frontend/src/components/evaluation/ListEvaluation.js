import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui';

import Evaluation from './Evaluation';
import {getEvaluations} from '../../services'

const styles = {};

class ListEvaluation extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  constructor(props){
    super(props);
    this.state = {
      evaluations: []
    };
  }

  componentDidMount(){
    this.updateEvalutation()
  }
  componentWillUpdate(){
    this.updateEvalutation()
  }

  updateEvalutation() {
    getEvaluations()
    .then((evaluations) => {
      this.setState({evaluations})
    })
  }

  render() {
    return this.state.evaluations.map((evaluation) => {
          return(
            <div key={evaluation._id}>
              <Evaluation evaluation={evaluation}/>
            </div>
          )
      })
    }
}
export default withStyles(styles)(ListEvaluation);
