import React from 'react';
import PropTypes from 'prop-types';

// Icons
import AccountIcon from '@material-ui/icons/AccountCircleRounded';
import PublicIcon from '@material-ui/icons/PublicRounded';
import SettingsIcon from '@material-ui/icons/SettingsRounded';
import PowerIcon from '@material-ui/icons/PowerSettingsNewRounded';
//-------------------------------------------------------------------------

//material-ui
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import Avatar from '@material-ui/core/Avatar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
//-------------------------------------------------------------------------

import PopperMenu from '../../PopperWrap';

import { withStyles } from '@material-ui/core/styles';

let styles = theme=>({
    avatar:{
        borderRadius: 0,
        height: 30,
        width: 30
    },
    avatarmenuitem:{
        padding: 10,
    },
    badge: theme.badge.dot.horizontal,
})


let TODO = {
    TODO:[
        "1. 跳转消息没有通知给下家 "
    ]
}

/**INFO:
 * 1. 这里获取数据后才会展示
 * */
class UserMsg extends React.Component {
    menuitem = [
        ["我的主页",<AccountIcon/>,"/person/"],
        ["创作者中心",<PublicIcon/>,"/creater"],
        ["设置",<SettingsIcon/>,"/settings/account"],
        ["退出",<PowerIcon/>,"/logout"],
    ];
    state = {
      open: false,
    };
    handleToggle = () => {
      this.setState(state => ({ open: !state.open }));
    };
    handleClose = (event,s,id) => {
        if(s !== undefined){
            s = s.endsWith('/') ? s+id : s;
            this.props.history.push(s);
        }
        if (this.anchorEl.contains(event.target)) {
            return;
        }
        this.setState({ open: false });
    };
    render() {
        const { open } = this.state;
        let { classes, userinfo } = this.props;
        let { img, avatarmsg, id } = userinfo;
        return <div>
            <Button
                buttonRef={node => {
                    this.anchorEl = node;
                }}
                aria-owns={open ? 'avtarmenu' : undefined}
                aria-haspopup="true"
                onClick={this.handleToggle}
                disableFocusRipple
            >
                <Badge invisible={!avatarmsg[0]} color="error" variant="dot">
                    <Avatar alt="UserAvatar" src={img} className={classes.avatar} />
                </Badge>
            </Button>
            <PopperMenu id="avtarmenu" popper={open} anchorEl={this.anchorEl} popperclose={this.handleClose}>
                <MenuList>
                    {this.menuitem.map((item, index)=>{
                        return <MenuItem onClick={(e, s=item[2], i=id)=>this.handleClose(e, s, i)} key={index}>
                            {item[1]}
                            <Badge invisible={!avatarmsg[1][index]} color="error" variant="dot" className={classes.badge}>
                                {item[0]}
                            </Badge>
                        </MenuItem>
                    })}
                </MenuList>
            </PopperMenu>
        </div>
    }
}

UserMsg.propTypes = {
    userinfo: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserMsg);