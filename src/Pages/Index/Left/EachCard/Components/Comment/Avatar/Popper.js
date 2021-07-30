import React from "react";
import {Grid} from "@material-ui/core";

import { withStyles } from "@material-ui/core";

import {InfoButton, PopperWrap} from '../../../../../../Components';

let styles = theme=>({
    
});

let TODO = {
    TODO:[
        "1. 用户信息没做"
    ]
}

const AvatarPopper = (props)=>{
    let {classes, anchorEl, popper, user} = props;
    return <PopperWrap
        id="avatarPopper"
        anchorEl={anchorEl}
        popper={popper}
        popperclose={()=>{}}
    >
        <div>
            用户信息...{/*user*/}
        </div>
    </PopperWrap>
}

export default withStyles(styles)(AvatarPopper);