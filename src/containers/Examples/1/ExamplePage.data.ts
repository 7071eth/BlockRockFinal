import { GetStaticProps } from 'next';

export interface GameAsset {
  src: string;
  name: string;
}

export interface LogoAsset {
  src: string;
  name: string;
}

export const getStaticProps: GetStaticProps = () => {
  const gameAssets: GameAsset[] = [
    {
      src: 'https://nftstorage.link/ipfs/bafybeiezr3g4bph76sxhiccqz72vquzdzsg7cjscp4ivgyf4wca24h7tdi/1.jpg',
      name: 'PHASE 1',
    },
    {
      src: 'https://nftstorage.link/ipfs/bafybeiezr3g4bph76sxhiccqz72vquzdzsg7cjscp4ivgyf4wca24h7tdi/2.jpg',
      name: 'PHASE 2',
    },
    {
      src: 'https://nftstorage.link/ipfs/bafybeiezr3g4bph76sxhiccqz72vquzdzsg7cjscp4ivgyf4wca24h7tdi/3.jpg',
      name: 'PHASE 3',
    },

    // {
    //   src: 'https://res.cloudinary.com/dpv0ukspz/image/upload/v1662114954/spider_man_miles_morales_kx1klv.jpg',
    //   name: 'PHASE 4',
    // },
    // {
    //   src: 'https://res.cloudinary.com/dpv0ukspz/image/upload/v1662114956/fifa23_kkme4i.jpg',
    //   name: 'PHASE 5',
    // },
    // {
    //   src: 'https://res.cloudinary.com/dpv0ukspz/image/upload/v1662114954/ghost-of-tsushima_tsjwzk.jpg',
    //   name: 'Ghost of Tsushima',
    // },
  ];

  const logoAssets: LogoAsset[] = [
    {
      name: 'circle',
      src: 'https://res.cloudinary.com/dpv0ukspz/image/upload/v1662115291/circle-nobg-min_rfxukx.png',
    },
    {
      name: 'square',
      src: 'https://res.cloudinary.com/dpv0ukspz/image/upload/v1662115289/square-nobg-min_mfzkuk.png',
    },
    {
      name: 'cross',
      src: 'https://res.cloudinary.com/dpv0ukspz/image/upload/v1662115289/cross-nobg-min_uxroih.png',
    },
    {
      name: 'triangle',
      src: 'https://res.cloudinary.com/dpv0ukspz/image/upload/v1662115289/triangle-nobg-min_mrwsbp.png',
    },
  ];

  return {
    props: {
      gameAssets,
      logoAssets,
    },
  };
};
