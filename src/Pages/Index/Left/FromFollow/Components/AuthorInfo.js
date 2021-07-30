import React from "react";
import { Grid } from "@material-ui/core";

import { withStyles } from "@material-ui/core";

import AvatarWithPop from "../../EachCard/Components/Comment/Avatar";

import Share from "@material-ui/icons/ShareRounded";

let styles = theme => ({
  root: {
    padding: "5px 16px",
    display: "flex",
    alignItems: "center",
  },
  avatar: {
    marginLeft: 0,
    marginRight: 10,
  },
});

const AuthorInfo = props => {
  let { classes, content } = props;

  return (
    <div className={classes.root}>
      <AvatarWithPop
        comment={{ avatar: content.avatar }}
        root={classes.avatar}
      />
      {content.usrname}
      {content.usrtag.toString === "1" && <Share />}，{content.usrdesc}
    </div>
  );
};

export default withStyles(styles)(AuthorInfo);
