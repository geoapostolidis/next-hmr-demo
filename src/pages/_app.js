import '@/styles/globals.css'
import withTheme from '@/theme'
import Head from 'next/head'
import { appWithTranslation, i18n } from 'next-i18next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import i18nextConfig from '../../next-i18next.config';

if (process.env.NODE_ENV !== 'production') {
  if (typeof window !== 'undefined') {
    const { applyClientHMR } = require('i18next-hmr/client');
    applyClientHMR(() => i18n);
  } else {
    const { applyServerHMR } = require('i18next-hmr/server');
    applyServerHMR(() => i18n);
  }
}

function App({ Component, pageProps }) {
  
  const getLayout = Component.getLayout || ((page) => page);

  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    const storedLocale = localStorage.getItem('locale');

    if (!storedLocale || storedLocale !== locale) {
      localStorage.setItem('locale', locale);
    }
  }, [locale]);

  useEffect(() => {
    const handleScroll = () => {
      const body = document.body;
      body.classList.add('show-scrollbar');
      body.classList.remove('hide-scrollbar');
  
      clearTimeout(window.scrollTimeout);
      window.scrollTimeout = setTimeout(() => {
        body.classList.remove('show-scrollbar');
        body.classList.add('hide-scrollbar');
      }, 2000);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return withTheme(getLayout(
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Component {...pageProps} />
    </>
  ))
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
}

export default appWithTranslation(App, i18nextConfig);
