import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hola <br />
          I'm Debajyoti Saha
        </SectionTitle>
        <SectionText style={{ paddingBottom: 0 }}>
          Welcome to my portfolio website. You can quickly become familiar with my projects and some general facts about me. <br />
          Access contact links for more details and a possible collaboration.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;