import React, {Component} from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {loginAuth} from "../../actions/auth";

const FormStyled= styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

class Login extends React.Component  {
   
    constructor(props) {
      super(props);
      this.state = {
          email:" ",
          password: " ",
        };
}   

  handleFieldChange = event => {
     this.setState({
        [event.target.name]: event.target.value
          });
    };
        


  onClickLogin = () => {
    const { email, password } = this.state;

    this.props.doLogin(email, password);
  };


render(props) {
const { email, password } = this.state;

        return ( 
            
            <div>
                <FormStyled>
                    <TextField
                      onChange={this.handleFieldChange}
                      name="email"
                      type="email"
                      label="E-mail"
                      value={email}
                    />

                    <TextField
                        onChange={this.handleFieldChange}
                        name="password"
                        type="password"
                        label="Password"
                        value={password}
                    />

                    <Button variant="contained" onClick={this.onClickLogin} >Entrar</Button>
                       
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
      goToApplication:  () => dispatch(push("/signup")),
      doLogin: (email, password) => dispatch(loginAuth(email, password))

    };
  }

  

  export default connect(
    null,
    mapDispatchToProps
  )(Login);

  