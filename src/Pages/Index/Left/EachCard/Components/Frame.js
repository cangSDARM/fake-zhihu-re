import React from "react";
import {Button, CardMedia, CardContent, Typography} from "@material-ui/core";
import {Link} from '../../../../Components';

import { withStyles } from "@material-ui/core";
let styles = theme=>({
    //卡片标题
    title: {
        fontSize: '18px',
        fontWeight: 600,
        margin: '10px',
        marginLeft: '0'
    },
});
const Frame = (props)=>{
    let {classes, content, root} = props;
    return <CardContent className={root}>
        <Typography className={classes.title}>
            <Link to={content.to} target="_blank">
                {content.title}
            </Link>
        </Typography>
        {props.children}
    </CardContent>
}
export default withStyles(styles)(Frame);