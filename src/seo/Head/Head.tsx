import NextHead from 'next/head';
import React from 'react';

import { GoogleAnalytics } from '../GoogleAnalytics/GoogleAnalytics';

export interface HeadProps {
  title?: string;
  description?: string;
  ogImage?: string;
}

export const Head = (props: HeadProps) => {
  const {
    ogImage = 'https://nftstorage.link/ipfs/bafybeigzvftozdrhwmmz4ajbmxodyrfv3kiu5icm37getmlnpoktsdfknq/BANNER.png',
    title = 'BlockRock',
    description = 'Elite Web3 investment firm',
  } = props;

  return (
    <NextHead>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="icon"
        href="https://bafybeidag2yxnvyqp4sysrjin6omzuaieavjzhewdwpqndmqy73atxc7dy.ipfs.nftstorage.link/favicon.ico"
      />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <GoogleAnalytics />
    </NextHead>
  );
};
