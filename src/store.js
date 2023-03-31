import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore } from 'redux';
/* createStore 부분이 deprecated 되어있는데 구동하는데는 문제는 없고,
   밑줄부분을 없애려면 이름을 명시적으로 legacy_createStore as createStore를 붙여주면 없어진다.
   deprecated를 시킨 이유는 향후에는 @reduxjs/toolkit를 이용해서 사용하라고 명확하게 권고하기 위해서 
   없애지는 않지만 표시를 해두었다고함..
*/
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(ReduxThunk))
);

export default store;