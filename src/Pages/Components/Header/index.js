import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { AppBar,Toolbar } from '@material-ui/core';
import { connect } from 'react-redux';

import Hidden from '@material-ui/core/Hidden';

import Logo from './logo';
import User from './user/';
import NavBar from './nav';
import Search from './searchin';
import { GridWarp } from '..';

let styles = theme=>({
    navwarpper: {
        flexGrow: 1,
        [theme.breakpoints.down(800)]:{
            display: 'none'
        }
    },
    search: {
        display: "inline-flex",
        flexGrow: 3,
    },
    user: {
        flexGrow: 1,
        display: "inline-flex",
        justifyContent: "space-around",
        alignItems: "center",
        minWidth: 120
    }
});

let TODO = {
    TODO:[
        "1. Grid还是有问题. 媒体查询修改一下",
        "2. 数据处理"
    ]
}

let handleInput = (e)=>{
    console.log(e.target);
}
const Header = (props)=>{
    let { usingHeader, classes } = props;
    return(
        <AppBar position="sticky" color="primary" style={{
            display: usingHeader ? 'inherit' : 'none',
            top: 0
        }}>
            <Toolbar>
                <GridWarp alignItems="center">
                    <div className={classes.navwarpper}>
                        <Logo />
                        <NavBar />
                    </div>
                    <div className={classes.search}>
                        <Search handleInput={handleInput} className={classes.search}/>
                    </div>
                    <div className={classes.user}>
                        <User />
                    </div>
                </GridWarp>
            </Toolbar>
        </AppBar>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    usingHeader: PropTypes.bool.isRequired,
};

export default withStyles(styles)(connect(state=>({
    usingHeader: state.publicReduce.usingHeader,
    login: state.publicReduce.login
}), null)(Header));