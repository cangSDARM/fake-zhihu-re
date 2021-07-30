import React from 'react';

import Share from '@material-ui/icons/ShareRounded';


import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core';

import {Link} from '../../../Components';

let styles = theme=>({
    item: {
        ...theme.navlink,
        width: '33%',
        margin: '10px 0',
        '& span': {
            flexDirection: 'column',
            alignItems: 'center',
            flexWrap: 'wrap',
        },
    }
});

let btns = [
    {
        to: '/home',
        str: 'Live',
        icon: <Share />
    },{
        to: '/home',
        str: '书店',
        icon: <Share />
    },{
        to: '/home',
        str: '圆桌',
        icon: <Share />
    },{
        to: '/home',
        str: '专栏',
        icon: <Share />
    },{
        to: '/home',
        str: '付费咨询',
        icon: <Share />
    }
]

const Service = (props)=>{
    let {classes, root} = props;
    return <Card className={root}>
        {
            btns.map((item, key)=>{
                return <Link
                    to={item.to}
                    className={classes.item}
                    color="primary"
                    key={key}
                >
                    {item.icon}
                    <span style={{display: 'block'}}>
                    {item.str}
                    </span>
                </Link>
            })
        }
    </Card>
}

export default withStyles(styles)(Service);