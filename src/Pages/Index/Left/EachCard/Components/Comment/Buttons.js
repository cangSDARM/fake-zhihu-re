import React from "react";
import {Button, Paper} from "@material-ui/core";

import Share from '@material-ui/icons/ShareRounded';

import {InfoButton} from '../../../../../Components';

import { withStyles } from "@material-ui/core";
let styles = theme=>({
    root: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'inherit'
    }
});

class Buttons extends React.Component{
    buttons = [
        {
            icon: <Share />,
            title: "查看回复"
        },{
            icon: <Share />,
            title: "回复"
        },{
            icon: <Share />,
            title: "踩"
        },{
            icon: <Share />,
            title: "举报"
        }
    ]

    render(){
        let {classes, number} = this.props;
        let buttom = this.buttons.map((items, key)=>{
            return <Button className="footer-button" color="primary" key={key}>
                {items.icon}{items.title}
            </Button>
        });
        return <Paper className={classes.root} elevation={0}>
            <InfoButton info={number}>
                <Share />
            </InfoButton>
            {buttom}
        </Paper>
    }
}
export default withStyles(styles)(Buttons);