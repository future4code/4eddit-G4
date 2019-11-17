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
import { VoteCommentUp, VoteCommentDown, VoteCommentZero } from "../actions/allActions";

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
	// onClickZero = (e) => {
	// 	this.props.commentVoteZeroAction(
	// 	)
	// 	alert("zerado");

	// 	const likedUp = this.state.likedUp
	// 	likedUp === true ?
	// 		this.setState({
	// 			contadorUp: this.state.contadorUp - 1,
	// 		})
	// 		:
	// 		this.setState({
	// 			contadorUp: this.state.contadorUp,
	// 		})
	// 	const likedDown = this.state.likedDown
	// 	likedDown === false ?
	// 		this.setState({
	// 			contadorDown: this.state.contadorDown - 1,
	// 		})
	// 		:
	// 		this.setState({
	// 			contadorDown: this.state.contadorDown,
	// 		})
	// }
	// onClickUp = (e) => {
	// 	this.props.commentVoteUpAction(
	// 	)
	// 	alert("votadoUp!");

	// 	this.setState({
	// 		filterGreen: "opacity(0.5) drop-shadow(0 0 0 green)",
	// 		contadorUp: this.state.contadorUp + 1,
	// 		likedUp: !this.state.likedUp,
	// 	})
	// }
	// onClickDown = (e) => {
	// 	this.props.commentVoteDownAction(
	// 	)
	// 	alert("votadoDown!");

	// 	this.setState({
	// 		filterRed: "opacity(0.5) drop-shadow(0 0 0 red)",
	// 		contadorDown: this.state.contadorDown + 1,
	// 		likedDown: !this.state.likedDown,
	// 	})
	// }
	render() {
		return (
			<CardWrapper>
				<CardStyled >
					<CardHeader
						avatar={
							<Avatar aria-label="Recipe" >
								U
              </Avatar>
						}
						title={this.props.comment.username}
					/>
					<Divider />
					<CardContent>
						<Typography color="textSecondary" component="p">
							{this.props.comment.text}
            </Typography>
					</CardContent>
					<Divider />
					<CardActions>
						<IconButton>
							<ArrowUpwardIcon
							/>
							<p>{this.state.contadorUp}</p>
						</IconButton>
						<Typography onClick={this.onClickZero} >
							{this.props.comment.votesCount}
            </Typography>
						<IconButton>
							<ArrowDownwardIcon
								onClick={this.onClickDown}
								name="direction"
							/>
						</IconButton>
					</CardActions>
				</CardStyled>
			</CardWrapper>
		)
	}
}
const mapDispatchToProps = dispatch => ({
	commentVoteUpAction: (direction) => dispatch(VoteCommentUp(direction)),
	commentVoteDownAction: (direction) => dispatch(VoteCommentDown(direction)),
	commentVoteZeroAction: (direction) => dispatch(VoteCommentZero(direction)),
});
export default connect(
	null,
	mapDispatchToProps
)(CommentCard)