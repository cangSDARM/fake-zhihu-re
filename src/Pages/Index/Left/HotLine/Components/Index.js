import React from "react";
import {Grid} from "@material-ui/core";

import { withStyles } from "@material-ui/core";
let styles = theme=>({
    root: {
        fontSize: '20px',
        color: 'red',
        padding: '20px',
        display: 'inline-block',
    }
});

const Index = (props)=>{
    let {classes, index} = props;
    return <div className={classes.root}>
        {index}
    </div>
}

export default withStyles(styles)(Index);