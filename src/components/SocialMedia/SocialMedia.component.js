import { SocialContainer, SocialIcons } from "./SocialMedia.styles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

export default function SocialMedia({ inFooter }) {
  return (
    <SocialContainer inFooter={inFooter}>
      <SocialIcons
        href="https://github.com/Debajyoti14"
        title="Visit my github profile"
        target="_blank"
        rel="noopener noreferrer">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/debajyotisaha14/"
        title="Contact me on LinkedIn"
        target="_blank"
        rel="noopener noreferrer">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://x.com/debajyotis14"
        title="Contact me on LinkedIn"
        target="_blank"
        rel="noopener noreferrer">
        <FaTwitter size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="mailto://debajyotisaha14@gmail.com"
        title="Send directly an email"
        target="_blank"
        rel="noopener noreferrer">
        <CgMail size="3rem" />
      </SocialIcons>
    </SocialContainer>
  )
}