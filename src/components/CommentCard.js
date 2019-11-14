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
 
    constructor() {
      super ()
      this.state = {
        filterGreen:" ",   
        filterRed: " ",
        contadorUp: 0,
        contadorDown: 0,
        likedUp:false,
        likedDown:true,
    }
}

    onClickZero = (e)=> {
       
        const likedUp = this.state.likedUp 
            likedUp === true ? 
            this.setState({
                contadorUp: this.state.contadorUp -1,
            })
            : 
            this.setState({
                contadorUp: this.state.contadorUp,
            })


        const likedDown = this.state.likedDown
          likedDown  === false? 
          this.setState({
            contadorDown : this.state.contadorDown -1,
            })
          : 
          this.setState({
            contadorDown : this.state.contadorDown,
            }) 
    }
        

    onClickUp = (e) => {
        this.setState({
          filterGreen: "opacity(0.5) drop-shadow(0 0 0 green)",
          contadorUp: this.state.contadorUp + 1,
          likedUp: !this.state.likedUp,
        })     
    }

    
    onClickDown = (e) => {
        this.setState({
          filterRed: "opacity(0.5) drop-shadow(0 0 0 red)",
          contadorDown: this.state.contadorDown + 1,
          likedDown: !this.state.likedDown,
        })
      }
      

render (){
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
                        <ArrowUpwardIcon style={{filter: this.state.filterGreen}}
                            onClick={this.onClickUp}/>
                            <p>{this.state.contadorUp}</p>
                    </IconButton>
                    <Typography onClick={this.onClickZero} >
                        0
                    </Typography>
                    <IconButton>
                        <ArrowDownwardIcon style={{filter: this.state.filterRed}}
                            onClick={this.onClickDown}/>
                            <p>- {this.state.contadorDown}</p>
                    </IconButton>
                </CardActions>
            </CardStyled>
           
        </CardWrapper>
    )
}
}

   
export default CommentCard