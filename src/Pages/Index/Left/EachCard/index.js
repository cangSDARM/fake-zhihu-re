import React from "react";

import { Card } from "@material-ui/core";
import Content from "./Components/Content";
import Buttons from "./Components/Buttons";

import { connect } from "react-redux";

import { withStyles } from "@material-ui/core";

let TODO = {
  TODO: "1. 拆分工具函数",
  FIXME: "1. React.createPortal没有, 是什么问题?",
};

let styles = theme => ({});

let info = {
  title: "为什么计算机人才这么少?",
  to: "/home",
  peple: "somebody",
  content: `start:必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。end:可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。`,
  like: "9990",
  comment: "9999",
  type: "answer",
  imgsrc: "",
};

class EachCard extends React.Component {
  componentDidMount() {
    this.props.fetchNewContent();
  }

  handleClick = {
    content: e => {
      //TODO: 展开
    },
  };
  render() {
    let { classes } = this.props;

    return this.renderCard(this.props.content);
  }

  renderCard = info => {
    return (
      info &&
      info.map((item, key) => {
        return (
          <Card key={key}>
            {/* 主要内容 */}
            <Content content={item} handleClick={this.handleClick.content} />

            {/* Buttons */}
            <Buttons info={item} />
          </Card>
        );
      })
    );
  };
}

const mapState = (state, ownProps) => ({
  content: state.publicReduce.content,
});

const mapDispatch = (dispatch, ownProps) => {
  return {
    fetchNewContent(data) {
      dispatch({ type: "Fetch-New-Content" });
    },
  };
};

export default withStyles(styles)(connect(mapState, mapDispatch)(EachCard));
