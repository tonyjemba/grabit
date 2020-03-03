import React from 'react';
import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import store from '../redux/store'
import tachyons from 'tachyons';

class MyApp extends App {

  

  render() {
      //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
      const {Component, pageProps, store} = this.props;

      return (
          <Provider store={store}>
              <Component {...pageProps}/>
          </Provider>
      );
  }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(MyApp);