import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Typography, withStyles} from 'material-ui';

import {getEvaluation} from '../../services'

const styles = {};

class ListQuestion extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };


  constructor(props){
    super(props);
    this.state = {
      date: '',
      id : '',
      name: '',
      questions: []
    };
  }

  async componentWillMount(){
    const evaluation = await getEvaluation(this.props.evaluation_id)
    this.setState({
      date: evaluation.date,
      id : evaluation.id,
      name: evaluation.name,
      questions: evaluation.questions
    })
    console.log('e',evaluation);
  }



  render() {
    return (this.state.questions.map((question, index) => {
            return(
              <div key={index}>
                <Typography component="p">
                  {question.content} ? - {question.points} points
                </Typography>
              </div>
            )
        })
      )
    }
}
export default withStyles(styles)(ListQuestion);
