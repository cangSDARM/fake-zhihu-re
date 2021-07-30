import React from "react";
import {IconButton} from "@material-ui/core";

import { withStyles } from "@material-ui/core";
let styles = theme=>({
    
});
let InfoButton = (props)=>{
    return <span style={{display: 'inline-flex', alignItems:'center', cursor: 'default'}}>
        <IconButton {...props} style={{padding: 8}}>
            {props.children}
        </IconButton>
        {props.info}
    </span>
}
export default withStyles(styles)(InfoButton);