import React, {PureComponent} from 'react';
import { TextField, Button, Paper} from 'material-ui';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import {createQuestion} from '../../services'
import Question  from './Question'

const styles = {
  question:{
    width: 500
  },
  points:{
    width:100,
  },
  form:{
    display: 'flex',
    justifyContent: 'space-around'
  },
  submitButton:{
    textAlign: 'center'
  }
};

class FormEvaluation extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      content: '',
      points: 0,
      //format: ''
      evaluation_id: null,
      questions: []
    };

    this.handleContentChange = this.handleContentChange.bind(this);
    this.handlePointsChange = this.handlePointsChange.bind(this);
  }

  handleSubmit = (evalId) => {
    console.log('yolo')
    this.state.questions.map(q => {
        return createQuestion(evalId, q.content, q.points)
    })
    //this.props.match.params.evaluation_id
    //createQuestions(evalId, this.state.questions)

  }

  addQuestion = () => {

    const question = {
      content: this.state.content,
      points: this.state.points
    }

    this.setState(state => {
      const questions = state.questions.slice();
      questions.push(question)
      return {
        content: '',
        points: 0,
        questions: questions}
    })
  }



  handleContentChange(event) {
    this.setState({content: (event.target.value)});
  }
  handlePointsChange(event) {
    this.setState({points: (event.target.value)});
  }

  render() {
    let submitButton;
    let evaluation_id
    this.props.match ? evaluation_id = this.props.match.params.evaluation_id : evaluation_id = null;
    if (evaluation_id) {
      submitButton = (
        <Button style={styles.submitButton} variant="raised" color="secondary" onClick={this.handleSubmit}>
            Enregistrer
        </Button>
      )
    }
    return (
      <div>
        <form style={styles.form}>
          <TextField style={styles.question} name="content" label="Question" value={this.state.content} onChange={this.handleContentChange}/>
          <TextField style={styles.points} name="points" type="number" label="Nb de points" value={this.state.points} onChange={this.handlePointsChange}/>
          <Button variant="raised" color="secondary" onClick={this.addQuestion}>
            Ajouter
          </Button>
        </form>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={styles.tableCell}>Question</TableCell>
                  <TableCell style={styles.tableCell}>Nombre de points</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.questions.map((q, index) => {
                  return (
                    <Question key={index} question={q} />
                  );
                })}
              </TableBody>
            </Table>
            { submitButton }
          </Paper>
      </div>
    );
  }
}

// I deleted the WITHSTYLES NEED HELP
export default FormEvaluation;
