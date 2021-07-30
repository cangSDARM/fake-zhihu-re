import React, { Component } from 'react';

import Share from '@material-ui/icons/ShareRounded';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import { withStyles } from '@material-ui/core';

import {Link} from '../../../Components';

let styles = theme=>({
    header: {
        borderBottom: '1px solid #9a9a9a8c',
        display: 'flex',
        margin: '10px',
        marginBottom: '8px',
        padding: '10px 2px',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 14,

        '& > div':{
            display: 'flex',
            alignItems: 'center'
        },
        '&:hover':{
            textDecoration: 'none'
        }
    },
    content:{
        display: 'flex',
        justifyContent: 'center',
        fontSize: '12px',
        padding: '16px !important'
    },
    info: {
        display: 'flex',
        padding: 5,
        flexDirection: 'column',
        alignItems: 'center',
        '& strong':{
            margin: '5px 0',
            fontWeight: 800,
            fontSize: '1.25rem'
        }
    },
    infovalue: {
        fontWeight: 800
    },
    seperate:{
        margin: 0,
        border: 'none',
        width: 2,
        flexShrink: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
    }
});

let msgs = [
    {
        title: '昨日回答阅读数',
        num: 12,
        conpareTo: '较前日',
        mark: 'V',
        value: '12%',
    },
    {
        type: 'seperate'
    },
    {
        title: '昨日回答赞同数',
        num: 0,
        conpareTo: '较前日',
        mark: 'V',
        value: '...',
    }
]

const Creator = (props)=>{
    let {classes, root} = props;
    let to = '/home';

    return <Card className={root}>
        <Link
            className={classes.header}
            to={to}
        >
            <div>
                <Share />
                创作者中心
            </div>
            <Share fontSize="small"/>
        </Link>
        <CardContent className={classes.content}>
            {msgs.map((item, index)=>{
                return item.type === undefined ?
                <div key={index} className={classes.info}>
                    <div>{item.title}</div>
                    <strong>{item.num}</strong>
                    <div>
                        <span>
                            {item.conpareTo}
                        </span>
                        &nbsp;
                            {item.mark}
                        &nbsp;
                        <span className={classes.infovalue}>
                            {item.value}
                        </span>    
                    </div>
                </div>
                :
                <hr key={index} className={classes.seperate}/>
            })}
        </CardContent>
    </Card>
}
export default withStyles(styles)(Creator);