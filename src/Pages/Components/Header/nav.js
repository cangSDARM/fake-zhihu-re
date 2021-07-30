import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import { header } from '../../../settings.json';

import {Link} from '../../Components';

let styles = theme=>({
    navbar:{
        padding: '0 15px',
        display: 'inline-flex',
        justifyContent: 'space-around',
        margin: '0 28px',
        fontSize: 16,
    },
    navitem:{
        padding: '0 12px',
        lineHeight: '32px',
    },
});

const NavBar = (props)=>{
    let { classes } = props;
    return <nav
        component='nav'
        role="navigation"
        className={classes.navbar}>
        {
            RanderNavItems(classes)
        }
    </nav>
}

let RanderNavItems = (classes)=>{
    let { navitem } = header;

    return (
        navitem.map((item, index)=>(
            <Link color="inherit" underline="none" className={classes.navitem} to={item.to} key={index}>{item.name}</Link>
        ))
    )
}
export default withStyles(styles)(NavBar);