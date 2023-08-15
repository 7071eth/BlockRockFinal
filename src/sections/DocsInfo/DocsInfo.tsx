import React from 'react';
import { MouseParallax, ScrollParallax } from 'react-just-parallax';

import { LinkHandler } from 'components/LinkHandler/LinkHandler';
import { CodeRenderer } from 'components/CodeRenderer/CodeRenderer';

import * as S from './DocsInfo.styles';

interface Props {
  scrollContainerRef: React.MutableRefObject<HTMLDivElement | null>;
}

const scrollText = `import { ScrollParallax } from 'react-just-parallax';

<div className='wrapper'>
  <ScrollParallax isAbsolutelyPositioned>
    <span className='ring'/>
  </ScrollParallax>
</div>
`;

const mouseText = `import { MouseParallax } from 'react-just-parallax';

<div className='wrapper'>
  <MouseParallax enableOnTouchDevice isAbsolutelyPositioned>
    <span className='ring'/>
  </MouseParallax>
</div>
`;

export const DocsInfo = (props: Props) => {
  const { scrollContainerRef } = props;

  return (
    <>
      <S.Container>
        <S.Title>What is BlockRock?</S.Title>
        <S.SectionSeparator/>

        <S.Paragraph>
        Welcome to BlockRock, where the future of web3 investments takes on a new dimension through $Rocks. Unlike the unpredictable rollercoaster of meme tokens or utility tokens susceptible to whales, $Rock stands as a beacon of security and reliability. We're reshaping the landscape of web3 investments, focusing on real value and tangible growth.
          {/* <LinkHandler isExternal elHref="https://www.npmjs.com/package/react-just-parallax">
            <S.InlineLink>official npm page</S.InlineLink>
          </LinkHandler> */}
        </S.Paragraph>
        
        

        


        <S.SectionSeparator/>
        <S.Paragraph>
          Buy $Rock from {' '}
          <LinkHandler isExternal elHref="">
            <S.InlineLink>UNISWAP</S.InlineLink>
          </LinkHandler>
        </S.Paragraph>

        <S.SectionSeparator/>
          <LinkHandler isExternal elHref="/examples/1">
        <S.ExampleWrapper4>
            <S.InlineLink></S.InlineLink>
        <S.Title>View Roadmap</S.Title>

        </S.ExampleWrapper4>
          </LinkHandler>
        <S.SectionSeparator/>
        
        
        <S.ExampleWrapper>
        <S.Title>How it works?</S.Title>
        <S.SectionSeparator/>
        <S.Paragraph>At BlockRock, our unique approach to web3 investments is the driving force behind our groundbreaking ecosystem. Here's a glimpse into the core principles that make BlockRock stand out from the crowd:</S.Paragraph>
        <S.SectionSeparator/>

        <S.Assets/>
        <S.SectionSeparator2/>
        <S.Title2>Real-Valued Assets Backing</S.Title2>
        <S.Paragraph>Unlike conventional token projects, BlockRock sets a new standard with its unparalleled proposition. Our token is fortified by tangible, valuable assets like cryptopunks, establishing a robust bedrock for unswerving growth and enduring stability.</S.Paragraph>
        <S.SectionSeparator/>
        <S.SectionSeparator/>
        <S.Tax/>
        <S.SectionSeparator2/>
        <S.Title2>Tax Structure for Value Creation</S.Title2>
        <S.Paragraph>In a deliberate move to enhance community value, we implement a nominal 5% tax on each transaction. What sets us apart? Unlike the norm, we steer clear of a marketing wallet. Instead, a substantial 95% of the tax is dedicated to procuring and securing assets in our community vault. The remaining 5% fuels perpetual project development, guaranteeing an innovative future.</S.Paragraph>
        <S.SectionSeparator/>
        <S.SectionSeparator/>
        <S.Vault/>
        <S.SectionSeparator2/>
        <S.Title2>Securing Asset Value</S.Title2>
        <S.Paragraph>We're ardent defenders against the chaos of pump-and-dump schemes. Assets like cryptopunks are shielded within a smart contract vault for an extended five-year period. This proactive measure quells external manipulation, with future asset management determined through consensus within our vigilant community.</S.Paragraph>
        <S.SectionSeparator/>
        <S.SectionSeparator/>
        <S.SectionSeparator2/>
        <S.Handshake/>
        <S.SectionSeparator2/>
        <S.Title2>Founding Team's Commitment</S.Title2>
        <S.Paragraph>Our founding team serves as the driving force propelling our project's initial stages to success. Yet, this is just the beginning. As our community matures and gains momentum, we aspire to seamlessly transition into a fully community-driven investment powerhouse. Your input, your ideas, your decisions—these will shape our shared journey, painting a future that is truly collective.</S.Paragraph>
        <S.SectionSeparator/>
          
        </S.ExampleWrapper>
        <S.SectionSeparator/>
        <S.ExampleWrapper2>
        <S.Title>VAULT</S.Title>
        <S.SectionSeparator/>
        <S.Paragraph>Assets locked in the community vault will be shown below after launch:</S.Paragraph>
        <S.SectionSeparator2/>
       
        <S.Lock/>
        </S.ExampleWrapper2>
        
        <S.SectionSeparator/>
        <S.SectionSeparator/>
        <S.Title>TEAM</S.Title>
        <S.SectionSeparator/>


        <S.Paragraph>
        At BlockRock, we are driven by a shared passion for web3 technology and a resolute belief in its transformative power. Founded by John, a seasoned blockchain developer, and Jerlev, a visionary investor, our dynamic duo brings a unique blend of technical expertise and investment acumen to the forefront of the web3 revolution.
          {/* <LinkHandler isExternal elHref="https://www.npmjs.com/package/react-just-parallax">
            <S.InlineLink>official npm page</S.InlineLink>
          </LinkHandler> */}
        </S.Paragraph>

        <S.SectionSeparator2/>
        <S.ExampleWrapper2>
        <S.SectionSeparator2/>
       
        <S.Profile1/>
        <S.SectionSeparator2/>
        <S.Title2>John - The Technical Luminary (Co-Founder)</S.Title2>
        <S.SectionSeparator2/>
        <S.Paragraph>With a wealth of experience in the ever-evolving realm of blockchain technology, John is the mastermind behind the intricate web3 solutions that power Pixel Block. His commitment to pushing boundaries and creating cutting-edge, secure solutions has been instrumental in realizing the Pixel Block vision.</S.Paragraph>
        <S.SectionSeparator2/>
        <S.SectionSeparator2/>
        <S.Profile2/>
        <S.SectionSeparator2/>
        <S.Title2>Jerlev - The Investment Maestro (Co-Founder)</S.Title2>
        <S.SectionSeparator2/>
        <S.Paragraph>Jerlev's keen eye for investment opportunities and his unwavering faith in the potential of web3 have been pivotal in shaping Pixel Block's trajectory. Drawing from years of experience in navigating financial markets, Jerlev brings a strategic approach to ensure that every pixel of investment is maximized for growth and stability.</S.Paragraph>
        </S.ExampleWrapper2>
        
      </S.Container>
    </>
  );
};
