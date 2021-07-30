import React, {Fragment} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button,Paper,InputBase,IconButton,Divider,InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

let styles = theme=>({
    searchwapper:{
        padding: '2px 4px 2px 10px',
        alignItems: 'center',
        maxWidth: 600,
        minWidth: 260,
        height: 32,
        boxSizing: 'border-box',
    },
    iconbutton:{
        padding: 5,
    },
    divider: {
        width: 1,
        height: 24,
        margin: '4px 8px',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
    askquestion:{
        height: 32,
        lineHeight: 1,
        borderRadius: 3,
        boxShadow: 'none',
        minWidth: 54,
        padding: '6px 12px'
    },
});

const Search = (props)=>{
    let { classes } = props;
    return <Fragment>

        <Grid xs={12} sm={11}>
            <Paper className={classes.searchwapper} elevation={1}>
                <InputBase
                    placeholder="考公务员要怎么准备"
                    fullWidth 
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="Toggle password visibility"
                                onClick={props.handleInput}
                                className={classes.iconbutton}
                            >
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </Paper>
        </Grid>
        <Hidden smDown>
            <Divider className={classes.divider} />
            <Button variant="contained" className={classes.askquestion}>提问</Button>
        </Hidden>
    </Fragment>
}
export default withStyles(styles)(Search);