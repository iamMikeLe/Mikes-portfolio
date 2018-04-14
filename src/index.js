import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

//reducers which we merge into one using combineReducers
/* import pageOneReducer from "./store/reducers/pageOne-reducer"; */
import pageTwoReducer from "./store/reducers/pageTwo-reducer";

//This will merge all our reducers into one
const rootReducer = combineReducers({
/*     pOne: pageOneReducer, */
    pTwo: pageTwoReducer
});

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
