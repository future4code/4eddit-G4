import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const FormStyled = styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: " ",
      password: " ",
    };
  }


  onChangeEmail = (event) => {
    this.setState({ email: event.target.value })
    console.log("email")
  }

  onChangePassword = (event) => {
    this.setState({ password: event.target.value })
    console.log("senha")
  }


  handleSubmit = event => {
    event.preventDefault();
    /*this.props.(this.state.email, 
        this.state.password)*/
    alert("Enviado!");
  };



  render() {

    return (

      <div>
        <FormStyled>
          <TextField
            required
            id="emailid"
            type="email"
            label="Email"
            name="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
            margin="normal"
            variant="outlined"
          />
          <TextField
            required
            id="passwordid"
            type="email"
            label="Password"
            name="password"
            value={this.state.password}
            onChange={this.onChangePassword}
            margin="normal"
            variant="outlined"
          />
          <Button variant="contained" >Entrar</Button>
          <Button variant="contained">Cadastrar </Button>
        </FormStyled>
      </div>
    )
  }
}
/*
onClick={props.goToApplication}
*/

function mapDispatchToProps(dispatch) {
  return {
    goToApplication: () => dispatch(push("/signup")),

  };
}

export default connect(
  null,
  mapDispatchToProps
)(Login);
