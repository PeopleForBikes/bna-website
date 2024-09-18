import type { ReactNode } from 'react';

import '@Styles/fonts.css';
import '@Styles/resets.css';
import '@Styles/base.css';
import '@Styles/layout.css';
import '@Styles/themes.css';
import '@Styles/components.css';
import '@Styles/utilities.css';


function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US">
      <head>
        {/* #Favicon.1 */}
        <link rel="icon" sizes="any" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml"  href="/favicon/icon.svg" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="favicon/manifest.webmanifest" />

        <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v1.10.1/mapbox-gl.css" />

        <style>@layer fonts, resets, theme, base, layout, components, utilities;</style>
      </head>
      <body id='body'>
        {children}
      </body>
    </html>
  );
}


export default RootLayout;
