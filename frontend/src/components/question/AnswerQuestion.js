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
      questions: [],
      responses:[],
      author: 'autheur Par defaut'
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


  handleNameChange(index, question_id) {
    return (event) => {
      const value = event.target.value
      this.setState(state => {
        const responses = state.responses.slice();
        console.log('e', value)
        responses[index] = {content: value, questionId: question_id}
        return {responses}
      })
      console.log(this.state.responses)
    }
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
              <TextField name="content" onChange={this.handleNameChange(index, question._id)}/>
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
