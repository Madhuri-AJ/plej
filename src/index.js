import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
// import TagManager from 'react-gtm-module';
import App from './App';
import {history} from './_components/history';
import * as serviceWorker from './serviceWorker';


const trackingId = "UA-155076072-1";
ReactGA.initialize(trackingId, {standardImplementation:true});

// const tagManagerArgs = {
//     gtmId: 'GTM-XXXXXX'
// }

// TagManager.initialize(tagManagerArgs)

history.listen(location => {
    ReactGA.set({page : location.pathname});
    ReactGA.pageview(location.pathname);
})


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
