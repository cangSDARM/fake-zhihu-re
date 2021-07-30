import React from "react";
import {Divider, CardContent, Chip, Typography} from "@material-ui/core";

import Share from '@material-ui/icons/ShareRounded';

import { withStyles } from "@material-ui/core";

import {Link} from '../../../Components';

import Topic from './Topic';

let TODO = {
    TODO:[
        "1. 具体是什么话题未表明"
    ]
}

let topics = [
    "互联网",
    "心理",
    "xXXX",
    "Xxxxx",
    "xXCXX",
    "qwesaaczczxc",
    "wqeodsapkopaxs",
    "qwweqodqkpamdl",
    "qweopipoqw",
    "qwoeiqpkqpomqwmals",
    "dqwoeiqpksalsjdalcnakslnqwlw",
    "qwpoqw,saldmakeqwpipiosad"
]

let styles = theme=>({
    root:{
        
    },
    topictitle: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '8px 10px'
    },
    topiccontent: {
        margin: '10px 5px'
    },
    topicexpand: {
        fontSize: 14,
        padding: 6,
        display: 'inline-flex',
        alignItems: 'center',
        background: 'transparent !important',
        '&:hover': {
            color: '#a2a2a2'
        },
        '&:active': {
            boxShadow: 'none'
        }
    },
    chip: {
        margin: '2px 5px'
    }
});
class Topics extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            indexing: 0,
            maxIndexing: 8,
            topic: topics[0],
        };
    }
    handleClick = {
        chipClick: (e, index)=>{
            this.setState({
                indexing: index,
                topic: topics[index],
            });
        },
        expandClick: (e)=>{
            this.setState({
                maxIndexing: Infinity
            })
        }
    }
    render(){
        let {classes} = this.props;
        let {indexing, maxIndexing} = this.state;
        let {chipClick, expandClick} = this.handleClick;
        return <CardContent className={classes.root}>
            <Typography className={classes.topictitle}>
                <span style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Share />已关注的话题动态
                </span>
                <Link to="/001/topics">{`共关注${topics.length}个话题`}</Link>
            </Typography>
            <Divider variant="fullWidth" />
            <div className={classes.topiccontent}>
                {topics.map((item, index)=>{
                    if(index === maxIndexing){
                        return <Chip
                            key={index}
                            onClick={expandClick}
                            label="展开更多"
                            className={classes.topicexpand}
                            deleteIcon={<Share fontSize="small"/>}
                            onDelete={expandClick}
                        />
                    }else if(index > maxIndexing){
                        return undefined;
                    }else{
                        return <Chip
                            key={index}
                            onClick={(e, i=index)=>{
                                chipClick(e, i)
                            }}
                            label={item}
                            className={classes.chip}
                            color={indexing===index ? "primary" : "default"}
                        />
                    }
                })}
            </div>
            <Divider variant="fullWidth"/>
            <Topic topic={this.state.topic} root={classes.topic}/>
        </CardContent>
    }
}
export default withStyles(styles)(Topics);