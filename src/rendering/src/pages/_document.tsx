// TODO: Remove the below eslint disable when eslint-config-next is updated to support tsx files for that validation
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <script
            type="text/javascript"
            src="https://cdn-prod.securiti.ai/consent/auto_blocking/83bbef3c-9911-47cd-b325-8725673c2ab8/cfbaed94-437e-437f-b36c-4d67cd5254b1.js"
            async
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script
            defer
            src="https://sdks.shopifycdn.com/js-buy-sdk/v2/latest/index.umd.min.js"
          ></script>
          <script
            type="text/javascript"
            async
            src="https://cdn.whisk.com/sdk/shopping-list.js"
          ></script>
          <script
            type="text/javascript"
            src="//destinilocators.com/mccormickcompany/pdpwidget/install/"
            async
          ></script>
          <script
            type="text/javascript"
            src="//ui.powerreviews.com/stable/4.1/ui.js"
            async
          ></script>
          <script
            type="text/javascript"
            src="https://connect.facebook.net/en_US/all.js"
            async
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
