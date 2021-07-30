import React, { Fragment, PureComponent } from 'react'
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';

import { grid } from "../../settings";
import GradWarp from '../Components/Grids';
import Left from './Left';
import Right from './Right';
import Grid from '@material-ui/core/Grid';

let styles = theme=>({
    rightWarpper: {
        flexGrow: 1
    },
    right: {
        marginLeft: 15,
        '& > div':{
            marginBottom: 10
        }
    },
})
class Index extends PureComponent{
    render(){
        let { classes } = this.props;
        return <GradWarp wrap="nowrap">
            <Grid item lg={9} md={8} sm={7}>
                <Left/>
            </Grid>
            <Hidden xsDown>
                <Grid item className={classes.rightWarpper}>
                    <Right root={classes.right}/>
                </Grid>
            </Hidden>
        </GradWarp>
    }
}
export default withStyles(styles)(connect(null)(Index));