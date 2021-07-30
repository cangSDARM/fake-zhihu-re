import React from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';

import { GridWarp } from '../Components';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import Right from './Right';
import Left from './Left';


let styles = theme=>({
    rightWarpper: {
        flexGrow: 1
    },
})
class Topics extends React.Component{
    render(){
        let { classes } = this.props;
        return <GridWarp wrap="nowrap">
            <Grid item lg={9} md={8} sm={7}>
                <Left/>
            </Grid>
            <Hidden xsDown>
                <Grid item className={classes.rightWarpper}>
                    <Right />
                </Grid>
            </Hidden>
        </GridWarp>
    }
}
export default withStyles(styles)(connect(null)(Topics));