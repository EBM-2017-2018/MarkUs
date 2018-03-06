import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Typography, withStyles} from 'material-ui';

const styles = {};

class ListQuestion extends PureComponent {
  static propTypes = {
    classes: PropTypes.object.isRequired
  };

  constructor(props){
    super(props);
    this.state = {
      questions: []
    };
    console.log(this.props)
  }



  render() {
    return this.props.questions.map((question) => {
            return(
              <Typography component="p">
                {question.content} ? - {question.points} points
              </Typography>
            )
        })
    }
}
export default withStyles(styles)(ListQuestion);
