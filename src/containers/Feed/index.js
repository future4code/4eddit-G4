import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router'
import PostCard from "../../components/PostCard"
import { TextField, Button } from "@material-ui/core";
import { createPosts  } from "../../actions/allActions";
import up from "../../up.png"

const FeedWrapper = styled.div`
  display: grid;
  justify-content: center;
`
const Form = styled.form`
  display: grid;
`

class Feed extends React.Component {
 
  constructor() {
    super ()
    this.state = {
      title: " ",
      text: " ",
    }
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  handleContentChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createPostAction(
        this.state.title, 
        this.state.text
    )
    alert("Post Criado!");
  };


  render(){
    return (
      <FeedWrapper>
          
        <Form onSubmit={this.handleSubmit}>
          <TextField 
            required
            name="title"
            variant="outlined"
            type="text"
            margin="normal"
            label="Título"
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
          <TextField
            required
            name="text"
            multiline
            margin="normal"
            type="text"
            variant="outlined"
            label="Conteúdo"
            value={this.state.text}
            onChange={this.handleContentChange}
          />
          <Button type="submit">Enviar</Button>
        </Form>
        <PostCard />
      
      </FeedWrapper>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  createPostAction: (title, text) => dispatch(createPosts(title,text)),

});

export default connect(
  null,
  mapDispatchToProps
)(Feed)


