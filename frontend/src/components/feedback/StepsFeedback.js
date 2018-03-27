import React, {PureComponent} from 'react';
import { withStyles, Button, Paper } from 'material-ui';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';

import Feedback from './Feedback'
import {getEvaluation, getAnswer, createFeedback, getFeedbacks} from '../../services'


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
      feedbacks:[],
      currentAnswers: [],
      questions: []
    };
  }

  async componentDidMount(){
    const evaluation = await getEvaluation(this.props.match.params.evaluation_id)
    this.setState({
      evaluation: evaluation,
      currentQuestion: evaluation.questions[0],
      questions: evaluation.questions
    })

    this.getFeedbacks2()
    const answers = await getAnswer(this.state.evaluation._id, this.state.currentQuestion._id)
    this.setState({currentAnswers: answers})
  }

  getSteps() {
    return this.state.questions.map((q) => {
      return q.content
    })
  }

  async getFeedbacks2(){
    let feedbacks = await getFeedbacks(this.state.evaluation._id, this.state.currentQuestion._id)
    if (feedbacks.length === 0) {
      await createFeedback(this.state.evaluation._id, this.state.currentQuestion._id, 0, 'Nul')
      await createFeedback(this.state.evaluation._id, this.state.currentQuestion._id, 1, 'Moyen')
      await createFeedback(this.state.evaluation._id, this.state.currentQuestion._id, 2, 'Bon')
      feedbacks = await getFeedbacks(this.state.evaluation._id, this.state.currentQuestion._id)
    }
    this.setState({feedbacks})
  }


  getStepContent(step) {
    if (this.state.feedbacks && this.state.currentAnswers){
      console.log('aaa', this.state.currentAnswers);
      return <Feedback callbackNext={this.handleNext} feedbacks={this.state.feedbacks} answers={this.state.currentAnswers}/>
    }
  }



  handleNext = () => {
    console.log(this.state.question)
    this.setState({
      activeStep: this.state.activeStep + 1,
      currentQuestion: this.state.questions[this.state.activeStep+1]
    },()=>{
      if(this.state.activeStep !== this.state.questions.length){
        getAnswer(this.state.evaluation._id, this.state.currentQuestion._id)
          .then( (response) => {
            this.setState({
              currentAnswers: response
            })
          })
        this.getFeedbacks2()
      }
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
          currentAnswers: response
        })
      })
    this.getFeedbacks2()
  };

  goHome = () => {
    // TODO
    alert('TODO #LOUIS GRIZZ CLICKER')
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
                     {this.state.feedbacks && this.getStepContent(index)}
                   </StepContent>
                 </Step>
               );
             })}
           </Stepper>
           {activeStep === steps.length && (
             <Paper square elevation={0} className={classes.resetContainer}>
               <Button onClick={this.goHome} className={classes.button}>
                Go home
               </Button>
             </Paper>
           )}
         </div>
       );
     }

}
export default withStyles(styles)(StepsFeedback);
