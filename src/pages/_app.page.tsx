import Head from 'next/head'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import { Analytics } from '@vercel/analytics/react'

import Layout from '@/layout/Layout.component'
import config from '@/config/config.json'
import { theme } from '@/styles/theme'
import { AppProps } from './_app.type'
import '@/styles/globals.css'



export default function App(props: AppProps) {
  const { Component, pageProps } = props
  const layoutProps = Component.layoutProps


  return <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content="news, breaking news, current events, global news, technology, politics, entertainment, updates" />
      <meta name="description" content="Stay informed with the latest news and breaking stories on NewsX. Explore comprehensive coverage, and timely updates on global events, technology, politics, entertainment, and more." />

      <meta property="og:image" content={`${config.basePath}/home-og-image.jpg`} />
      <meta property="og:title" content='NewsX - Global News' />
      <meta property="og:description" content='Stay informed with the latest news and breaking stories on NewsX. Explore comprehensive coverage, and timely updates on global events, technology, politics, entertainment, and more.' />

      <link rel="shortcut icon" href={`${config.basePath}/favicon.ico`} type="image/x-icon" />
      <link rel="apple-touch-icon" href={`${config.basePath}/apple-touch-icon.png`} sizes="180x180" />
    </Head>

    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <Analytics />
      <Layout {...layoutProps}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
}