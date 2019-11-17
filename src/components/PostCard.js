import React from "react";
import styled from "styled-components";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Divider } from "@material-ui/core";
import { connect } from "react-redux";
import { getPostDetails , postVoteUp, PostVoteDown, PostVoteZero, setSelectedPost} from "../actions/allActions";
import { tsThisType } from "@babel/types";


const CardWrapper = styled.div`
  display: grid;
  justify-items: center;
`

const CardStyled = styled(Card)`
  width:50vw;
  margin-top: 30px;
`

class PostCard extends React.Component {
  constructor(props) {
    super(props)
  }

  
  onClickArrowUp = (postId) => {
    this.props.postVoteUp(1, postId);
    this.props.getPostDetails(postId);
  } 

  onClickArrowDown = (postId) => {
    this.props.postVoteDownAction(-1, postId);
    this.props.getPostDetails(postId);
  }

  onClickZero = (postId) => {
    this.props.postVoteZero(0, postId)
    this.props.getPostDetails(postId);
  }

  onClickCard = postId => {
    this.props.handleOnClickCard(postId);
  }

  render() {
  return (
      <CardWrapper>
      <CardStyled onClick={()=> this.onClickZero(this.props.post.id)}>
        <CardContent onClick={()=> this.onClickCard(this.props.post.id)}>
          <Typography color="textSecondary" gutterBottom>
            {this.props.post.username}
          </Typography>
          <Divider />
          <Typography color="textPrimary"
            variant="h6">
            {this.props.post.title}
          </Typography>
          <Typography color="textSecondary" component="p">
            {this.props.post.text}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions>
          <IconButton aria-label="arrow up">
            <ArrowUpwardIcon onClick={() =>this.onClickArrowUp(this.props.post.id)}/>
          </IconButton>
            <Typography >
              {this.props.post.votesCount}
            </Typography>
            <IconButton aria-label="arrow down">
            <ArrowDownwardIcon onClick={() => this.onClickArrowDown(this.props.post.id)} />
          </IconButton>
          <Typography >
            {this.props.post.commentsNumber}
          </Typography>
          <Typography >
            comentários
          </Typography>
        </CardActions>
      </CardStyled>
    </CardWrapper>
      )
    }
  }
const mapDispatchToProps = dispatch => ({
  postVoteUp: (direction, postId) => dispatch(postVoteUp(direction, postId)),
  postVoteDownAction: (direction, postId) => dispatch(PostVoteDown(direction, postId)),
  postVoteZero: (direction, postId) => dispatch(PostVoteZero(direction, postId)),
  getPostDetails: (postId) => dispatch(getPostDetails(postId)),
});
export default connect(
  null,
  mapDispatchToProps
)(PostCard);