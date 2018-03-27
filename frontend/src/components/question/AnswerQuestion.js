import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {TextField, Button, withStyles} from 'material-ui';
import { Redirect } from 'react-router'

import { getUser } from "../UserManager";
import {createCopy, getEvaluation, updateCopy} from '../../services'

const styles = {
  title:{
    display: 'flex',
    justifyContent: 'space-between'
  },
  answer:{
    marginBottom: 50,
  },
  question:{
    fontWeight:'bold'
  }
};

class AnswerQuestion extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  user = getUser()

  constructor(props){
    super(props);
    this.state = {
      date: '',
      evaluation_id : '',
      copy_id : '',
      name: '',
      questions: [],
      responses:[],
      author: this.user.id,
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
    // TODO CREATE OR FIND COPY
    createCopy(evaluation, this.state.author)
      .then(response => {
        this.setState({
          copy_id: response._id
        })
      })
    console.log('lllaaa', this.state.questions);
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
              <div style={styles.answer}>
                <div key={index} style={styles.title}>
                  <div>Question {index}</div>
                  <div style={styles.question} >{question.content} ?</div>
                  <div>{question.points} points</div>
                </div>
                <TextField fullWidth style={styles.field} name="content" onChange={this.handleNameChange(index, question._id)}/>
              </div>
            )
          })}
          <Button variant="raised" color="secondary" onClick={this.handleSubmit}>
            Enregistrer sa copie
          </Button>
        </form>
        {fireRedirect && (
          <Redirect to={from || '/'}/>
        )}
      </div>
      )
    }
}
export default withStyles(styles)(AnswerQuestion);
