import All from "../ActionConst";
import produce from "immer";

const State = {
  login: false,
  usingHeader: true,

  content: [],
  followContent: [],
  hotContent: [],
};

const ReducerX = (prestate = State, action) => {
  switch (action.type) {
    case "Fetch-New-Content":
      return produce(prestate, draftState => {
        draftState.content = mokeData(info); //first fetch
      });
    case "Fetch-New-FollowContent":
      return produce(prestate, draftState => {
        draftState.followContent = mokeData(followInfo);
      });
    case "Fetch-New-HotContent":
      return produce(prestate, draftState => {
        draftState.hotContent = mokeData(hotInfo);
      });
    default:
      return prestate;
  }
};
export default ReducerX;

//template for content
let info = {
  title: "为什么计算机人才这么少?",
  to: "/home",
  content: `start:必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。end:可选。规定从何处结束选取。该参数是数组片断结束处的数组下标。如果没有指定该参数，那么切分的数组包含从 start 到数组结束的所有元素。`,
  like: "9990",
  comment: "9999",
  type: "answer",
  imgsrc: "",
};

let followInfo = {
  ...info,
  followed: "vzch",
  time: "10 years ago",
  author: {
    avatar: "",
    usrname: "匿名用户",
    usrtag: "1",
    usrdesc: "XX在读, XX博士导师",
  },
};

let hotInfo = {
  ...info,
  hot: 111,
};

const mokeData = info => {
  let conf = [];
  for (let i = 0; i < 10; i++) {
    conf.push(info);
  }

  return conf;
};
