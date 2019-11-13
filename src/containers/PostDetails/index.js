import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router'
import CommentCard from "../../components/CommentCard"
import PostCard from "../../components/PostCard"
import { TextField, Button } from "@material-ui/core";

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
      text:"",
    }
  }
  render() {
    return (
      <PostWrapper>
          <PostCard />
          <FormStyled>
            <TextField
                name="text"
                id="outlined-multiline-static"
                label="Comentário"
                multiline
                rows="4"
                margin="normal"
                variant="outlined"
            />
            <Button variant="contained">Comentar</Button>
        </FormStyled>
        <CommentCard />
      </PostWrapper>
    )
  }
}

export default PostDetails