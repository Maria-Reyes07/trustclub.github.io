// app/about/page.tsx
"use client";

import Image from "next/image";
import "./AboutPage.css";

const teamMembers = [
  {
    name: "Maria Reyes",
    role: "Creative Director",
    image: "/team/maria.jpg",
    bio: "Leading the vision, storytelling, and art direction of T.R.U.S.T.",
  },
  {
    name: "DeeJay",
    role: "Social Media Manager",
    image: "/team/DeeJay.jpeg",
    bio: "DeeJay brings T.R.U.S.T. to life online, managing our social media with heart and creativity. From sharing game updates and character spotlights to engaging with our community, DeeJay helps spread the message and mission of T.R.U.S.T. across every platform.",
  },
  {
    name: "Huncho Artist",
    role: "Game Artist",
    image: "/team/Huncho.jpg",
    bio: "Huncho brings the world of T.R.U.S.T. to life with bold visuals and unique character designs. From concept art to in-game assets, his creative touch gives the game its vibrant, adventurous style.",
  },
  // Add more members if you have!
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About T.R.U.S.T.</h1>
        <p>A story-driven adventure about faith, courage, and discovery.</p>
      </section>

      <section className="about-content">
        <h2>Our Mission</h2>
        <p>
            Our mission is to create powerful, immersive games that lead both believers and unbelievers to the truth of the Father, Son, and 
            Holy Spirit. Through bold storytelling, spiritual symbolism, and Holy Spirit-led creativity, we shine light in dark places—equipping 
            players to encounter God, face spiritual realities, and walk in divine purpose.
        </p>

        <h2>Our Journey</h2>
        <p>
          What started as a small passion project has blossomed into a growing 
          community of dreamers and believers. Every pixel, every line of dialogue, 
          and every melody is crafted with love and intention.
        </p>
      </section>

      <section className="about-team">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-card-image">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="team-image"
                />
              </div>
              <div className="team-card-content">
                <h3>{member.name}</h3>
                <p className="role">{member.role}</p>
                <p className="bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
