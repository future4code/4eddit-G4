import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { createNewUser } from "../../actions/posts"

const PageWrapper = styled.div``

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
      username: "",
      email: "",
      password: "",
    }
  }

  handleNameChange = (event) => {
    this.setState({
      username: event.target.value
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    });
  };

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    });
  };

  handleOnSubmit = event => {
    const { email, password, username } = this.state
    event.preventDefault();
    this.props.createNewUser(email, password, username);
  };
  
  render() {
    return (
      <PageWrapper>
        <Form onSubmit={this.handleOnSubmit}>
          <TextField
          required
          id="outlined-name"
          type="text"
          label="Nome"
          value={this.state.username}
          onChange={this.handleNameChange}
          margin="normal"
          variant="outlined"
          name="username"
          />
          <TextField
          required
          id="outlined-name"
          type="email"
          label="Email"
          value={this.state.email}
          onChange={this.handleEmailChange}
          margin="normal"
          variant="outlined"
          name="email"
          />
          <TextField
          required
          id="outlined-name"
          type="password"
          label="Senha"
          value={this.state.password}
          onChange={this.handlePasswordChange}
          margin="normal"
          variant="outlined"
          name="password"
          />
        <Button type="submit">Enviar</Button>
      </Form>
      </PageWrapper>
    );
  }
}


function mapDispatchToProps(dispatch){
  return {
    createNewUser: (email, password, username) => dispatch(createNewUser(email, password, username)),
   }
 };

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
