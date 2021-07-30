import React from "react";
import { Grid, Card } from "@material-ui/core";

import { connect } from "react-redux";

import Follow from "./Components/Follow";
import AuthorInfo from "./Components/AuthorInfo";
import Content from "../EachCard/Components/Content";
import Buttons from "../EachCard/Components/Buttons";

import { withStyles } from "@material-ui/core";
let styles = theme => ({
  content: {
    paddingTop: "0",
  },
});

let TODO = {
  TODO: ["1. 啥也没做"],
};

class FromFollow extends React.Component {
  content = {
    time: "10分钟",
    nobody: true,
  };

  componentDidMount() {
    this.props.fetchNewContent();
  }

  handleClick = {
    content: () => {},
  };

  render() {
    let { classes } = this.props;
    return this.props.content.map((item, key) => {
      return (
        <Card className={this.props.classes.root} key={key}>
          <Follow content={{ user: item.followed, time: item.time }} />
          <AuthorInfo content={item.author} />
          {/* 主要内容 */}
          <Content
            content={item}
            handleClick={this.handleClick.content}
            root={classes.content}
          />

          {/* Buttons */}
          <Buttons info={item} />
        </Card>
      );
    });
  }
}

const mapState = (state, ownProps) => {
  return {
    content: state.publicReduce.followContent,
  };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    fetchNewContent(data) {
      dispatch({ type: "Fetch-New-FollowContent" });
    },
  };
};

export default withStyles(styles)(connect(mapState, mapDispatch)(FromFollow));
