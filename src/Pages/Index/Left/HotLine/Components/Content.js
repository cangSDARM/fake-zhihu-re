import React from "react";
import { Button } from "@material-ui/core";

import Share from "@material-ui/icons/ShareRounded";

import { withStyles } from "@material-ui/core";

import { Link } from "../../../../Components";
import Frame from "../../EachCard/Components/Frame";
import ShareButton from "../../EachCard/Components/Share";
import Image from "./Image";

let styles = theme => ({
  root: {
    flex: "1",
    display: "flex",
    position: "relative",
    padding: "16px",
  },
  //框架(标题)
  frame: {
    flex: "1",
    position: "relative",
    overflow: "hidden",
    padding: "0",
  },
  //内容文字
  content: {
    color: "inherit",
    display: "box",
    boxOrient: "vertical",
    lineHeight: "16px",
    overflow: "hidden",
    wordBreak: "break-all",
    whiteSpace: "normal",
    textOverflow: "ellipsis",
    lineClamp: 2,
  },
});

class Content extends React.Component {
  render() {
    let { classes, content } = this.props;
    return (
      <div className={classes.root}>
        <Frame content={content} root={classes.frame}>
          <Link
            to={content.to}
            className={classes.content}
            target="_blank"
            underline="none"
          >
            {content.content}
          </Link>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              display: "flex",
              alignItems: "center",
              //margin: '10px 5px'
            }}
          >
            <span
              style={{
                marginRight: "20px",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              <Share />
              {`${content.hot} 万热度`}
            </span>
            <ShareButton />
          </div>
        </Frame>
        <Image src={content.imgsrc} to={content.to} />
      </div>
    );
  }

  handleClick = {
    hotClick: () => {
      console.log("hot");
    },
  };
}

export default withStyles(styles)(Content);
