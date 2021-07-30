import React from "react";

import {InputBase, IconButton, Button} from "@material-ui/core";
import Share from '@material-ui/icons/ShareRounded';

import { withStyles } from "@material-ui/core";
let styles = theme=>({
    root:{
        padding: '12px 20px',
        borderTop: '1px solid #ebebeb',
        display: 'flex',
        alignItems: 'center',
        '& > :nth-last-child(1)':{
            marginLeft: '8px',
        }
    }
});

const Write = (props)=>{
    let {classes} = props;
    return <div className={classes.root}>
        <div style={{
            display: 'inline-flex',
            border: '1px solid #ebebeb',
            backgroundColor: '#f6f6f6',
            borderRadius: '3px',
            flex: '1'
        }}>
            <InputBase placeholder="Write your comment" style={{flex: 1, paddingLeft: '8px'}} />
            <IconButton aria-label="Search" style={{
                height: '32px',
                width: '32px',
                padding: '0'
            }}>
                <Share />
            </IconButton>
        </div>
        <Button variant="outlined" color="primary" size="small">回答</Button>
    </div>
}
export default withStyles(styles)(Write);