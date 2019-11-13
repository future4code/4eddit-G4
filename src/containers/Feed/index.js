import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router'
import PostCard from "../../components/PostCard"
import { TextField, Button } from "@material-ui/core";

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
      title: "",
      content: "",
    }
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  handleContentChange = (event) => {
    this.setState({
      content: event.target.value
    });
  }

  render(){
    return (
      <FeedWrapper>
        <Form>
          <TextField 
            required
            variant="outlined"
            type="text"
            margin="normal"
            label="Título"
            value={this.state.title}
          />
          <TextField
            required
            multiline
            margin="normal"
            type="text"
            variant="outlined"
            label="Conteúdo"
            value={this.state.content}
          />
          <Button>Enviar</Button>
        </Form>
        <PostCard />
      </FeedWrapper>
    )
  }
}

export default Feed;