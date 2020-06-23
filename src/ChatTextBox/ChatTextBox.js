import React from 'react';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';
import styles from './style';
import { withStyles } from '@material-ui/core/styles';

class ChatTextBox extends React.Component{

    constructor (){
        super();
        this.state = {
            chatText :''
        };
    }

    render(){
        const { classes } = this.props; 
        return(
            <div className={ classes.chatTextBoxContainer}> 
                <TextField placeholder='Type Your Message ...'
                onKeyUp={ (e) => this.userTyping(e)} 
                id='chattextbox'
                className={classes.chatTextBox}
                onFocus={this.userClickedInput}></TextField>
                <Send className={classes.sendBtn} onClick={this.submitMessage}></Send>
            </div>
        )
        }
        userTyping = (e) => e.keyCode === 13 ? this.submitMessage() : this.setState({chatText: e.target.value });
        messageValidate = (txt) => txt && txt.replace(/\s/g, '').length; 
        userClickedInput = () => this.props.messageReadFn(); 
        submitMessage = () =>{
            if(this.messageValidate(this.state.chatText)){
                this.props.submitMessageFn(this.state.chatText);
                document.getElementById('chattextbox').value = '';
            }
        }
    }

    export default withStyles(styles)(ChatTextBox);
        