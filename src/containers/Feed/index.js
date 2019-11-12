import React, {Component} from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const FormStyled= styled.form`
  width: 100%;
  height: 100vh;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;


class Feed extends React.Component  {
   
    constructor(props) {
      super(props);
      this.state = {
          post:" ",

        };

}   


handleInputChange = event => {
    /*const { name, value } = event.target;
    this.setState({ [name]: value });*/
 };

     handleSubmit = event => {
            event.preventDefault();
            /*this.props.(this.state.email, 
                this.state.password)*/
            alert("Enviado!");
          };



render(props) {

        return ( 
            
            <div>
                <FormStyled>
                    <TextField
                        id="postid"
                        label="Post"
                        name= "post"
                        value={this.state.post}
                        onChange={this.handleInputChange}
                        margin="normal"
                    />

                    <Button variant="contained">Postar</Button>
                        
                   
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

    };
  }

  export default Feed
