import React from "react";
import { withStyles } from "@material-ui/core";

import {Link} from '../../../Components';

let styles = theme=>({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& a:hover':{
            textDecoration: 'none'
        },
        padding: '15px 10px'
    }
});

const Topic = (props)=>{
    let {classes, topic, root} = props;
    return <div className={[root, classes.root].join(' ')}>
        <span>
            <Link to="www.zhihu.com" target="_blank" style={{float:'left'}}>
                <img style={{
                    width: '40px', height: '40px',
                    marginRight: '16px',
                    borderRadius: '4px'
                }} src="https://pic2.zhimg.com/f07808da5625fef3607f8b75b770349f_m.jpg" alt="pop"/>
            </Link>
            <Link to="www.zhihu.com" target="_blank" style={{
                fontWeight: 800,
                lineHeight: '44px'
            }}>{topic}</Link>
        </span>
        <div style={{
            display: 'inline-flex',
            textAlign: 'right',
            padding: '0 0 15px'
        }}>
            <Link to="www.zhihu.com" style={{
                margin: '0 8px'
            }}>热门排序</Link>
              |  
            <Link to="www.zhihu.com" style={{
                margin: '0 8px'
            }}>时间排序</Link>
        </div>
    </div>
}

export default withStyles(styles)(Topic);