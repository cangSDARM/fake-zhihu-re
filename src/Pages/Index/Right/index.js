import React from 'react';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core';

import Write from './Components/Write';
import Creator from './Components/Creator';
import Service from './Components/Service';
import Actions from './Components/Actions';

let styles = theme=>({
    write: {
        justifyContent: 'space-around',
        display: 'flex',
        flexWrap: 'nowrap'
    },
    creator: {
        cursor: 'default'
    },
    service: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        padding: '5px',
    },
    actions: {
        padding: '5px 0px'
    }
});
const Right = (props)=>{
    let {classes, root} = props;
    return <div className={root}>
        <Write root={classes.write}/>
        <Creator root={classes.creator}/>
        <Service root={classes.service}/>
        <Actions root={classes.actions}/>
    </div>
}
export default withStyles(styles)(Right);