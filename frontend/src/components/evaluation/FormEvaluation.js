import React, {PureComponent} from 'react';
import {TextField} from 'material-ui';
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl} from 'material-ui/Form';
import Select from 'material-ui/Select';
import { getUser } from "../UserManager";

import {createEvaluation, getPromos} from '../../services'

const styles = {
  input:{
    width: 400
  },
  form:{
    textAlign: 'left'
  }
};

class FormEvaluation extends PureComponent {

  constructor(props){
    super(props);
    this.state = {
      name: '',
      promo: '',
      promos: [],
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  user = getUser();

  async componentDidMount(){
    let promos = await getPromos()
    promos = promos.promotions
    console.log('p', promos)
    this.setState({promos})
  }

  handleSubmit (){
    console.log('p', this.state.promo);
    return createEvaluation(this.state.name, this.user.username, this.state.promo);
  }


  handleNameChange(event) {
    this.setState({name: (event.target.value)});
  }

  handlePromoChange = event => {
    this.setState({ promo: event.target.value });
  };

  render() {

    return (
          <div>
            <TextField name="name" style={styles.input} label="Titre de l'évaluation" value={this.state.name} onChange={this.handleNameChange}/>
            <br />
            <FormControl>
              <InputLabel htmlFor="promo">Promo</InputLabel>
              <Select
                value={this.state.promo}
                onChange={this.handlePromoChange}
                input={<Input name="promotion" id="promo" />}
                style={styles.input}
              >
                <MenuItem value="">
                  <em>Choisir une promotion</em>
                </MenuItem>
                {this.state.promos.map(p => {
                  return (
                    <MenuItem value={p.nomPromo} key={p._id} >{p.nomPromo}</MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <br /><br />
          </div>
    );
  }
}
// I deleted the WITHSTYLES NEED HELP
export default FormEvaluation;
