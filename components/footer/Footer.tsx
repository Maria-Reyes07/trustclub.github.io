import Image from "next/image";
import { FaDiscord, FaInstagram, FaTiktok } from "react-icons/fa"; // real icons from react-icons
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <Image src="/trust-logo.png" alt="T.R.U.S.T. Logo" width={80} height={80} />
        </div>
        <div className="footer-links">
          <a href="https://discord.gg/jjuFNyx9aK" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaDiscord size={20} /> Discord
          </a>
          <a href="https://instagram.com/trustindiegame" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaInstagram size={20} /> Instagram
          </a>
          <a href="https://tiktok.com/@trustindiegames" target="_blank" rel="noopener noreferrer" className="footer-link">
            <FaTiktok size={20} /> TikTok
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} T.R.U.S.T. All rights reserved.</p>
      </div>
    </footer>
  );
}

