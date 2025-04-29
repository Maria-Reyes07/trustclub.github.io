"use client";

import "./globals.css";
import Footer from "@/components/footer/Footer";
import Image from "next/image";
import { useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <html lang="en">
      <body>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Left: Logo */}
          <div className="navbar-logo">T.R.U.S.T</div>

          {/* Right: Toggle + Links */}
          <div className="navbar-right">
            <div className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "✕" : "☰"}
            </div>

            <div className={`navbar-links ${isOpen ? "open" : ""}`}>
              <a href="/">Home</a>
              <a href="/devlogs">Devlogs</a>
              <a href="/subscribe">Subscribe</a>
              <a href="/about">About Us</a>
              <a
                href="https://www.patreon.com/trustindiegame"
                target="_blank"
                rel="noopener noreferrer"
                className="donation-button"
              >
                <Image
                  src="/icons/patreon.svg"
                  alt="Patreon"
                  width={20}
                  height={20}
                  style={{ marginRight: "8px" }}
                />
                ❤️ Support Us
              </a>
            </div>
          </div>
        </div>
      </nav>


        {children}
        <Footer />
      </body>
    </html>
  );
}
