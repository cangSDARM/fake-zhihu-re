import React from "react";
import {Card, ListItem, List, ListItemAvatar, ListItemText, ListItemSecondaryAction, Avatar, Button} from "@material-ui/core";

import Share from '@material-ui/icons/ShareRounded';

import { withStyles } from "@material-ui/core";
let styles = theme=>({
    root: {
        margin: '10px 0',
        backgroundColor: 'transparent'
    },
    title:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& > :last-child': {
            color: theme.palette.primary.main,
            cursor: 'pointer'
        }
    },
    item: {

    }
});

let topics = [
    {
        src: '',
        title: 'xxxx',
    },{
        src: '',
        title: 'xxxx',
    },{
        src: '',
        title: 'xxxx',
    },{
        src: '',
        title: 'xxxx',
    },{
        src: '',
        title: 'xxxx',
    }
]

const OtherTopic = (props)=>{
    let {classes} = props;
    return <Card className={classes.root} elevation={0}>
        <div className={classes.title}>
            <strong>
                其他人关注的话题
            </strong>
            <span onClick={e=>handleClick(e)}>
                换一换<Share fontSize="small"/>
            </span>
        </div>

        <List>
            {renderTopics(classes)}
        </List>
    </Card>
}
let renderTopics = (classes)=>{
    return topics.map((item, key)=>{
        return <ListItem className={classes.item} key={`${item.src}/${key}`}>
            <ListItemAvatar>
                <Avatar style={{
                    borderRadius: '0%'
                }} src={item.src} />
            </ListItemAvatar>
            <ListItemText primary={item.title}/>
            <ListItemSecondaryAction>
                <Button component="span">
                    +关注
                </Button>
            </ListItemSecondaryAction>
        </ListItem>
    })
}

let handleClick = (e)=>{
    console.log(e.currentTarget);
}

export default withStyles(styles)(OtherTopic);