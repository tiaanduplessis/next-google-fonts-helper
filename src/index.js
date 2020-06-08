import React, { useMemo, memo } from 'react';

const GoogleFontsHelper = memo(
  ({
    fonts = [],
    preconnect = 'https://fonts.gstatic.com',
    preload = true,
    base = 'https://fonts.googleapis.com/css2',
    display = 'swap',
  } = {}) => {
    const str = useMemo(() => {
      const fontsFamilies = fonts.map((family) => `family=${family}`).join('&');
      return `${base}?${fontsFamilies}&display=${display}`;
    }, [fonts]);

    return [
      <link rel="preconnect" href={preconnect} crossorigin />,
      preload && <link rel="preload" as="style" href={str} />,
      <link rel="stylesheet" href={str} media="print" onload="this.media='all'" />,
      <noscript>
        <link rel="stylesheet" href={str} />
      </noscript>,
    ];
  }
);

export default GoogleFontsHelper;
