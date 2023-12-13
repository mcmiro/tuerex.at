import React from 'react';
import type { AppProps } from 'next/app';
import { GoogleFonts } from 'next-google-fonts';
import 'styles/globals.css';
import 'styles/styles.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600&family=Lexend:wght@400&display=swap" />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
