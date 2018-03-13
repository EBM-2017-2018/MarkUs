import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {TextField, Button, Typography, withStyles} from 'material-ui';
import { Redirect } from 'react-router'

import {createCopy, getEvaluation, updateCopy} from '../../services'


const styles = {};

class AnswerQuestion extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };


  constructor(props){
    super(props);
    this.state = {
      date: '',
      evaluation_id : '',
      copy_id : '',
      name: '',
      questions: [],
      responses:[],
      author: 'auteur Par defaut',
      fireRedirect: false
    };
  }

  async componentDidMount(){
    const evaluation = await getEvaluation(this.props.match.params.evaluation_id)
    console.log("e", evaluation)
    this.setState({
      date: evaluation.date,
      copy_id : '',
      evaluation_id : evaluation.id,
      name: evaluation.name,
      questions: evaluation.questions
    })
    createCopy(evaluation, this.state.author)
      .then(response => {
        this.setState({
          copy_id: response._id
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

  handleSubmit = (event) => {
    updateCopy(this.state.copy_id, this.state.responses);
    this.setState({ fireRedirect: true })
  }

  render() {
    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state
    
    return (
      <div>
        <form action="/evaluations">
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
        {fireRedirect && (
          <Redirect to={from || '/evaluations'}/>
        )}
      </div>
      )
    }
}
export default withStyles(styles)(AnswerQuestion);
