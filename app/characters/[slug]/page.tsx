// app/characters/[slug]/page.tsx

import './CharacterPage.css';
import Image from 'next/image';
import Link from 'next/link';
import { characters } from '@/data/characters';
import { notFound } from 'next/navigation';
import { Metadata } from "next";

// ✅ Correct type
type CharactersPageProps = {
  params: {
    slug: string;
  };
};

export default function CharacterPage({ params }: CharactersPageProps) {
  const { slug } = params;
  const character = characters.find((char) => char.slug === slug);

  if (!character) {
    return (
      <div className="character-page">
        <h1 className="character-name">Character not found</h1>
        <div className="back-link">
          <Link href="/">Go back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="character-page">
      <div
        className="character-banner"
        style={{ backgroundColor: character.favoriteColor }}
      ></div>

      <main className="character-main">
        {/* Character header */}
        <section className="character-header">
          <div className="character-header-text">
            <h1 className="character-name">{character.name}</h1>
            <div className="character-verse-card">
              <p>{character.verse}</p>
            </div>
          </div>
          <div className="character-profile-pic-container">
            <Image
              src={character.profilePic}
              alt={`${character.name} Profile Picture`}
              fill
              className="character-profile-pic"
            />
          </div>
        </section>

        {/* General Info */}
        <section>
          <h2 className="text-3xl font-semibold text-center">General Information</h2>
          <div className="character-info-section">
            <div className="space-y-3">
              <p><strong>Nickname:</strong> {character.nickname}</p>
              <p><strong>Age:</strong> {character.age}</p>
              <p><strong>Gender:</strong> {character.gender}</p>
              <p><strong>Job:</strong> {character.job}</p>
              <p><strong>Height:</strong> {character.height}</p>
              <p><strong>Eye Color:</strong> {character.eyeColor}</p>
              <p><strong>Hair Color:</strong> {character.hairColor}</p>
            </div>
            <div className="space-y-3">
              <p><strong>Likes:</strong> {character.likes}</p>
              <p><strong>Dislikes:</strong> {character.dislikes}</p>
              <p><strong>Hobbies:</strong> {character.hobbies}</p>
              <p><strong>Personality Type:</strong> {character.personalityType}</p>
              <p><strong>Love Language:</strong> {character.loveLanguage}</p>
              <p><strong>Pet Peeves:</strong> {character.petPeeves}</p>
            </div>
          </div>
        </section>

        {/* Special Weapons */}
        <section>
          <h2 className="text-3xl font-semibold text-center">Special Weapons</h2>
          <div className="character-weapon-section">
            <div className="weapon-card space-y-6">
              {character.weapons.map((weapon, index) => (
                <div key={index} className="space-y-2">
                  <p><strong>Name:</strong> {weapon.name}</p>
                  <p><strong>Description:</strong> {weapon.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-6">
              {character.weaponImages.map((img, index) => (
                <div key={index} className="weapon-image">
                  <Image
                    src={img}
                    alt={`Weapon ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Confessional */}
        <section>
          <h2 className="text-3xl font-semibold text-center mb-4">Confessional</h2>
          <div className="confessional-container">
            <div className="confessional-image-wrapper">
              <Image 
                src={character.confessionalImage || '/placeholder.png'} 
                alt="Confessional Image" 
                width={300} 
                height={300} 
                className="confessional-image"
              />
            </div>

            <div className="confessional-text">
              <p>{character.confessional}</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}

