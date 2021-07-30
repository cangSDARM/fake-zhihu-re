import React from "react";
import {Card, Button, Typography} from "@material-ui/core";

import {Link} from '../../../Components';

import { withStyles } from "@material-ui/core";

let styles = theme=>({
    root: {
        backgroundColor: "#eef1ff",
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '20px',
    },
    link: {
        ...theme.navlink,
        padding: '5px 10px',
        borderRadius: '4px',
        backgroundColor: theme.palette.primary.main,
        color: 'white'
    },
    desc: {
        padding: 10,
    }
});
let Square = (props)=>{
    let {classes} = props;
    return <Card className={classes.root}>
        <Link to="/square" underline="none" className={classes.link}>
            进入话题广场
        </Link>
        <Typography color="secondary" className={classes.desc}>
            来这里发现更多话题
        </Typography>
    </Card>
}
export default withStyles(styles)(Square);