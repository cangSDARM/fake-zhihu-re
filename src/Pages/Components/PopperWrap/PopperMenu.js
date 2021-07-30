import React from "react";
import {MenuList, MenuItem} from "@material-ui/core";

import { withStyles } from "@material-ui/core";

import {PopperWrap} from '..';

let styles = theme=>({
    
});

class Popper extends React.Component{

    resolveSettings = (list)=>{
        return list.map((item, index)=>{
            return <MenuItem onClick={(e)=>{
                item.click && item.click(e);
                this.handleClick(e);
            }} key={index} id={`${item.title}`}>
                {item.title}
            </MenuItem>
        });
    }

    render(){
        let {classes, anchorE1, popper, menulist, othersets} = this.props;
        return <PopperWrap
            id="poppermenu"
            anchorEl={anchorE1}
            popper={popper}
            popperclose={this.handleClick}
            othersets={othersets}
        >
            <MenuList>
                {this.resolveSettings(menulist)}
            </MenuList>
        </PopperWrap>
    }
    
    handleClick = (e)=>{
        if (this.props.anchorE1.contains(e.target)) {
                return;
        }
        this.props.callBack();
    }
}

export default withStyles(styles)(Popper);