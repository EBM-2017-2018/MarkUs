import React, {PureComponent} from 'react';
import {withStyles, Button} from 'material-ui';

const styles = {
  tableCell : {
    textAlign: 'center'
  }
};

class Feedback extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      answerId: this.props.answerIds,
      comments: []
    };
  }

  componentwillMount(){
    // Ge comments .. this.setState
  }

  handlePress = () => {
    // SaveFeedBack(this.state.answerId, event.value)
    // this.props.callbackfunction
  }
  render() {
      return(
          <div>
          <Button variant="raised" color="primary" onClick={this.handlePress}> Nul </Button>
          <Button variant="raised" color="primary" onClick={this.handlePress}> Moyen </Button>
          <Button variant="raised" color="primary" onClick={this.handlePress}> Bien </Button>
          </div>
      )
  }
}

export default withStyles(styles)(Feedback);
