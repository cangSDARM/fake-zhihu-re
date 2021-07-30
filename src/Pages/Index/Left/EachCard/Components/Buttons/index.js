import React, {} from "react";
import Forum from '@material-ui/icons/ForumRounded';

import ShareButton from '../Share';
import Portals from '../Portals';
import Comment from '../Comment/';
import {PopperMenu} from '../../../../../Components';

import {AgreeButton, DisagreeButton, CommentButton, CollectionButton, MoreButton, ThankButton, InformButton, QueryContext} from './agree';

import { withStyles } from '@material-ui/core';

let styles = theme=>({
    //按钮
    actions:{
        display: 'flex',
        padding: '4px 16px',
        alignItems: 'center',
        '& > :not(:first-child)':{
            marginLeft: '12px'
        }
    }
});

class Buttons extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            portal: false,
            variant: {
                agree: false,
                disagree: false
            },
            popper: false,
            comment: false,
            morelist: [],
        };
    }

    handleClick = {
        agree: (e)=>{
            //赞同
            this.setState({
                variant: {
                    agree: !this.state.variant.agree,
                    disagree: false,
                }
            });
        },
        disagree: (e)=>{
            //不赞同
            this.setState({
                variant: {
                    agree: false,
                    disagree: !this.state.variant.disagree,
                }
            });
        },
        comment: (e)=>{
            //评论
            this.setState({
                comment: !this.state.comment,
            })
        },
        collection: (e)=>{
            //收藏
            this.setState({
                portal: true,
            })
        },
        thanks: (e)=>{
            //感谢
        },
        more: (e)=>{
            //更多
            this.anchorPopper = e.currentTarget;
            this.setState({ popper: !this.state.popper })
        },
        portalclose: (e)=>{
            this.setState({
                portal: false
            });
        },
    }

    QueryCallback = {
        queryRemove: (inner) => {
            this.setState((preState)=>{
                let morelist = preState.morelist;
                morelist = morelist.filter(value => value.title !== inner);
                return {
                    morelist,
                }
            })
        },
        queryUpdate: (inner, onClick)=>{
            this.setState((preState)=>{
                let morelist = preState.morelist;
                morelist = morelist.filter(value => value.title !== inner);
                morelist.push({title: inner, click: onClick});
                return {
                    morelist,
                }
            });
        }
    }

    componentWillMount(){
        this.SetMorelistDefault();
    }

    SetMorelistDefault = ()=>{
        let morelist = [{
            title: "不再显示相关内容",
            click: ()=>{}
        }];
        this.setState({
            morelist,
        });
    }

    render(){
        let {classes, info} = this.props;
        let typeDipose = this.typeDipose(info.type);
        let likeNum = this.likeDipose(info.like);
        let commentNum = this.commentDipose(info.comment);
        let {popper, variant, portal, comment, morelist} = this.state;

        return <QueryContext.Provider value={this.QueryCallback}>
            
            <div className={classes.actions}>
                <AgreeButton {...{likeNum, handleClick: this.handleClick.agree, agree: variant.agree}}/>
                <DisagreeButton {...{disagree: variant.disagree, handleClick: this.handleClick.disagree}}/>
                <CommentButton {...{commentNum, handleClick: this.handleClick.comment, Forum}}/>
                <ShareButton />
                <CollectionButton {...{handleClick: this.handleClick.collection}}/>
                {typeDipose}
                <MoreButton {...{popper, handleClick: this.handleClick.more}}/>
            </div>

            <Comment
                count={info.comment}
                display={comment}
            />

            {/* 弹出菜单(更多) */}
            <PopperMenu
                anchorE1={this.anchorPopper}
                popper={popper}
                callBack={()=>this.setState({popper: false})}
                menulist={morelist}
                othersets={{placement:"bottom-start"}}
            />

            {/* 模态框(收藏) */}
            <Portals open={portal} handleClose={this.handleClick.portalclose}/>

        </QueryContext.Provider>
    }

    /**
     * 显示赞同数量
     */
    likeDipose = (like)=>{
        let m = Math.floor(like/10000);
        let k = Math.floor(like/1000);
        if(m > 0)
            like = `${m}w`;
        else if(k > 0)
            like = `${k}k`;
        return like
    }
    /**
     * 显示讨论内容
     */
    commentDipose = (comment)=>{
        let k = Math.floor(comment/1000);
        if(k > 0)
            comment = `${k}k`;
        return comment;
    }
    /**
     * 显示: 文章-举报; 回答-感谢
     */
    typeDipose = (type)=>{
        switch(type){
            case "answer":
                return <ThankButton handleClick={this.handleClick.thanks}/>
            case 'column':
                return <InformButton handleClick={this.handleClick.thanks}/>
            default:
                return null;
        }
    }
}
export default withStyles(styles)(Buttons);