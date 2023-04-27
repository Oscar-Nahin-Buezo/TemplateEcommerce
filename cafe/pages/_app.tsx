import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../src/components/navar/Navbar';
import Footer from '@/src/components/footer/Footer';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
