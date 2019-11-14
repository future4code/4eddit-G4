import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router'
import CommentCard from "../../components/CommentCard"
import PostCard from "../../components/PostCard"
import { TextField, Button } from "@material-ui/core";
import {createComment} from "../../actions/allActions"

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;
`

class PostDetails extends React.Component {
  constructor(){
    super ()
    this.state = {
      comment:"",
    }
  }

  handleCommentChange = (event) => {
    this.setState({
     comment: event.target.value
    });
  
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createCommentAction(
        this.state.comment, 
    )
    alert("Comentário Criado!");

  };



  render() {
    return (
      <PostWrapper>
          <PostCard />
          <FormStyled onSubmit={this.handleSubmit}>
            <TextField
                name="comment"
                id="outlined-multiline-static"
                label="Comentário"
                multiline
                rows="4"
                margin="normal"
                variant="outlined"
                value={this.state.comment}
                onChange={this.handleCommentChange}
            />
            <Button type="submit" variant="contained">Comentar</Button>
        </FormStyled>
        <CommentCard />
      </PostWrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createCommentAction: (text) => dispatch(createComment(text)),

});

export default connect(
  null,
  mapDispatchToProps
)( PostDetails)

