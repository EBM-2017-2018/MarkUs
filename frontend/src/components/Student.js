import React, {PureComponent} from 'react';
import {withStyles, Typography, TextField } from 'material-ui';
import { Redirect } from 'react-router'


const styles = {
  mainRow:{
    textAlign: 'center',
  }
};

class Student extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      code: '',
      fireRedirect: false
    }
    this.handleCodeChange = this.handleCodeChange.bind(this);
  }
  handleCodeChange(event){
    this.setState({code: (event.target.value)});
  }

  handleCodeSubmit = (e) => {
    e.preventDefault()
    this.setState({ fireRedirect: true })
  }

  render() {
    return (
      <div>
        <div style={styles.mainRow} className='yolo'>
          <Typography variant="headline" component="h1">
            Participer à une évaluation
          </Typography>
          <form onSubmit={this.handleCodeSubmit}>
            <TextField name="code" label="Code de l'évaluation" value={this.state.code} onChange={this.handleCodeChange}/>
            <button type="submit">Go</button>
          </form>
          {this.state.fireRedirect && (
            <Redirect to={'/' + this.state.code + '/answer'}/>
          )}
        </div>
        <div>
          {/* TODO LISTCOPY */}
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Student);
