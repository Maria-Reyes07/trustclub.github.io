// app/devlogs/[slugs/page.tsx]

import '../DevlogDetailPage.css';
import { Metadata } from "next";
import { notFound } from 'next/navigation';

// ✅ Correct manual type
type DevlogsPageProps = {
  params: {
    slug: string;
  };
};

const devlogs = [
  {
    slug: "art-direction-update",
    title: "Art Direction Update",
    date: "April 28, 2025",
    category: "Art",
    content: `
### What's New
We have updated the art style to feel more vibrant and lively!

**Changes include:**
- New color palette 🌈
- Softer shading
- Hand-drawn textures

We hope you love the new look as much as we do! 🎨
    `,
  },
  {
    slug: "gameplay-mechanics-preview",
    title: "Gameplay Mechanics Preview",
    date: "May 1, 2025",
    category: "Gameplay",
    content: `
### Upcoming Features
We are adding new mechanics to deepen the player experience:

- Trust Points system 🤝
- Dynamic conversation trees 🗨️
- New puzzles and hidden paths 🧩

Stay tuned for even more updates!
    `,
  },
];

interface Devlog {
  slug: string;
  title: string;
  date: string;
  category: string;
  content: string;
}


export default function DevlogPost({ params }: DevlogsPageProps) {
  const devlog = devlogs.find((d) => d.slug === params.slug);

  if (!devlog) {
    notFound(); // Show a 404 if the slug doesn't exist
    return null;
  }

  return (
    <div className="devlog-detail-page">
      <div className="devlog-detail-container">
        <p className="devlog-detail-category">{devlog.category}</p>
        <h1 className="devlog-detail-title">{devlog.title}</h1>
        <p className="devlog-detail-date">{devlog.date}</p>
      </div>

      <div className="prose prose-invert prose-lg">
        {devlog.content.split('\n').map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div>
    </div>
  );
}
