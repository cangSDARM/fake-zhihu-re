import {combineReducers} from 'redux';

import publicReduce from './public';
import privacyReduce from './privacy';

export default combineReducers({
    publicReduce,
    privacyReduce
});