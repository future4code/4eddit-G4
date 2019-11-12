import React, {Component} from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router"
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const FormStyled= styled.form`
    width: 60%;
    display:flex;
    flex-direction:column;
`;
class CardComment extends React.Component  {
   
    constructor(props) {
      super(props);
      this.state = {
        
        };
}   
render(props) {
        return ( 
            
            <div>
                <FormStyled>
                <TextField
                        id="outlined-multiline-static"
                        label="Comentário"
                        multiline
                        rows="4"
                        margin="normal"
                        variant="outlined"
                    />
                    <Button variant="contained">Comentar</Button>
                </FormStyled>
                <Card >
                        <CardHeader
                        avatar={
                            <Avatar aria-label="Recipe" >
                                U
                            </Avatar>
                        }
                        title="User"
                            />
                        <CardContent>
                            <Typography component="p">
                                This impressive paella is a perfect party dish and a fun meal to cook together with your
                                guests. Add 1 cup of frozen peas along with the mussels, if you like.
                            </Typography>
                            </CardContent>
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
                        </CardActions>
                    </Card>
            </div>
        )
    }
}
  export default CardComment 