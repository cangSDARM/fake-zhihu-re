import React from "react";
import {Divider} from "@material-ui/core";

import { withStyles } from "@material-ui/core";

import Square from './Components/Square';
import OtherTopic from './Components/Other';

let styles = theme=>({
    root: {
        marginLeft: 15,
        '& > div':{
            marginBottom: 10
        }
    },
});
const Right = (props)=>{
    let {classes} = props;
    return <div className={classes.root}>
        <Square />
        <Divider variant="fullWidth"/>
        <OtherTopic />
    </div>
}
export default withStyles(styles)(Right);