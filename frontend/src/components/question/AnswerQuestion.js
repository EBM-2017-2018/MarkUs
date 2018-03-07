import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {TextField, Button, Typography, withStyles} from 'material-ui';


const styles = {};

class AnswerQuestion extends PureComponent {
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
    const URL = `/api/evaluations/${this.props.match.params.evaluation_id}`;
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

  handleSubmit(){

  }

  render() {
    return (
      <form>
        {this.state.questions.map((question, index) => {
          return(
            <div key={index}>
              <Typography component="p">
                {question.content} ? - {question.points} points
              </Typography>
              <TextField name="content"/>
            </div>
          )
        })}
        <Button variant="raised" color="secondary" onClick={this.handleSubmit}>
          Enregistrer sa copie
        </Button>
      </form>
      )
    }
}
export default withStyles(styles)(AnswerQuestion);
