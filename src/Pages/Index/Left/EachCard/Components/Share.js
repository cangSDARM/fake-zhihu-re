import React, { Fragment } from "react";
import {Button} from "@material-ui/core";

import Share from '@material-ui/icons/ShareRounded';
import {PopperMenu, Link} from '../../../../Components';

class ShareButton extends React.PureComponent{
    shareItem = [
        {
            title: "QQ空间",
            click: ()=>{},
        },{
            title: "新浪微博",
            click: ()=>{},
        },{
            title: "腾讯微博",
            click: ()=>{},
        },{
            title: "网页链接",
            click: ()=>{},
        }
    ]

    constructor(props){
        super(props);
        this.state = {
            popper: false,
        }
    }
    handleClick = {
        share: (e)=>{
            //分享
            this.anchorPopper = e.currentTarget;
            this.setState({ popper: !this.state.popper })
        },
    }
    render(){
        let {popper} = this.state;
        return <Fragment>
            <Button
                mini color="primary"
                aria-owns={popper ? 'poppermenu' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick.share}
            >
                <Share /> 分享
            </Button>

            {/* 弹出菜单(分享) */}
            <PopperMenu
                anchorE1={this.anchorPopper}
                popper={popper}
                callBack={()=>this.setState({popper: false})}
                menulist={this.shareItem}
            />
        </Fragment>
    }
}
export default ShareButton;