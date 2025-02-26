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
          Welcome to my portfolio website! Explore my projects and get to know me better. Feel free to check out my contact links for more details or potential collaborations.
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;