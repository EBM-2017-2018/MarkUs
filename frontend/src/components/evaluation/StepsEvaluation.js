import React, {PureComponent} from 'react';
import { withStyles, Button, Paper, Typography } from 'material-ui';
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import {Link} from 'react-router-dom';

import FormEvaluation from './FormEvaluation';
import FormQuestion from '../question/FormQuestion';


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
  finish:{
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30
  }
};

class StepsEvaluation extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      activeStep: 0,
      evalId: ''
    };
  }

  getSteps() {
    return ['Créer une évaluation', 'Ajouter des questions'];
  }


  getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <FormEvaluation ref="evaluation"/>
        )
      case 1:
        return (
          <FormQuestion ref="question"/>
        )
      default:
        return 'Unknown step';
    }
  }


  handleNext = () => {
    if (this.state.activeStep === 0){
       this.refs.evaluation.handleSubmit()
        .then(
          (r) => {
            this.setState({evalId: r._id})
          }
        )
    }
    if (this.state.activeStep === 1){
       this.refs.question.handleSubmit(this.state.evalId)
    }
    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: this.state.activeStep - 1,
    });
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
                       <div style={styles.finish}>
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
                 <Link to={`/`}>
                  Home
                 </Link>
               </Button>
             </Paper>
           )}
         </div>
       );
     }

}
export default withStyles(styles)(StepsEvaluation);
