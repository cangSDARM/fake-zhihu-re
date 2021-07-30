import React from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core";

import { Typography, Card } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";

import { TabWarpper } from "../../Components/";

import EachCard from "./EachCard/";
import HotLine from "./HotLine/";
import FromFollow from "./FromFollow";

let styles = theme => ({
  card: {
    width: "100%",
    textAlign: "center",
    minHeight: 40,
  },
  img: {
    position: "absolute",
    width: 40,
    height: 40,
    left: 0,
    top: 0,
  },
  tabsclass: {
    maxWidth: 500,
  },
  tabclass: {
    minWidth: 0,
  },
});
class Left extends React.Component {
  tabs = [
    {
      title: "推荐",
    },
    {
      title: "关注",
    },
    {
      title: "热榜",
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  handleChange = (event, value) => {
    this.setState({ value });
  };
  renderTabs = () => {
    return <div></div>;
  };
  render() {
    let { classes } = this.props;
    let { value } = this.state;
    return (
      <Card>
        <TabWarpper
          tabs={this.tabs}
          value={value}
          handleChange={this.handleChange}
          classes={classes}
        />
        {value === 0 && <EachCard />}
        {value === 1 && <FromFollow />}
        {value === 2 && <HotLine />}
        <Divider variant="fullWidth" />
      </Card>
    );
  }
}
export default withStyles(styles)(connect(null)(Left));
