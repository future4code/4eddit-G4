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

const CardWrapper = styled.div`
  display: grid;
  justify-items: center;
`

const CardStyled = styled(Card)`
  width:50vw;
  margin-top: 30px;
`


const PostCard = (props) => {

  const onClickCard = postId => {
    props.handleOnClickCard(postId);
    
  }

  return (
      <CardWrapper>
      <CardStyled onClick={()=> onClickCard(props.post.id)}>
        <CardContent>
          <Typography color="textPrimary" gutterBottom>
            {props.post.username}
          </Typography>
          <Divider />
          <Typography color="textPrimary"
            variant="h5">
            {props.post.title}
          </Typography>
          <Typography component="p">
            {props.post.text}
          </Typography>
        </CardContent>
        <Divider />
        <CardActions>
          <IconButton aria-label="arrow up">
            <ArrowUpwardIcon />
          </IconButton>
          <Typography >
            0
          </Typography>
            <IconButton aria-label="arrow down">
            <ArrowDownwardIcon />
          </IconButton>
          <Typography >
            0
          </Typography>
          <Typography >
            comentários
          </Typography>
        </CardActions>
      </CardStyled>
    </CardWrapper>
      )
    }
    
export default PostCard;