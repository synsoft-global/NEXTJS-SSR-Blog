import Head from 'next/head'
import { Box } from '@mui/material'

import Header from './components/header/Header.component'
import Footer from './components/footer/Footer.component'
import ErrorBoundary from '@/components/errorBoundary/ErrorBoundary.component'
import NProgress from '@/components/nProgress/NProgress.component'
import { LayoutProps } from './Layout.type'



export default function Layout(props: LayoutProps) {
  const { title, header, footer, children } = props


  return <>
    <Head>
      <title>{title ? `${title} | NewsX` : 'NewsX - Global News'}</title>
    </Head>

    {header !== false && <Header />}
    <Box component='main' flex={1}>
      <ErrorBoundary>
        {children}
      </ErrorBoundary>
    </Box>
    {footer !== false && <Footer />}

    <NProgress />
  </>
}
