import React, {PureComponent} from 'react';
import {withStyles, Button, Paper} from 'material-ui';

import {saveFeedBack} from '../../services'

const styles = {
  paper: {
    padding: 30,
    marginBottom: 20,
    textAlign: 'center'
  },
  buttons:{
    display:'flex',
    justifyContent:'space-around'
  }
};

class Feedback extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      answers: [],
      index:0
    };
  }

  componentDidUpdate(){
    this.setState({
      answers: this.props.answers
    }, () => console.log('ll', this.props.answers))
  }

  handlePress = (feedbackId, answerId, paperId) => {
    console.log('lentgh', this.state.answers.length);
    console.log('index', this.state.index);
    this.setState({
      index: this.state.index + 1
    }, () => {
      saveFeedBack(feedbackId, answerId, paperId)
      if (this.state.answers.length === this.state.index){
        this.props.callbackNext()
      }
    })
  }

  buttons = (answerId, paperId) => {
    return this.props.feedbacks.map((feedback, index) => (
      <Button key={index} variant="raised" color="primary" onClick={() => this.handlePress(feedback._id, answerId, paperId)}> {feedback.content}</Button>
    ))
  }

  render() {
    const answer = this.state.answers[this.state.index]
      return(
          <div>
            {answer && (
                <div>
                   <Paper style={styles.paper} >
                      <div > {answer.answers.content} </div>
                    </Paper>
                    <br />
                    <div style={styles.buttons}>
                      {this.buttons(answer.answers._id, answer.paperId)}
                    </div>

                </div>
              )
            }
          </div>
      )
  }
}

export default withStyles(styles)(Feedback);
