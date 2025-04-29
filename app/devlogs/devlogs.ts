// app/devlogs/devlogs.ts

export type Devlog = {
    id: number;
    slug: string;
    title: string;
    summary: string;
    description: string;
    category: string;
    tags: string[];
    date: string;
  };
  
  export const devlogs: Devlog[] = [
    {
      id: 1,
      slug: "art-direction-update",
      title: "Art Direction Update",
      summary: "We updated the character designs.",
      description: "Full detailed description goes here...",
      category: "Art",
      tags: ["art", "characters"],
      date: "2025-04-25",
    },
    {
      id: 2,
      slug: "gameplay-mechanics-preview",
      title: "Gameplay Mechanics Preview",
      summary: "Listen to a sample of the soundtrack!",
      description: "We composed a few new tracks for exploration scenes...",
      category: "Music",
      tags: ["music", "soundtrack"],
      date: "2025-04-27",
    },
    // (Add more if you want!)
  ];
  