import '../styles/globals.css'
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DefaultSeo } from 'next-seo';

// import your default seo configuration
import SEO from '../next-seo.config';
import React from 'react'
import App from 'next/app'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return ( 
      <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} /> 
      </>
    )
  }
}

export default MyApp