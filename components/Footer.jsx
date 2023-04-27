import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => (
  <div className="footer-container">
    <p>{new Date().getFullYear()} Headphones All rights reserved</p>
    <p className="icons">
      <AiFillInstagram />
      <AiOutlineTwitter />
    </p>
  </div>
);

export default Footer;
