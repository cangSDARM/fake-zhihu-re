import React from "react";
import {Link} from '../../../../Components';

import { withStyles } from "@material-ui/core";
let styles = theme=>({
    root: {
        //padding: '16px',
        paddingLeft: '0',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
    },
    img: {
        height: 'auto',
        width: '100%'
    }
});

const Image = (props)=>{
    let {classes, src, to} = props;
    return <Link to={to} target="_blank" className={classes.root}>
        <img
            className={classes.img}
            alt="undefined"
            src={src || "https://pic1.zhimg.com/50/v2-36b50e3632f1b209bbb5836233fcd724_200x112.jpg"}
        />
    </Link>
}

export default withStyles(styles)(Image);