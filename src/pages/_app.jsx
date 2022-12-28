import '../styles/globals.css';
import { ThemeProvider } from 'context/theme'
import '../styles/globals.css';
import Head from 'next/head';
import config from '../../site.config.js';

import Header from 'components/Static/Header';
import Footer from 'components/Static/Footer';

function MyApp({ Component, pageProps }) {
 
  return <>
      <Head>
          <title>{config.siteMetadata.title}</title>
          <link rel="icon" href={config.siteMetadata.favicon} type="image/x-icon" />
        </Head>
        <ThemeProvider>
        <main>
          <Header />
          <Component {...pageProps} />
          <Footer />
          {/* purple color layout */}
          <div className="color-layout background-layout position-fixed" />
        </main>
        </ThemeProvider>
  </>
}

export default MyApp
