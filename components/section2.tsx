// components/Section2.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export function Section2() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log("Section 2 is now visible!");
          setIsVisible(true);
        }
      },
      { threshold: 0.1 } // 10% visible triggers
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section section-storyline ${isVisible ? "visible" : ""}`}
    >
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h2 className="glow-text text-4xl font-bold mb-8 text-center">The Storyline</h2>
        <p className="mb-6 text-lg">
          Six people got baptized on the same day and time, but at different locations.
          Once they were dipped in the water by their pastor, they woke up in a demon-hunting maze.
          They were lost and confused, but they were not alone. They all woke up in the same room,
          but to break the ice, they introduced themselves...
        </p>
        <p className="mb-6 text-lg">
          There is a married couple, a couple courting, and two people who haven't seen each other in such a long time.
          Once everyone was conscious, the TV in the room turned on. A creature with the head of a lion appeared...
        </p>
        <p className="mb-6 text-lg">
          The lion said, “Hey guys, welcome to the game show T.R.U.S.T!!”  
          Clapping was in the background, and everyone from heaven was watching the show.
        </p>
        <p className="mb-6 text-lg">
          The lion continued to speak, “I am your host, Barnabus! Everyone, meet our lovely contestants.
          Who we have here is our beautiful newlyweds, THE BAKERSSS!! This handsome young man's name is Kai Baker!!  
          And the good thing that he has found is Mrs. Robin Baker!!”
        </p>
        <p className="mb-6 text-lg">
          “This next couple is not dating; they are courting, but not for long. We have Tanner Blacksmith and R’reei Stream,
          who will soon be Mrs. Blacksmith! Because guess what!? They are engaged!!!”
        </p>
        <p className="mb-6 text-lg">
          “Now the next contestant is more precious than rubies, Ms. Ella-Leonza Calma!! She also goes by El!!  
          Now, we saved the best for last. His family is known for almost every technology designed on Earth.  
          We have Jeremiah Tech!! And just to let y’all know this, his wife is Ella-Leonza. But they do not know that yet.  
          Oops, now they know jaja,” said Barnabus.
        </p>
        <p className="mb-6 text-lg">
          Barnabus continued, “Okay, so the objective of this game is for you all to go through the maze filled with demons,
          trusting and listening to the voice of the BIG MAN upstairs, the King of Kings, the Alpha and Omega, ABBA FATHER!!!”
        </p>
        <p className="mb-6 text-lg">
          “Every time you disobey him and choose to lean on your own understanding, you will have some demons stuck on you,
          clouding you from hearing Him more. But no worries, there is a way for you to get rid of them — pray and fast.”
        </p>
        <p className="text-lg">
          “So get ready to fight those demons! You have authority over them, so do not fear.  
          May the LORD bless you, and have fun! Goodbye!” The TV turned off.
        </p>
      </div>
    </section>
  );
}

