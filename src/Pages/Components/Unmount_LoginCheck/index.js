import React from 'react';
import {connect} from 'react-redux';
import { Redirects } from '../../../Store/actionFactory';

/**FIXME:
 * 1. 应该用高阶组件而不是函数组件
 * 2. 但高阶组件要求只传Component
 * 3. 现在会dispatch两次
 */

const LoginCheck = ({children, login, redirect})=>{
    return (login ?
        {children}
    : redirect(window.location.pathname)
    )
}

export default connect(
    state=>({
        login: state.reducerx.login,
        router: state.redirector.router
    }),
    dispatch=>({
        redirect: (data)=> Redirects.ToLogin(dispatch, data),
    })
)(LoginCheck);
