import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

let styles = theme=>({
})

const Logo = (props)=>{
    return <Typography variant="h6" color="inherit" className={"inlineflex"}>
        BiHu
    </Typography>
}

Logo.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Logo);