import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import styled from "styled-components";
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import { Divider } from "@material-ui/core";


const CardWrapper = styled.div`
    display: grid;
    justify-content: center;
`
const CardStyled = styled(Card)` 
    width: 50vw;
    margin-top: 30px;
`;
const CommentCard = () => {

    return (

        <CardWrapper>
            <CardStyled >
                <CardHeader
                    avatar={
                        <Avatar aria-label="Recipe" >
                            U
                            </Avatar>
                    }
                    title="User"
                />
                <Divider />
                <CardContent>
                    <Typography component="p">
                        This impressive paella is a perfect party dish and a fun meal to cook together with your
                        guests. Add 1 cup of frozen peas along with the mussels, if you like.
                    </Typography>
                </CardContent>
                <Divider />
                <CardActions>
                    <IconButton>
                        <ArrowUpwardIcon />
                    </IconButton>
                    <Typography >
                        0
                    </Typography>
                    <IconButton>
                        <ArrowDownwardIcon />
                    </IconButton>
                </CardActions>
            </CardStyled>
        </CardWrapper>
    )
}

export default CommentCard