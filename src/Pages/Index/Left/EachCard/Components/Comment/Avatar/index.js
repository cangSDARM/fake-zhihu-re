import React, {Fragment} from "react";
import {Avatar} from "@material-ui/core";

import { withStyles } from "@material-ui/core";

import Popper from './Popper';

let styles = theme=>({
    avatar: {
        display:'inline-flex',
        width: '30px', height: '30px',
        borderRadius: '0%',
        margin: '0 5px',
        cursor: 'pointer'
    }
});

class AvatarWithPop extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hover: false,
            user: undefined
        }
    }

    render(){
        let {classes, comment, root} = this.props;

        return <Fragment>
            <Avatar
                className={[classes.avatar, root].join(" ")}
                src={comment.avatar}
                onMouseEnter={e=>this.handleHover.avatarHover(e, comment)}
                onMouseLeave={e=>this.handleHover.avatarHover(e, undefined)}
                onClick={e=>this.handleClick.avatarClick(e)}
                aria-owns={this.state.hover ? 'poppermenu' : undefined}
                aria-haspopup="true"
            />

            {/* 弹出菜单 */}
            <Popper
                anchorEl={this.anchorPopper}
                popper={this.state.hover}
                user={this.state.user}
            />
        </Fragment>
    }

    handleClick = {
        avatarClick: (e)=>{
            console.log("jump to anthor location");
        }
    }

    handleHover = {
        avatarHover: (e, user)=>{
            this.anchorPopper = e.currentTarget;
            this.setState({
                hover: !this.state.hover,
                user,
            })
        }
    }
}

export default withStyles(styles)(AvatarWithPop);