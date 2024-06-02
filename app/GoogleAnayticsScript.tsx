import Script from 'next/script';
import React from 'react';

const GoogleAnayticsScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-YHPWLP5QVB"
      />
      <Script id='google-analytics'>
        {`window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments);
      }
        gtag("js", new Date());

        gtag("config", "G-YHPWLP5QVB");`}
      </Script>
    </>
  );
};

export default GoogleAnayticsScript;