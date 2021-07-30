import React from 'react';

import Share from '@material-ui/icons/ShareRounded';

import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core';

import {Link} from '../../../Components';

let styles = theme=>({
    item: {
        ...theme.navlink,
        flexWrap: 'wrap',
        flex: '1 1 auto',
    }
});

let btns = [
    {
        to: '/home',
        str: '写回答',
        icon: <Share />
    },{
        to: '/home',
        str: '写文章',
        icon: <Share />
    },{
        to: '/home',
        str: '写想法',
        icon: <Share />
    }
]

let handelClick = (event, to)=>{

}

const Writes = (props)=>{
    let {classes, root} = props;
    return <Card className={root}>
        {
            btns.map((item, key)=>{
                return <Link
                    to={item.to}
                    title={item.str}
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

export default withStyles(styles)(Writes);