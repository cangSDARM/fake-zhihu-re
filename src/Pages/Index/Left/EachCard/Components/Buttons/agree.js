import React, {useContext, useEffect, useState} from 'react';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import { Button as MButton } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Flag from '@material-ui/icons/Flag';
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfiedRounded';
import Star from '@material-ui/icons/StarRounded';
import MoreHoriz from '@material-ui/icons/MoreHorizRounded';
import ThumbUp from '@material-ui/icons/ThumbUpRounded';
import ThumbDown from '@material-ui/icons/ThumbDownRounded';

export const QueryContext = React.createContext({
    queryUpdate: ()=>{},
    queryRemove: ()=>{}
});

const Button = withWidth()((props)=>{
    const {queryUpdate, queryRemove} = useContext(QueryContext);
    const [update, setUpdate] = useState(false);
    function Inner( children ) {
        let inner = Array.from(children);
        inner.shift();
        return inner.join("").trim();
    }

    useEffect(()=>{
        let inner = Inner(props.children);
        if(props.breakpoint){
            if(isWidthUp(props.breakpoint, props.width)){
                setUpdate(true);
                queryRemove(inner);
            }else{
                queryUpdate(inner, props.onClick);
                setUpdate(false);
            }
            return;
        }
        setUpdate(true);
    }, [props.width]);
    
    return update ? <MButton {...props}/> : null;
})

export const AgreeButton = ({agree, likeNum, handleClick})=>{
    return <Button variant={agree ? "contained" : "outlined"} color="primary" onClick={handleClick}>
        <ThumbUp />
        {likeNum} 赞同
    </Button>
}

export const DisagreeButton = ({disagree, handleClick})=>{
    return <Button variant={disagree ? "contained" : "outlined"} color="primary" onClick={handleClick}>
        <ThumbDown /> 
    </Button>
}

export const CommentButton = ({handleClick, commentNum, Forum})=>{
    return <Button mini color="primary" onClick={handleClick} breakpoint="md">
        <Forum /> {commentNum}条评论
    </Button>
}

export const CollectionButton = ({handleClick, width})=>{
    return <Button mini color="primary" onClick={handleClick} breakpoint="md">
        <Star /> 收藏
    </Button>
}

export const MoreButton = ({popper, handleClick})=>{
    return <IconButton
        mini="true" color="primary"
        aria-owns={popper ? 'poppermenu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
    >
        <MoreHoriz />
    </IconButton>
}

export const ThankButton = ({handleClick})=>{
    return <Button mini color="primary" onClick={handleClick} breakpoint="lg">
        <SentimentVerySatisfied /> 感谢
    </Button>
};

export const InformButton = ({handleClick})=>{

    return <Button mini color="primary" onClick={handleClick} breakpoint="lg">
        <Flag/> 举报
    </Button>
}