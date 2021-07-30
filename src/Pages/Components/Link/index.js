import React from 'react';
import {Link as RL} from 'react-router-dom';
import {Link as ML} from '@material-ui/core';

const Link = (props)=>{
    let style = props.style ? props.style : {};
    style.cursor = 'pointer';
    return <ML component={RL} {...props} style={style}/>
};
export default Link;