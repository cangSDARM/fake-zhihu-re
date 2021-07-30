import React from "react";
import {Popper, Grow, Paper, ClickAwayListener} from "@material-ui/core";

/**
 * 用来包装Popper的 
 */
const PopperWrap = ({id, popper, anchorEl, children, popperclose, othersets})=>{
    return <div>
        <Popper open={popper} anchorEl={anchorEl} transition modifiers={{arrow: {enabled: true,}}} style={{zIndex: 1000000}} {...othersets}>
        {({ TransitionProps, placement }) => (
            <Grow
                {...TransitionProps}
                id={id}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
                <Paper>
                    <ClickAwayListener onClickAway={popperclose}>
                        {children}
                    </ClickAwayListener>
                </Paper>
            </Grow>
        )}
        </Popper>
    </div>
}
export default PopperWrap;