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
`
class CommentCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		const { comment } = this.props
		return (
			<CardWrapper>
				<CardStyled >
					<CardHeader
						avatar={
							<Avatar aria-label="Recipe" >
								U
              </Avatar>
						}
						title={comment.username}
					/>
					<Divider />
					<CardContent>
						<Typography color="textSecondary" component="p">
							{comment.text}
            </Typography>
					</CardContent>
					<Divider />
					<CardActions>
						<IconButton>
							<ArrowUpwardIcon/>
						</IconButton>
						<Typography >
							   0
            </Typography>
						<IconButton>
							<ArrowDownwardIcon/>
						</IconButton>
					</CardActions>
				</CardStyled>
			</CardWrapper>
		)
	}
}


export default CommentCard