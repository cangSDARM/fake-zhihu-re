import React from 'react';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { grid } from "../../../settings.json";

const GardWarp = (props)=>{

    return <React.Fragment>
        <Hidden mdDown>
            <Grid item xl={grid.xl} sm={grid.sm} lg={grid.lg} md={grid.md}/>
        </Hidden>
        <Grid container item xl sm lg md style={{position: 'relative'}} justify="space-between" {...props}>
            {props.children}
        </Grid>
        <Hidden mdDown>
            <Grid item xl={grid.xl} sm={grid.sm} lg={grid.lg} md={grid.md}/>
        </Hidden>
    </React.Fragment>
}
export default GardWarp;