import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import {Link as RL} from 'react-router-dom';

// Icons
import ChatIcon from '@material-ui/icons/Chat';
import ViewListIcon from '@material-ui/icons/ViewListRounded';
import ForumIcon from '@material-ui/icons/ForumRounded';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAltRounded';
import PublicIcon from '@material-ui/icons/PublicRounded';
import SettingsIcon from '@material-ui/icons/SettingsRounded';
import PowerIcon from '@material-ui/icons/PowerSettingsNewRounded';
//-------------------------------------------------------------------------

//material-ui
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import MenuList from '@material-ui/core/MenuList';
import Avatar from '@material-ui/core/Avatar';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';

import PopperWrap from '../../PopperWrap';

import { withStyles } from '@material-ui/core/styles';

let styles = theme=>({
    bottom:{
        justifyContent: "space-between",
    },
    tabs: {
        minWidth: 0,
    },
    action: {
        padding: '0 10px'
    }
});

const TabContainer = ({children})=>{
    return <div>
        {children}
    </div>
}

class Messages extends React.Component{
    tabs = [
        {
            title: undefined,
            icon: <ViewListIcon />
        },{
            title: undefined,
            icon: <ForumIcon />
        },{
            title: undefined,
            icon: <ThumbUpAltIcon />
        }
    ];
    renderTabs = ()=>{
        return this.tabs.map((item, index)=>{
            return <Tab label={item.title} icon={item.icon} key={index} className={this.props.classes.tabs}/>
        })
    }
    bottomactions = [
        {
            to: '/write',
            str: '写新东西',
        },{
            to: '/inbox',
            str: '查看全部私信',
        }
    ];
    state = {
        open: false,
    };
    renderBottomActions = ()=>{
        let ML = props=><RL {...props}/>;
        let {action} = this.props.classes;
        return this.bottomactions.map((item, index)=>{
            return <Typography key={index} className={action}>
                <Link component={ML} to={item.to} underline="none">{item.str}</Link>
            </Typography>
        })
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
        let { classes, messages } = this.props;
        return <div>
            <IconButton
                aria-label="4 pending messages"
                buttonRef={node => {
                    this.anchorEl = node;
                }}
                aria-owns={open ? 'notifactionmenu' : undefined}
                aria-haspopup="true"
                onClick={this.handleToggle}
            >
                <Badge badgeContent={messages} color="error">
                    <ChatIcon />
                </Badge>
            </IconButton>
            <PopperWrap id="notifactionmenu" anchorEl={this.anchorEl} popper={open} popperclose={this.handleClose}>
                <Card>
                    <CardContent style={{padding:'10px'}}>
                        TODO
                    </CardContent>
                    <CardActions className={classes.bottom}>
                        {this.renderBottomActions()}
                    </CardActions>
                </Card>
            </PopperWrap>
        </div>
    }
}

export default withStyles(styles)(Messages);