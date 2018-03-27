import React, {PureComponent} from 'react';
import { withStyles, Button, Paper, Typography } from 'material-ui';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';

import Feedback from './Feedback'
import {getEvaluation, getAnswer} from '../../services'


const styles = {
  root: {
    width: '90%',
  },
  button: {
  },
  instructions: {
    marginTop: 50,
    marginBottom: 50,
  },
};



class StepsFeedback extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      activeStep: 0,
      evaluation: {},
      currentQuestion: {},
      answers: [],
      questions: []
    };
  }

  async componentDidMount(){
    console.log('aa')
    const evaluation = await getEvaluation(this.props.match.params.evaluation_id)
    this.setState({
      evaluation: evaluation,
      currentQuestion: evaluation.questions[0],
      questions: evaluation.questions
    })
  }

  getSteps() {
    return this.state.questions.map((q) => {
      return q.content
    })
  }


  getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <Feedback answerId='' />
        )
      case 1:
        return (
          <Feedback answerId='' />
        )
      default:
        return 'Unknown step';
    }
  }


  handleNext = () => {
    this.setState({
      activeStep: this.state.activeStep + 1,
      currentQuestion: this.state.questions[this.state.activeStep]
    })
    getAnswer(this.state.evaluation._id, this.state.currentQuestion._id)
      .then( (response) => {
        this.setState({
          answers: response
        })
      })
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
      currentQuestion: this.state.questions[this.state.activeStep]
    })
    getAnswer(this.state.evaluation._id, this.state.currentQuestion._id)
      .then( (response) => {
        this.setState({
          answers: response
        })
      })
  };

  goHome = () => {
    // TODO
   }

      render() {
       const { classes } = this.props;
       const steps = this.getSteps();
       const { activeStep } = this.state;

       return (
         <div className={classes.root}>
           <Stepper activeStep={activeStep} orientation="vertical">
             {steps.map((label, index) => {
               return (
                 <Step key={label}>
                   <StepLabel>{label}</StepLabel>
                   <StepContent>
                     {this.getStepContent(index)}
                     <div className={classes.actionsContainer}>
                       <div>
                         <Button
                           variant="raised"
                           color="primary"
                           onClick={this.handleNext}
                           className={classes.button}
                         >
                           {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                         </Button>
                       </div>
                     </div>
                   </StepContent>
                 </Step>
               );
             })}
           </Stepper>
           {activeStep === steps.length && (
             <Paper square elevation={0} className={classes.resetContainer}>
               <Typography>Evaluation créer avec succes</Typography>
               <Button onClick={this.goHome} className={classes.button}>
                 Retour à la page d'accueil
               </Button>
             </Paper>
           )}
         </div>
       );
     }

}
export default withStyles(styles)(StepsFeedback);
