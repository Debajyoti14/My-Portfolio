import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en-GB">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          />
          <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>
          <link rel="icon" href="/Picture.jpg" type="image/x-icon" />
          <meta name="description" content="Debajyoti Saha - Software Developer specializing in Cloud, DevOps, Backend, and Web Development. Explore my projects and get in touch." />
          <meta name="author" content="Debajyoti Saha" />
          <meta property="og:title" content="Debajyoti Saha | Portfolio" />
          <meta property="og:description" content="Software Developer specializing in Cloud, DevOps, Backend, and Web Development." />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/Picture.jpg" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Debajyoti Saha | Portfolio" />
          <meta name="twitter:description" content="Software Developer specializing in Cloud, DevOps, Backend, and Web Development." />
        </Head>

        <body>
          <Main />
          <NextScript />
          <div id="modal-root" />
        </body>
      </Html>
    );
  }
}
