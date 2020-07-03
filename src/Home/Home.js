import React from 'react';
import {withStyles} from '@material-ui/core';
import style from './style';

class Home extends React.Component{
    render(){
        return(
            <div>hey it's home page!</div>
        )
    }
}
export default withStyles(style)(Home);