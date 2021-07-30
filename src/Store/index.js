import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './Reducer';

//使用Redux-Dev-Tools
let composeEnhancers =
  typeof window === 'object' &&
  	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
    //compose函数需要从redux中引出来

let enhancer = composeEnhancers(
    //applyMiddleware(thunk),			//使用中间件
    // other store enhancers if any
);

const store = createStore(
    reducer,
    enhancer
);
export default store;