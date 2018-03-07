import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Typography, withStyles} from 'material-ui';

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

  componentWillMount(){
    this.fetchEvalutation();
  }

  fetchEvalutation() {
    const URL = `/api/evaluations/${this.props.evaluation_id}`;
    fetch(URL)
      .then((response) => { return response.json(); })
      .then((evaluations) => {
        this.setState({
          date: evaluations.date,
          id : evaluations.id,
          name: evaluations.name,
          questions: evaluations.questions
        })
      })
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
