'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';

// --- characters array like you already have ---
const characters = [
  {
    slug: "ella-leonza-calma",
    name: "Ella-Leonza Calma",
    age: 22,
    occupation: "Village Defender",
    verse: "Jeremiah 29:11-14",
    backstory: "Ella grew up with a strong sense of justice, training with the elders...",
    weapons: ["Twin Daggers", "Light Crossbow"],
    image: "/characters/el-placeholder.png",
  },
  {
    slug: "jeremiah-tech",
    name: "Jeremiah Tech",
    age: 25,
    occupation: "Inventor & Strategist",
    verse: "Colossians 3:5",
    backstory: "Jeremiah uses his brilliant mind to create defenses for his people...",
    weapons: ["Mechanical Gauntlets", "Smoke Bombs"],
    image: "/characters/jer-placeholder.png",
  },
  {
    slug: "rreei-blacksmith",
    name: "R’Reei Blacksmith",
    age: 27,
    occupation: "Master Blacksmith",
    verse: "Psalms 23:1-3",
    backstory: "R’Reei forged weapons for heroes and villagers alike, becoming a legend.",
    weapons: ["Warhammer", "Anvil Shield"],
    image: "/characters/rreei-placeholder.png",
  },
  {
    slug: "tanner-blacksmith",
    name: "Tanner Blacksmith",
    age: 28,
    occupation: "Weapon Specialist",
    verse: "Jeremiah 51:20",
    backstory: "Tanner carries the legacy of forging weapons blessed by faith.",
    weapons: ["Battle Axe", "Throwing Axes"],
    image: "/characters/tanner-placeholder.png",
  },
  {
    slug: "robin-baker",
    name: "Robin Baker",
    age: 24,
    occupation: "Protector of the Village",
    verse: "Isaiah 54:17",
    backstory: "Growing up near the borderlands, Robin vowed to protect the helpless.",
    weapons: ["Short Sword", "Round Shield", "Sling"],
    image: "/characters/robin-placeholder.png",
  },
  {
    slug: "kai-baker",
    name: "Kai Baker",
    age: 21,
    occupation: "Warrior-in-Training",
    verse: "Numbers 23:19",
    backstory: "Young but fierce, Kai seeks to honor his family's name.",
    weapons: ["Long Bow", "Daggers"],
    image: "/characters/kai-placeholder.png",
  },
];

export default function CharacterPage() {
  const { slug } = useParams();
  const character = characters.find((char) => char.slug === slug);

  if (!character) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-2">Character not found</h1>
        <p>
          Return to the <a href="/" className="underline text-blue-600">homepage</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="flex flex-col items-center p-8">
          <Image
            src={character.image}
            alt={character.name}
            width={200}
            height={200}
            className="rounded-full shadow-lg mb-4"
          />
          <h1 className="text-4xl font-bold text-gray-800 mb-2">{character.name}</h1>
          <p className="text-gray-500 text-lg">{character.occupation}</p>
        </div>

        <div className="border-t border-gray-200 px-8 py-6 space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Favorite Verse</h2>
            <blockquote className="italic border-l-4 border-blue-400 pl-4 text-gray-600">
              {character.verse}
            </blockquote>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Backstory</h2>
            <p className="text-gray-700">{character.backstory}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">Weapons</h2>
            <ul className="list-disc list-inside text-gray-700">
              {character.weapons.map((weapon, index) => (
                <li key={index}>{weapon}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
