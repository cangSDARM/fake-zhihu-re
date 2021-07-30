import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import { Header } from './Pages/Components/';
import Index from './Pages/Index/';
import Topic from './Pages/Topics/';

const Routed = (props)=>(
    <HashRouter>
        <React.Fragment>
            <Header />
            <div style={{display: 'flex', margin: '10px 0'}}>
                <Switch>
                    <Route exact path="/" component={()=>
                        <Redirect to="/home"/>
                    }/>
                    <Route exact path="/home" component={Index}></Route>
                    <Route path="/topic" component={Topic}></Route>
                    <Route path="/signin" component={()=>{
                        window.location.href = "http://cangsdarm.github.io/fake-zhihu/";
                        return null
                    }} />
                    <Route path="*" component={()=>{
                        return <div>
                            404
                        </div>
                    }}/>
                </Switch>
            </div>
        </React.Fragment>
    </HashRouter>
)
export default Routed;