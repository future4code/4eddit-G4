import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router'
import PostCard from "../../components/PostCard"
import { TextField, Button } from "@material-ui/core";
import { createPosts, fetchPosts  } from "../../actions/allActions";

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

  componentDidMount() {
    this.props.fetchPosts();
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
            rows="4"
            margin="normal"
            type="text"
            variant="outlined"
            label="Conteúdo"
            value={this.state.text}
            onChange={this.handleContentChange}

          />
          <Button type="submit">Enviar</Button>
        </Form>
        {this.props.posts.map(post => (
          <PostCard post={post}/>
        ))}
      </FeedWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts
  }
}
const mapDispatchToProps = dispatch => ({
  createPostAction: (title, text) => dispatch(createPosts(title,text)),
  fetchPosts: () => dispatch(fetchPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed)


