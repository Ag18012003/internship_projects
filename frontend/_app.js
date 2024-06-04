import React from 'react';
import NextApp from 'next/app';
import { BrowserRouter } from 'react-router-dom';

class MyApp extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <BrowserRouter>
        <Component {...pageProps} />
      </BrowserRouter>
    );
  }
}

export default MyApp;