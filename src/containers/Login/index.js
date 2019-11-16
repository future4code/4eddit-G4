import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { loginAuth } from "../../actions/auth";
import { routes } from "../Router";

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

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };



  handleOnSubmit = () => {
    const { email, password } = this.state;
    this.props.doLogin(email, password);
  };


  render() {
    const { email, password } = this.state;
    return (
        <FormStyled onSubmit={this.handleOnSubmit}>
          <TextField
            required
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            variant="outlined"
            value={email}
          />
          <TextField
            required
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Password"
            variant="outlined"
            value={password}
          />
          <Button 
          type="submit"
          variant="contained">
            Entrar
          </Button>
          <Button
            variant="contained"
            onClick={this.props.goToSignUpPage}>
              Cadastrar 
          </Button>
        </FormStyled>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToSignUpPage: () => dispatch(push(routes.signup)),
    doLogin: (email, password) => dispatch(loginAuth(email, password)),
  };
}



export default connect(
  null,
  mapDispatchToProps
)(Login);

