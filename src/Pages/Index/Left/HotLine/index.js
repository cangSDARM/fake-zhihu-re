import React from "react";
import { Card } from "@material-ui/core";

import { connect } from "react-redux";

import { withStyles } from "@material-ui/core";

import Index from "./Components/Index";
import Content from "./Components/Content";

let styles = theme => ({
  root: {
    display: "flex",
    alignItems: "baseline",
  },
});

class HotLine extends React.Component {
  componentDidMount() {
    this.props.fetchNewContent();
  }

  render() {
    let { classes } = this.props;
    return this.renderItem();
  }
  renderItem = () => {
    return this.props.content.map((item, key) => {
      return (
        <Card className={this.props.classes.root} key={key}>
          <Index index={key + 1} />
          <Content content={item} />
        </Card>
      );
    });
  };
}

const mapState = (state, ownProps) => {
  return {
    content: state.publicReduce.hotContent,
  };
};

const mapDispatch = (dispatch, ownProps) => {
  return {
    fetchNewContent(data) {
      dispatch({ type: "Fetch-New-HotContent" });
    },
  };
};

export default withStyles(styles)(connect(mapState, mapDispatch)(HotLine));
