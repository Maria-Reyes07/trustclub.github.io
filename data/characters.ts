export type Character = {
  name: string;
  slug: string;
  favoriteColor: string;
  profilePic: string;
  verse: string;
  nickname: string;
  age: string;
  gender: string;
  job: string;
  height: string;
  eyeColor: string;
  hairColor: string;
  likes: string;
  dislikes: string;
  hobbies: string;
  personalityType: string;
  loveLanguage: string;
  petPeeves: string;
  weapons: { name: string; description: string }[];
  weaponImages: string[];
  confessional: string;
  confessionalImage: string; // 👈 NEW
};

  
export const characters: Character[] = [
  {
    name: 'Ella-Leonza Calma',
    slug: 'ella-leonza-calma',
    favoriteColor: 'green',
    profilePic: '/characters/el-placeholder.png',
    verse: `“11 ||  For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a 
    hope. 12 || Then you will call upon Me and go and pray to Me, and I will listen to you. 13 || And you will seek Me and find Me, when you 
    search for Me with all your heart. 14 || I will be found by you, says the Lord, and I will bring you back from your captivity; I will gather 
    you from all the nations and from all the places where I have driven you, says the Lord, and I will bring you to the place from which I cause 
    you to be carried away captive.” - Jeremiah 29:11-14`,
    nickname: 'El',
    age: '25',
    gender: 'Female',
    job: 'Interior Designer',
    height: "5'6\"",
    eyeColor: 'Dark Green',
    hairColor: 'Brown',
    likes: 'Dance, Music, The sound of rain, Learn new languages',
    dislikes: 'Cheese, Pickles, Sharks',
    hobbies: 'Archery, Painting',
    personalityType: 'ENTP',
    loveLanguage: 'Quality Time',
    petPeeves: 'Disrespectful People',
    weapons: [
      { name: 'Fire Arrow', description: '5hp - 30hp by upgrade' },
      { name: 'Earth Arrow', description: 'can create stairs with the arrows' },
      { name: 'Laser Arrow', description: 'rare to find but the damage is 30hp - 50hp by upgrade' },
    ],
    weaponImages: [
      '/characters/el-placeholder.png',
      '/characters/el-placeholder.png',
    ],
    confessional: `Hello, my name is Ella-Leonza or El. At seven years old, my family moved to the country because my father got a job offer for 
    a construction company. I am the oldest of three. I knew the Lord most of my life. I was already baptized at the age of nine. Even though I 
    was already baptized, some things happened to me that made me drift away from the LORD; so I became lukewarm. I made a friend my first year 
    in high school, Jeremiah Tech. We were inseparable until we went our separate ways after high school because of college. I kind of had a 
    crush on him but we are not going to talk more on that. Anyways at 20, the LORD called my name, and I answered. I decided to turn from my 
    old ways and become new, but it wasn’t easy. ummm I was bitter, angry, and suicidal, and I was always rejected. I felt like I wasn’t capable 
    of doing anything. At 22, I started to go to church to get my teachings in and grow closer to the LORD. At 25, my pastor decided to do an 
    unplanned baptism after the sermon, and I felt moved. On that day my pastor preached about the Holy Spirit and wanting all of Him. I stood 
    up with the desire to receive the Holy Spirit, and people came up to me, and started praying for me, and delivered me from what I mentioned 
    earlier. At that moment, I burst into tears. I hadn't cried in such a long time, and it was almost like my emotions were unlocked by the 
    Holy Spirit. And it felt great! I felt like I was carrying so much and it was taken right off of me. I feel light!`,
    confessionalImage: '/characters/el-placeholder.png', // 👈 Added image for confessional
  },
  // Jeremiah
  {
    name: 'Jeremiah Tech',
    slug: 'jeremiah-tech',
    favoriteColor: 'yellow',
    profilePic: '/characters/jer-placeholder.png',
    verse: `“5 Put to death therefore what is earthly in you: sexual immorality, impurity, passion, evil desire, and covetousness, which is idolatry.” - Colossians 03:05 (ESV)`,
    nickname: 'Jer',
    age: '26',
    gender: 'Male',
    job: 'Software Engineer',
    height: "6'4\"",
    eyeColor: 'Dark Brown',
    hairColor: 'Black',
    likes: 'Sing, Dance, Gaming, Vinyl records, Crafting, Yellow',
    dislikes: 'Drama, Gossip',
    hobbies: 'Photography, Basketball',
    personalityType: 'ISTP',
    loveLanguage: 'Quality Time',
    petPeeves: 'Poor Hygeine, Talking during a movie',
    weapons: [
      { name: 'Ice Arrow', description: 'freeze for 10s but can upgrade to freeze up to 30s' },
      { name: 'Earth Arrow', description: 'can bring rocks up to walk across as a bridge.' },
      { name: 'Laser Arrow', description: 'rare to find but the damage is 30hp - 50hp by upgrade' },
    ],
    weaponImages: [
      '/characters/jer-placeholder.png',
      '/characters/jer-placeholder.png',
    ],
    confessional: `Well, hello, my name is Jeremiah Tech. I was a professional NBA player, but I had to quit because I had to start focusing on 
    potentially running my family business, TechHorizon. So now I am a software engineer at my family company. My mother created the company for 
    children children. She made this company for generational wealth. She worked hard to get it to where it is now. I am thankful to God for her 
    because she is why I am where I am now. I love to cook! I am the chef of my household. I watch the Food Network and play video games in my 
    free time. The types of games I play are sports games, war games, and games where you can steal cars. When I was in high school, I had a 
    good friend, one of my best friends, her name was El. Uhhh, she used to bother me a lot; honestly, she bullied me. (cue the sad music) 
    Every time I turned around, she was there harassing me. Nah, I'm just kidding, but we were good friends. After high school, I would think of 
    her now and then. Uhh, I was struggling with the spirit of Jezabel, rejection, and gluttony. I was also insecure about how my body looked. 
    I thought I wouldn’t get married and was okay with that. My mindset was only on fulfilling my dream, which was to become a professional NBA 
    player, and that's a check off my list, and seeking God. Then Barnabus, the host of this game, said what he said. I became pleased that my 
    good thing is El.`,
    confessionalImage: '/characters/jer-placeholder.png', // 👈 Added image for confessional
  },


  {
    name: 'R\'Reei Blacksmith',
    slug: 'rreei-blacksmith',
    favoriteColor: 'pink',
    profilePic: '/characters/rreei-placeholder.png',
    verse: `“1 || The Lord is my shepherd; I shall not want. 2 || He makes me to lie down in green pastures; He leads me beside the still waters. 
    3 || He restores my soul; He leads me in the paths of righteousness For His name’s sake.” - Psalms 23:01-03 (NKJV)`,
    nickname: 'Reei',
    age: '26',
    gender: 'Female',
    job: 'Teacher',
    height: "5'7\"",
    eyeColor: 'Pink',
    hairColor: 'Platinum Blonde',
    likes: 'Gaming, Jewelry, Gymnastics, Pink, Fire, Movies',
    dislikes: 'Western, Politics',
    hobbies: 'Knife throwing, Tennis',
    personalityType: 'ENTJ',
    loveLanguage: 'Gift giving',
    petPeeves: 'Turning without signaling, Texting during a meal, Scraping Silverware',
    weapons: [
      { name: 'Poison Sword', description: 'slows down the enemy for 10s - 30s by upgrade' },
      { name: 'Lightning Sword', description: 'damage the enemy 10hp - 30hp' },
      { name: 'Shockwave Sword', description: 'rare damage 30hp - 50hp by upgrade' },
      { name: 'Knife Throwing', description: 'May run out max hold 7 & damage 05hp - 20hp by upgrade' },
    ],
    weaponImages: [
      '/characters/rreei-placeholder.png',
      '/characters/rreei-placeholder.png',
    ],
    confessional: `Heyyy!! I’m R’Reei, or y’all can call me Reei. I love to go knife-throwing with my family. I am the best in my family, and 
    they love to hate on me. I also love to play tennis with my friends! Mainly with Tanner because I always win and play against him. I don’t 
    like throwing knives with him. He is okay with that. I never admit that he is good, but I told him that. As you can see, I am very competitive 
    and don’t like losing. I did gymnastics until I was 12 years old; there wasn’t a particular reason why I quit. I love the art of film and 
    aspire to make films for Abba. What draws me to cinema is the storyline and the creativity of how the film is directed. When I watch movies, 
    I pay attention to the colors, the positioning of the cameras, and how they are edited. As you can tell, my favorite color is pink. Well, I 
    know that pink looks good on me. A strange fun fact about me, even though I don’t think it's odd, I like fire. I like how the fire looks, 
    but I am not an arsonist. I just think that fire looks beautiful. It is astonishing how it can change to different colors based on how hot 
    the flames are. But I would never set anything on fire just to see the flames, maybe. What I struggled with before I met Abba and had to get 
    delivered from. That was me always doubting myself. Abba had to correct me with that. I struggled with lust and sexual immorality. I thought 
    that was okay because it was normalized to me at a young age. I was also very insecure and didn’t like how I looked for a long time. But 
    NOW Abba says otherwise! He said that I am fearfully and wonderfully made. And I receive that! I love Abba so much! It helped me a lot!`,
    confessionalImage: '/characters/rreei-placeholder.png', // 👈 Added image for confessional
  },


  {
    name: 'Tanner Blacksmith',
    slug: 'tanner-blacksmith',
    favoriteColor: 'white',
    profilePic: '/characters/tanner-placeholder.png',
    verse: `“20 You are my war club, my weapon for battle— with you I shatter nations, with you I destroy kingdoms,” - Jeremiah 51:20 (NIV)`,
    nickname: 'N/A',
    age: '28',
    gender: 'Male',
    job: 'Blacksmith',
    height: "5'11\"",
    eyeColor: 'Hazel',
    hairColor: 'Blonde',
    likes: 'Food, White, Knife throwing, Gaming, Sailing, Knife Throwing, Workout',
    dislikes: 'Birds, Horror Games',
    hobbies: 'Swimming, Combat Training',
    personalityType: 'ESTJ',
    loveLanguage: 'Physical Touch',
    petPeeves: 'Arogant and Selfish People',
    weapons: [
      { name: 'Poison Sword', description: 'slows down the enemy for 10s - 30s by upgrade' },
      { name: 'Lightning Sword', description: 'damage the enemy 10hp - 30hp' },
      { name: 'Shockwave Sword', description: 'rare damage 30hp - 50hp by upgrade' },
      { name: 'Combat Moves', description: 'Block, Punch, Kick, Chokes, Jab, Throat Punch, Upper Cut' },
    ],
    weaponImages: [
      '/characters/tanner-placeholder.png',
      '/characters/tanner-placeholder.png',
    ],
    confessional: `Hello, my name is Ella-Leonza or El... (your full confessional text)`,
    confessionalImage: '/characters/tanner-placeholder.png', // 👈 Added image for confessional
  },

  {
    name: 'Robin Baker',
    slug: 'robin-baker',
    favoriteColor: 'red',
    profilePic: '/characters/robin-placeholder.png',
    verse: `17 || But in that coming day no weapon turned against you will succeed. You will silence every voice raised up to accuse you. These 
    benefits are enjoyed by the servants of the Lord; their vindication will come from me. I, the Lord, have spoken!” - Isaiah 54:17 (NLT)`,
    nickname: 'Bibi',
    age: '27',
    gender: 'Female',
    job: 'Pediatrician',
    height: "5'11\"",
    eyeColor: 'Brown',
    hairColor: 'Brown',
    likes: 'Star Gazing, Rain, Trail Walking, Gardening, Horeseback riding, Red',
    dislikes: 'Cults, Dairy',
    hobbies: 'Going to the shooting range, Cooking',
    personalityType: 'ISFJ',
    loveLanguage: 'Acts of Service',
    petPeeves: 'Being late and Strangers calling her, "Sweetie" or "Honey',
    weapons: [
      { name: 'Pistol', description: 'use for close-range combat' },
      { name: 'Rifle', description: 'a balance of range, damage, and rate of fire, making them versatile in various situations. Sniper rifles excel at long-range accuracy, often prioritizing single, high-damage shots. ' },
      { name: 'Shotgun', description: 'Powerful in close-quarters, delivering a broad spread of pellets for high damage, but with limited range and capacity.'},
    ],
    weaponImages: [
      '/characters/robin-placeholder.png',
      '/characters/robin-placeholder.png',
    ],
    confessional: `*walks in awkwardly* Oh.. am I supposed to sit right here? And that's the camera I'm supposed to look at, right? Okay. So...hi. 
    This is awkward, but my name is Robin Baker. Um, before I met the Lord, I was. Ya know.. wronged by many people. Especially men. I had the 
    mindset of "I don't need no man." You see, most of the men I was with weren't even that good in bed, so it was like, what's the whole point? 
    After that, I got my own “things” to replace those men.... let's just say, “things” to satisfy me in ways they couldn't. So I was okay with 
    that. I made up my mind that I don't need or want a man and never will. Until one day, the Lord called me by my name three times, and I 
    answered and said, "Yes, Lord." He then told me what I needed to do. and I did it. I destroyed everything of my past to follow Him, especially 
    my “things”. I became a new woman that day. I got my room in order, my mindset was forever made new. The next day, I was at work and met a 
    new guy named Kai. When I first met him, I thought he was kinda annoying..actually, a lot of annoying. But I felt bad for him. You know he 
    was scrawny, and many people didn't like him, so out of pity. I became his friend 'cause I felt bad for him, and I know if it were me, I 
    wouldn't wanna be done like that, right?! So that's our story. Eventually, the annoying, scrawny man became my less annoying, slightly less 
    scrawny husband. He wouldn't stop bothering me, and I went along with cause, why not? Over time, he grew on me. We became friends, and he 
    eventually asked me on a date. I said, "Sure, why not." who's gonna pass up free food, ya know? He treated me very well on that date, and he 
    was like no one I had ever met. On that date, I began to see his love for the Lord. That's all we talked about that day. We started doing 
    bible studies and going out more. He asked me to marry him shortly after that, and I was like, "Sure, I'll marry you!" since then, we have 
    been learning to love each other and keep the Lord in our marriage. Despite my past, the Lord has truly healed me; in my marriage, we 
    communicate and are open and honest with each other. Before I go, just be prepared for him to tell you that I loved him first and was head 
    over heels for him....I was not...he says that as a joke, but hopefully, the Holy Spirit convicts him when he tells the story.`,
    confessionalImage: '/characters/robin-placeholder.png', // 👈 Added image for confessional
  },


  {
    name: 'Kai Baker',
    slug: 'kai-baker',
    favoriteColor: 'black',
    profilePic: '/characters/kai-placeholder.png',
    verse: `11 For I know the thoughts that I think toward you, says the Lord, thoughts of peace and not of evil, to give you a future and a hope.`,
    nickname: 'N/A',
    age: '25',
    gender: 'Male',
    job: 'Head Wrangler',
    height: "6'2\"",
    eyeColor: 'Black',
    hairColor: 'Black',
    likes: '- Animals, Play pool, Hiking, Rodeo, Rugby, Black',
    dislikes: 'Psychic readings, getting lost',
    hobbies: 'Horeseback riding, Baking',
    personalityType: 'ESFP',
    loveLanguage: 'Physical Touch',
    petPeeves: 'Animal abuse & Leaving dishes in the sink',
    weapons: [
      { name: 'Pistol', description: 'use for close-range combat' },
      { name: 'Rifle', description: 'a balance of range, damage, and rate of fire, making them versatile in various situations. Sniper rifles excel at long-range accuracy, often prioritizing single, high-damage shots. ' },
      { name: 'Shotgun', description: 'Powerful in close-quarters, delivering a broad spread of pellets for high damage, but with limited range and capacity.'},
      { name: 'Whip', description: 'made out of lightening' },
    ],
    weaponImages: [
      '/characters/kai-placeholder.png',
      '/characters/kai-placeholder.png',
    ],
    confessional: `Hello, my name is Ella-Leonza or El... (your full confessional text)`,
    confessionalImage: '/characters/kai-placeholder.png', // 👈 Added image for confessional
  },

];

  