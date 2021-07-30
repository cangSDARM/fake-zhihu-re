import React from 'react';

import Share from '@material-ui/icons/ShareRounded';

import Card from '@material-ui/core/Card';
import {List, ListItem, ListItemText} from '@material-ui/core';

import {Link} from '../../../Components';

let btns = [
    {
        to: '/home',
        str: '我的收藏',
        icon: <Share />,
        num: 100
    },{
        to: '/home',
        str: '我关注的问题',
        icon: <Share />,
        num: 100
    },{
        to: '/home',
        str: '我的邀请',
        icon: <Share />,
        num: 100
    },{
        to: '/home',
        str: '我的余额',
        icon: <Share />
    },{
        to: '/home',
        str: '站务中心',
        icon: <Share />
    },{
        to: '/home',
        str: '版权服务中心',
        icon: <Share />
    }
]

const Actions = (props)=>{
    let {root} = props;

    return <Card className={root}>
        <List>
        {
            btns.map((item, key)=>{

                return <ListItem button key={key} component={Link} to={item.to}>
                    <Share />
                    <ListItemText
                        inset
                        primary={item.str}
                    />
                    {item.num}
                </ListItem>
            })
        }
        </List>
    </Card>
}

export default Actions;