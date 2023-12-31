import React from 'react';
import Link from 'next/link';

import { PreloadImage } from 'components/PreloadImage/PreloadImage';
import { LinkHandler } from 'components/LinkHandler/LinkHandler';

import * as S from './CopyInfo.styles';
import logoSrc from './images/logo.svg';

interface Props {
  repoHref?: string;
}

export const CopyInfo = (props: Props) => {
  const { repoHref = 'https://www.npmjs.com/package/react-just-parallax' } = props;

  return (
    <>
      <S.GithubWrapper>
        <LinkHandler isExternal elHref={repoHref}>
          <S.GithubLink>DISCORD</S.GithubLink>
        </LinkHandler>
      </S.GithubWrapper>
      <S.AuthorWrapper>
        Connect us on 
        <LinkHandler isExternal elHref="https://twitter.com/j0ker0x">
          <S.AuthorLink>@BlockRock</S.AuthorLink>
        </LinkHandler>
      </S.AuthorWrapper>
      <Link href="/" passHref>
        <S.LogoWrapper>
          <PreloadImage shouldContain imageSrc={logoSrc as string} alt="React Just Parallax" />
        </S.LogoWrapper>
      </Link>
    </>
  );
};
