// app/about/page.tsx
"use client";

import Image from "next/image";
import "./AboutPage.css";

const teamMembers = [
  {
    name: "Emme",
    role: "Creative Director & Technical Designer",
    image: "/team/maria.jpg",
    bio: "Maria is the Creative Director and Technical Designer of T.R.U.S.T., leading the team and shaping the game’s vision from concept to execution. She designs gameplay mechanics using Python, creates 3D art, and ensures every element aligns with the game’s spiritual and creative direction.",
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
  {
    name: "Von",
    role: "Game Artist",
    image: "/team/von.jpg",
    bio: "As the game artist for T.R.U.S.T., Von brings its world and characters to life through his creative vision. He designs the six main characters, capturing their personalities and spiritual journeys, and works closely with the team to ensure every visual element supports the story and message.",
  },
  {
    name: "Matt",
    role: "Programmer",
    image: "/team/von.jpg",
    bio: "Matt is the lead programmer for T.R.U.S.T., building the game in Unreal Engine with C++. He also creates 3D models and environments using Blender, combining technical skill and artistic vision to craft immersive gameplay experiences.",
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
