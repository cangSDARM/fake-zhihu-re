import React from "react";
import { Grid } from "@material-ui/core";

import { withStyles } from "@material-ui/core";

import { Link } from "../../../../Components";

let styles = theme => ({
  root: {
    padding: "10px 16px 5px",
  },
});

let TODO = {
  TODO: ["1. Poppor没做。需要另一个地方的做了再引用"],
};

const Follow = props => {
  let { classes, content } = props;
  return (
    <div className={classes.root}>
      <Link to="#">{content.user}</Link>
      {`赞同了回答 · ${content.time}`}
    </div>
  );
};

export default withStyles(styles)(Follow);
