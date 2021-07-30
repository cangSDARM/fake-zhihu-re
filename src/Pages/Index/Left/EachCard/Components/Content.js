import React from "react";
import {Button, CardMedia, CardContent, Typography} from "@material-ui/core";
import {Link} from '../../../../Components';

import Frame from './Frame';

import { withStyles } from "@material-ui/core";
let styles = theme=>({
    //卡片标题
    title: {
        fontSize: '18px',
        fontWeight: 600,
        margin: '10px',
        marginLeft: '0'
    },
    //缩略内容
    root: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        minHeight: '100px',
        cursor: 'pointer',

        '& > span':{
            height: '100%',
        }
    },
    //缩略文字
    detail:{
        lineHeight: '1.6',
        height: '100%',
        width: '200%',
        textAlign: 'left',
    },
    //缩略图片
    media: {
        width: '100%',
        height: '100%',
        minHeight: '100px'
    },
});

let TODO = {
    TODO:[
        "1. 现在只写了缩略的内容"
    ]
}

/**
 * 主要内容
 */
const Content = (props)=>{
    let {classes, content, handleClick, root} = props;
    return <Frame content={content} root={root}>
        <div className={classes.root} onClick={handleClick}>
            <CardMedia
                className={classes.media}
                image={content.imgsrc || "https://pic1.zhimg.com/50/v2-36b50e3632f1b209bbb5836233fcd724_200x112.jpg"}
                title={"ZhiHu, 分享你刚编的故事"}
            />
            <span className={classes.detail}>
                {content.people}
                &nbsp;
                {content.content.slice(0, 90)+" ..."}
                <Button size="small" onClick={handleClick}>阅读全文</Button>
            </span>
        </div>
    </Frame>
}

export default withStyles(styles)(Content);