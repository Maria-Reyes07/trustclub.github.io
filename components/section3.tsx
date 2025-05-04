// components/section3.tsx
"use client";

import Link from "next/link";
import "./section3.css";

const characters = [
  {
    name: "ELLA-LEONZA CALMA",
    slug: "ella-leonza-calma",
    color: "bg-green-200",
    verse: `“11 For I know the thoughts that I think toward you, says the Lord... Jeremiah 29:11-14”`,
    image: "/characters/el-placeholder.png",
  },
  {
    name: "JEREMIAH TECH",
    slug: "jeremiah-tech",
    color: "bg-yellow-200",
    verse: `“5 Put to death therefore what is earthly in you... Colossians 03:05 (ESV)”`,
    image: "/characters/jer-placeholder.png",
  },
  {
    name: "R’REEI BLACKSMITH",
    slug: "rreei-blacksmith",
    color: "bg-pink-200",
    verse: `“1 The Lord is my shepherd... Psalms 23:01-03 (NKJV)”`,
    image: "/characters/rreei-placeholder.png",
  },
  {
    name: "TANNER BLACKSMITH",
    slug: "tanner-blacksmith",
    color: "bg-white text-black",
    verse: `“20 You are my war club... Jeremiah 51:20 (NIV)”`,
    image: "/characters/tanner-placeholder.png",
  },
  {
    name: "ROBIN BAKER",
    slug: "robin-baker",
    color: "bg-red-200",
    verse: `“17 But in that coming day... Isaiah 54:17 (NLT)”`,
    image: "/characters/robin-placeholder.png",
  },
  {
    name: "KAI BAKER",
    slug: "kai-baker",
    color: "bg-red-300",
    verse: `“19 God is not a man, that he might lie... Numbers 23:19 (CSB)”`,
    image: "/characters/kai-placeholder.png",
  },
];

export function Section3() {
  return (
    <section className="section3" id="meet-the-characters">
      <h2 className="section3-title">Meet the Characters</h2>
      <div className="character-grid">
        {characters.map((char, index) => (
          <Link
            href={`/characters/${char.slug}`}
            key={index}
            className="character-card-link"
          >
            <div className={`character-card ${char.color}`}>
              <img src={char.image} alt={char.name} className="character-image" />
              <h3 className="character-name">{char.name}</h3>
              <p className="character-verse">{char.verse}</p>
              <p className="click-here-text">Click Here</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
