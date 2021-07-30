import All from './ActionConst';
import axios from 'axios';
import React from 'react';
import Redirect from 'react-router-dom/Redirect';

export const Redirects = {
    ToLogin: (dispatch, data)=>{
		if(data === "/login"){
			console.error("You are in login already!");
			return <div></div>
		}
		dispatch({
			type: All.REDIRECT_TOLOGIN,
			...data
		});
		console.log(data);
		console.log("redirect to login");
		return <Redirect to="/login" />;
	}
}
