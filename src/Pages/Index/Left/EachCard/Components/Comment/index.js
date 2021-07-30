import React from "react";
import {Card, List, ListItem, Avatar, Button, IconButton, Paper} from "@material-ui/core";
import Share from '@material-ui/icons/ShareRounded';

import { withStyles } from "@material-ui/core";

import {InfoButton, PopperMenu} from '../../../../../Components';

import Buttons from './Buttons';
import WriteComment from './WriteComment';
import AvatarWithPop from './Avatar';

let TODO = {
    TODO: [
        "1. 所有跳转都没做. (头像, 名字)",
        "2. 所有逻辑都没做"
    ],
    INFO: [
        "1. js的HashCode呢? js没有HashCode",
        "2. e.target: 捕获事件的对象; e.currentTarget: 绑定事件的对象"
    ]
}

let styles = theme=>({
    //评论大框架
    list:{
        padding: '0'
    },
    //评论数概览
    title: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: '1.25rem',
        fontWeight: 'bold',
        lineHeight: '3.75rem',
        padding: '0 16px',
        margin: '0 0'
    },
    //精选说明
    choosed: {
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: '38px',
        backgroundColor: 'rgba(0, 0, 0, 0.02)',
        padding: '0 16px',
        margin: '0 0'
    },
    eachComment: {
        paddingTop: 0,
        paddingBottom: 0,
        '&:hover .footer-button':{
            display: 'inline-flex',
        },
        '& .footer-button': {
            display: 'none'
        }
    },
    //每条评论的抬头
    eachCommentTitle:{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingTop: 8,
        paddingRight: 16
    },
});
class Comment extends React.Component{
    comment = {
        recommanded: [1, 2],
        nomal: [
            {
                avatar: "https://pic3.zhimg.com/b5a56387738877a0eb469979ce7f52f1_is.jpg",    //url or base64
                fromWho: "某某某",
                daysAgo: "两天前",
                comment: "Weak up! It's not a fire",
                numAgree: 23,
            },{
                avatar: "https://avatar-static.segmentfault.com/408/664/4086645717-5b7d81981867d_big64",
                fromWho: "某某某",
                toWho: "某某某",
                daysAgo: "两天前",
                comment: "Easy, bro",
                numAgree: 23,
            },{
                avatar: "https://pic3.zhimg.com/b5a56387738877a0eb469979ce7f52f1_is.jpg",
                fromWho: "某某某",
                toWho: "某某某",
                daysAgo: "两天前",
                comment: "Why, This is a fucking fire",
                numAgree: 23,
            },{
                avatar: "https://avatar-static.segmentfault.com/408/664/4086645717-5b7d81981867d_big64",
                fromWho: "某某某",
                toWho: "某某某",
                daysAgo: "两天前",
                comment: "I dont think so",
                numAgree: 23,
            }
        ],
    }

    constructor(props){
        super(props);
        this.state = {
            indexing: false,
            choosed: [],
        }
    }

    render(){
        let {count, classes, display} = this.props;
        let {choosed, title, list} = classes;
        let {renderChoosedComment, renderNomalComment} = this.renderComment;
        let {changeIndexing} = this.handleClick;
        return <Card style={{display: display ? "inherit" : "none", margin: '10px 16px'}} elevation={1}>
            <List className={list}>
                <div className={title}>
                    {`${count}条评论`}
                    <Button onClick={changeIndexing}>
                        <Share />{this.state.indexing? "切换为时间排序" : "切换为点赞数排序"}
                    </Button>
                </div>
                <div className={choosed}>{`精选评论 (${this.comment.recommanded.length})`}</div>
                {renderChoosedComment()}
                <div className={choosed}>{`评论 (${this.comment.nomal.length})`}</div>
                {renderNomalComment()}
            </List>
            
            {/* 写评论 */}
            <WriteComment />
        </Card>
    }

    renderComment = {
        /**
         * 渲染精选评论
         */
        renderChoosedComment: ()=>{
            let commentInfo = [];
            this.comment.recommanded.map((item)=>{
                commentInfo.push(this.comment.nomal[item]);
            });
            return this.renderComment.renderCommentItems(commentInfo)
        },
        /**
         * 渲染普通评论
         */
        renderNomalComment: ()=>{
            let commentInfo = this.comment.nomal;
            return this.renderComment.renderCommentItems(commentInfo);
        },
        /**
         * 渲染评论列
         */
        renderCommentItems: (commentInfo)=>{
            let {eachComment} = this.props.classes;
            return commentInfo.map((item, key)=>{
                return <ListItem className={eachComment} id={item} key={key}>
                    {this.renderComment.renderEachComment(item)}
                </ListItem>
            });
        },
        /**
         * 给定评论, 渲染它
         */
        renderEachComment: (comment)=>{
            let {eachCommentTitle} = this.props.classes;
            return <div style={{
                width:'100%',
            }}>
                <div className={eachCommentTitle}>
                    <span style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <AvatarWithPop comment={comment}/>
                        {comment.fromWho}
                        {comment.toWho ? <span>
                            <span style={{color: 'grey', margin: 'auto 5px'}}>回复</span>
                            {comment.toWho}
                        </span> : undefined }
                    </span>
                    {comment.daysAgo}
                </div>
                <div style={{padding: '2px 40px'}}>
                    <span>{comment.comment}</span>
                    <Buttons number={comment.numAgree}/>
                </div>
            </div>
        },
    }

    handleClick = {
        changeIndexing: ()=>{
            this.setState({
                indexing: !this.state.indexing,
            })
        },
    }
}
export default withStyles(styles)(Comment);