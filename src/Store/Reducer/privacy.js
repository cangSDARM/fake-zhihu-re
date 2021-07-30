import All from '../ActionConst';
import produce from 'immer';

const State = {
    router: '/home',
    userinfo: {
        img: "https://pic3.zhimg.com/b5a56387738877a0eb469979ce7f52f1_is.jpg",
        avatarmsg: [true, [false, true, false, false]],
        id: '001',
        notifaction: 1,
        messages: 2,
    }
};

const ReducerX = (prestate=State, action)=>{
    switch(action.type){
        case All.REDIRECT_TOLOGIN:
            return produce(prestate, draftState=>{
                draftState.roter = action.data
            });
        default:
            return prestate;
    }
}
export default ReducerX;