import styled, { css } from 'styled-components';

import { media } from 'utils/media';
import { underline } from 'utils/sharedStyled';

export const Container = styled.div`
  width: 100%;
  position: relative;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.12);
  margin-bottom: 10rem;
  padding: 2.5rem;

  ${media.tablet} {
    padding: 7rem;
  }
`;

export const Title = styled.h2`
  text-align: left;
  font-weight: 800;
  font-size: 25px;

  ${media.tablet} {
    font-size: 30px;
  }
`;

export const Assets = styled.img`
  width:100px;
  height:100px;
  background:#2b2b2b;
  background-image:url(https://nftstorage.link/ipfs/bafybeihybryvz667nxglx3gnrwbyxkmy74mfhvsng6uy4cm5m6yims4kuu/assets.png);
  background-size: cover;
 
  
  
  
  ${media.tablet} {
    width:100px;
    height:100px;
    background:#2b2b2b;
    background-image:url(https://nftstorage.link/ipfs/bafybeihybryvz667nxglx3gnrwbyxkmy74mfhvsng6uy4cm5m6yims4kuu/assets.png);
    background-size: cover;
    
  }
`;
export const Handshake = styled.img`
  width:100px;
  height:100px;
  background:#2b2b2b;
  background-image:url(https://nftstorage.link/ipfs/bafybeihybryvz667nxglx3gnrwbyxkmy74mfhvsng6uy4cm5m6yims4kuu/handshake.png);
  background-size: cover;

  
  ${media.tablet} {
    width:100px;
    height:100px;
    background:#2b2b2b;
    background-image:url(https://nftstorage.link/ipfs/bafybeihybryvz667nxglx3gnrwbyxkmy74mfhvsng6uy4cm5m6yims4kuu/handshake.png);
    background-size: cover;
  }
`;
export const Tax = styled.img`
  width:100px;
  height:100px;
  background:#2b2b2b;
  background-image:url(https://nftstorage.link/ipfs/bafybeihybryvz667nxglx3gnrwbyxkmy74mfhvsng6uy4cm5m6yims4kuu/tax.png);
  background-size: cover;
  
  ${media.tablet} {
    width:100px;
    height:100px;
    background:#2b2b2b;
    background-image:url(https://nftstorage.link/ipfs/bafybeihybryvz667nxglx3gnrwbyxkmy74mfhvsng6uy4cm5m6yims4kuu/tax.png);
    background-size: cover;
  }
`;
export const Vault = styled.img`
  width:100px;
  height:100px;
  background-size: cover;
  background:#2b2b2b;
  background-image:url(https://nftstorage.link/ipfs/bafybeihybryvz667nxglx3gnrwbyxkmy74mfhvsng6uy4cm5m6yims4kuu/vault.png);
  
  ${media.tablet} {
    width:100px;
    height:100px;
    background:#2b2b2b;
    background-image:url(https://nftstorage.link/ipfs/bafybeihybryvz667nxglx3gnrwbyxkmy74mfhvsng6uy4cm5m6yims4kuu/vault.png);
    background-size: cover;
  }
`;
export const Lock = styled.img`
  width:100px;
  height:100px;
  background-size: cover;
  background:#2b2b2b;
  background-image:url(https://nftstorage.link/ipfs/bafybeihybryvz667nxglx3gnrwbyxkmy74mfhvsng6uy4cm5m6yims4kuu/vault.png);
  
  ${media.tablet} {
    width:100px;
    height:100px;
    background:#2b2b2b;
    background-image:url(https://nftstorage.link/ipfs/bafybeihybryvz667nxglx3gnrwbyxkmy74mfhvsng6uy4cm5m6yims4kuu/vault.png);
    background-size: cover;
  }
`;
export const Profile1 = styled.img`
  width:100px;
  height:100px;
  background-size: cover;
  background:#2b2b2b;
  background-image:url(https://nftstorage.link/ipfs/bafybeifh33pmvtblmoeks3ribjbk3woi3wpu5c3eveuwrepgz2ezqns44u/pfp.jpg);
  
  ${media.tablet} {
    width:100px;
    height:100px;
    background:#2b2b2b;
    background-image:url(https://nftstorage.link/ipfs/bafybeifh33pmvtblmoeks3ribjbk3woi3wpu5c3eveuwrepgz2ezqns44u/pfp.jpg);
    background-size: cover;
  }
`;
export const Profile2 = styled.img`
  width:100px;
  height:100px;
  background-size: cover;
  background:#2b2b2b;
  background-image:url(https://nftstorage.link/ipfs/bafybeifh33pmvtblmoeks3ribjbk3woi3wpu5c3eveuwrepgz2ezqns44u/pfp2.png);
  
  ${media.tablet} {
    width:100px;
    height:100px;
    background:#2b2b2b;
    background-image:url(https://nftstorage.link/ipfs/bafybeifh33pmvtblmoeks3ribjbk3woi3wpu5c3eveuwrepgz2ezqns44u/pfp2.png);
    background-size: cover;
  }
`;

export const Title2 = styled.h4`
  text-align: left;
  font-weight: 800;
  font-size: 15px;
  

  ${media.tablet} {
    
    font-size: 20px;
  }
`;

export const Paragraph = styled.p`
  font-size: 15px;
  
  line-height: 1.6;

  ${media.tablet} {
   
  }
`;

export const InlineLink = styled.span`
  display: inline-block;
  font-weight: 800;
  position: relative;
  ${underline};
`;

interface ExampleWrapperProps {
  $bgColor: string;
}

export const ExampleWrapper = styled.div`
  width: 100%;
  background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 0%, #D1B464 0%, #5d4a1f 61.5%, #5d4a1f 100%);
  border-radius: 10px;
  display: flex;
  flex-direction:column;
  padding: 40px;
  color:white;
`;
export const ExampleWrapper3 = styled.div`
  width: 20%;
  background-image:url()
  border-radius: 10px;
  display: flex;
  flex-direction:column;
  padding: 50px;
  color:white;
`;
export const ExampleWrapper4 = styled.div`
  width: 100%;
  background-color:#2b2b2b;
  border-radius: 10px;
  display: flex;
  flex-direction:column;
  padding: 20px;
  color:white;
`;

export const ExampleWrapper2 = styled.div`
  width: 100%;
  background-color:#2b2b2b;
  border-radius: 10px;
  display: flex;
  flex-direction:column;
  padding: 40px;
  color:white;
`;

interface RingProps {
  $dim?: boolean;
}

export const Ring = styled.div<RingProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 17%;
  border-radius: 50%;
  border: 2px solid white;
  display: flex;

  ${media.tablet} {
    border: 3px solid white;
    width: 10%;
  }

  &:before {
    content: '';
    display: inline-block;
    padding-bottom: 100%;
  }

  ${props =>
    props.$dim &&
    css`
      opacity: 0.5;
    `}
`;

export const SectionSeparator = styled.span`
  width: 100%;
  height: 30px;
  display: inline-block;

  ${media.tablet} {
    height: 30px;
  }
`;
export const SectionSeparator2 = styled.span`
  width: 100%;
  height: 10px;
  display: inline-block;

  ${media.tablet} {
    height: 10px;
  }
`;
