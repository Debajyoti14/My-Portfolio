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
            Debajyoti
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
        <li>
          <NavLink
            href="https://drive.google.com/file/d/145qwTcII718m-20lBVoyB5oXH5-RHWHK/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </NavLink>
        </li>
      </Div2>
      <SocialMedia />
    </HeaderContainer>
  )
};

export default Header;
