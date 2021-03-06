import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {TextField, Button, withStyles} from 'material-ui';
import { Redirect } from 'react-router'
import {Link} from 'react-router-dom';

import { getUser } from "../UserManager";
import {createCopy, getEvaluation, updateCopy, findCopy} from '../../services'

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
  },
  para:{
    textAlign: 'center'
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
      copy : {},
      name: '',
      questions: [],
      responses:[],
      author: '',
      fireRedirect: false
    };
  }

  async componentDidMount() {
   const evaluation = await getEvaluation(this.props.match.params.evaluation_id)
   console.log("e", evaluation)
   this.setState({
           date: evaluation.date,
           evaluation_id: evaluation._id,
           name: evaluation.name,
           questions: evaluation.questions,
           author: this.user.username
       }, async () => {
           let copy = await findCopy(this.state.evaluation_id)
           console.log('hého', Object.keys(copy).length === 0)
           if (Object.keys(copy).length === 0) {
               await createCopy(this.state.evaluation_id, this.state.author)
               copy =await findCopy(this.state.evaluation_id, this.state.author)
           }
       this.setState({copy})
       }
   )
};



  handleNameChange(index, question_id) {
    return (event) => {
      const value = event.target.value
      this.setState(state => {
        const responses = state.responses.slice();
        responses[index] = {content: value, questionId: question_id}
        return {responses}
      })
      console.log(this.state.responses)
    }
  }

  handleSubmit = (event) => {
    console.log('lacopie', this.state.copy);
    updateCopy(this.state.copy._id, this.state.responses);
    this.setState({ fireRedirect: true })
  }

  render() {
    const { from } = this.props.location.state || '/'
    const { fireRedirect } = this.state
    if (this.state.questions){
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
    }else{
      return (
        <div style={styles.para}>
          <p > Malheureusement vous n'avez pas accès à cette évaluation </p>
          <Link to={`/`}>
            Go Home
          </Link>
        </div>
      )
    }
  }
}
export default withStyles(styles)(AnswerQuestion);
