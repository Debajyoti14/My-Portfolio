import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import SocialMedia from "../SocialMedia/SocialMedia.component";
import { HeaderContainer, Div1, Div2, NavLink } from './HeaderStyles';

const Header = () => {
  const { route } = useRouter();

  return (
    <HeaderContainer sticky>
      <Div1>
        <Link href='/'>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            Debajyoti14
          </span>
        </Link>
      </Div1>


      <Div2>
        <li>
          <Link href={route === '/all-projects' ? "/#about" : '#about'}>
            <NavLink>About</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects">
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href={route === '/all-projects' ? "/#tech" : '#tech'}>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
      </Div2>
      <SocialMedia />
    </HeaderContainer>
  )
};

export default Header;
