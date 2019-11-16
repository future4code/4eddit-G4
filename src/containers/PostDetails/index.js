import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from '../Router'
import CommentCard from "../../components/CommentCard"
import PostCard from "../../components/PostCard"
import { TextField, Button } from "@material-ui/core";
import { createComment, getPostDetails, setPostDetails } from "../../actions/allActions"

const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`
const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;
  align-self: center;
`

class PostDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text:""
    }
  }

  componentDidMount() {
    this.props.getPostDetails(this.props.postId);
  }
  

  handleCommentChange = (event) => {
    this.setState({
      text: event.target.value
    });

  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.createComment(this.state.text);
    alert("Comentário Criado!");
    this.props.getPostDetails(this.props.postId)
  };

  render() {

    return (
      <PostWrapper>
        <PostCard post={this.props.postDetails} />
        <FormStyled onSubmit={this.handleSubmit}>
        <TextField
          name="text"
          id="outlined-multiline-static"
          label="Comentário"
          multiline
          rows="4"
          margin="normal"
          variant="outlined"
          value={this.state.text}
          onChange={this.handleCommentChange}
        />
        <Button type="submit" variant="contained">Comentar</Button>
      </FormStyled>
      {this.props.postDetails.comments ?
          this.props.postDetails.comments.map(comment => (
            <CommentCard 
              comment={comment}
            />
          )
        )
          : ""
       }
      </PostWrapper>
    )
  }
}

const mapStateToProps = state => ({
  postId: state.posts.postId,
  postDetails: state.posts.postDetails
 
})

const mapDispatchToProps = dispatch => ({
  createComment: (text) => dispatch(createComment(text)),
  getPostDetails: (postId) => dispatch(getPostDetails(postId)),
  setPostDetails: (postDetails) => dispatch(setPostDetails(postDetails)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails)

