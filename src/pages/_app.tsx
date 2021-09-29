import '../styles/app.css';

import { AppProps } from 'next/app';

import { AppHeader } from '../components/AppHeader';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <AppHeader />
    <Component {...pageProps} />
  </>
);

export default MyApp;
