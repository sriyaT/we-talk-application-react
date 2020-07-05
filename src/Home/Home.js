import React from 'react';
import {withStyles} from '@material-ui/core';
import style from './style';

class Home extends React.Component{
    render(){
        return(
            <div onClick={() => this.props.history.push('/login')}>Go to login page!</div> 
        )
    }
}
export default withStyles(style)(Home);