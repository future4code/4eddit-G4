import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';

const PageWrapper = styled.div`
  
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
`

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      password: "",
    }
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    return (
      <PageWrapper>
        <Form>
        <TextField
        required
        id="outlined-name"
        type="text"
        label="Nome"
        name="username"
        value={this.state.name}
        onChange={this.handleNameChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-name"
        type="email"
        name= "email"
        label="Email"
        value={this.state.email}
        onChange={this.handleEmailChange}
        margin="normal"
        variant="outlined"
      />
      <TextField
        required
        id="outlined-name"
        type="password"
        label="Senha"
        name="password"
        value={this.state.password}
        onChange={this.handlePasswordChange}
        margin="normal"
        variant="outlined"
      />
      <Button>Enviar</Button>
        </Form>
      </PageWrapper>
    )
  }

}

export default SignUp