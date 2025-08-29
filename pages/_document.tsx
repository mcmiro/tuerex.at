import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          {/* Other head elements go here */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600&family=Lexend:wght@400&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
