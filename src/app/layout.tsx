import '@Styles/fonts.css';
import '@Styles/resets.css';
import '@Styles/base.css';
import '@Styles/layout.css';
import '@Styles/themes.css';

import { ReactNode } from 'react';
import { Footer, Header } from '@Components';


function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html data-theme="light" lang="en-US">
      <head>
        {/* #Favicon.1 */}
        <link rel="icon" sizes="any" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml"  href="/favicon/icon.svg" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="favicon/manifest.webmanifest" />

        <style>@layer fonts, resets, base, layout, page, theme;</style>
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}


export default RootLayout;
