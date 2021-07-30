import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import UserMsg from './usermsg';
import Notifaction from './notifaction';
import Messages from './messages';

/**TODO:
 * 1. 这三个整体结构相同，之后尝试改造
 * 2. Notification下的Tabs要变成组件出来
 */
const User = (props)=>{
    let { userinfo } = props;
    let { notifaction, messages } = userinfo;
    return <Fragment>
        <Notifaction notifaction={notifaction} history={props.history}/>
        <Messages messages={messages} history={props.history}/>
        <UserMsg userinfo={userinfo} history={props.history}/>
    </Fragment>
}

export default connect( 
    state=>({
        userinfo: state.privacyReduce.userinfo,
    }),
    null
)(withRouter(User));