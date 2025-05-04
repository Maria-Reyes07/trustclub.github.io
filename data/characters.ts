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
    confessional: `Hi, I’m Ella-leonza or El.
    I’m the oldest of three siblings — the 
    one who always had to grow up a little faster.
    I’ve known the Lord most of my life. I was baptized when I was nine years old. But even after that, 
    life happened — some painful things — and slowly, I drifted. I became lukewarm. I still believed in God, 
    but my heart wasn’t all the way in it.
    In high school, I met someone who became a big part of my story — Jeremiah Tech. We became best friends 
    almost instantly. We were inseparable. Turns out, he became my friend because he liked me. I didn’t 
    start liking him until senior year, but we went our separate ways after graduation. Life moved on… or 
    so I thought.
    When I was 20, I heard the Lord call my name. And this time, I listened. I started turning from my old 
    ways, but it wasn’t an overnight change. I was still bitter. Angry. Depressed. I had suicidal thoughts. 
    I felt rejected — like I wasn’t good enough for anything or anyone. Like I wasn’t capable of doing anything right.
    When I turned 22, I started going to church — really going — to learn, to be taught, and to get closer 
    to the Lord.
    Then at 25… everything changed.
    My pastor gave a sermon on the Holy Spirit — about wanting all of Him. After the message, he felt led 
    to hold an unplanned baptism. I felt something stir deep inside me. I stood up.
    People came around me, prayed for me, and began to speak deliverance over me. And in that moment… I 
    broke. I cried. I hadn’t cried in so long. It felt like the Holy Spirit unlocked emotions I didn’t even 
    realize I’d buried.
    That day, something in me truly came alive.`,
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
    confessional: `Well, hello — I’m Jeremiah Tech.
    I used to be a professional NBA player. Crazy, right? But I stepped away from the league to start 
    focusing on something even bigger — my family’s legacy. My mom built a tech company called TechHorizon, 
    and now I work there as a software engineer.
    She started it for the next generation — for kids, for the future. She poured everything into it so we 
    could build generational wealth, and I’m grateful to God for her. She’s the reason I’m standing where I 
    am today.
    Outside of work? I love to cook. I’m the chef of the house — no one touches the stove when I’m around. 
    I’m also a big Food Network guy, and in my chill time, I play video games. Sports games, war games, and 
    yeah… games where you steal cars. Don’t judge me.
    Back in high school, I had this really good friend — her name was El. Honestly… she used to bully me. 
    (Cue the sad violin music.) Every time I turned around, she was there bothering me. I’m just messing — 
    we were tight. Real close. After high school, I’d think about her sometimes. Wonder how she was doing.
    Spiritually though… I had some heavy stuff going on. I struggled with the spirit of Jezebel, rejection, 
    and gluttony. I was also really insecure about my body — I didn’t think I’d ever get married, and for a 
    while, I was okay with that. My whole mindset was locked in on two things: making it to the NBA — which, 
    check — and chasing after God.
    Then Barnabus — the host of this whole game — said what he said, and suddenly it hit me.
    My “good thing”... was El.
    And honestly? I couldn’t be happier.`,
    confessionalImage: '/characters/jer-placeholder.png', // 👈 Added image for confessional
  },


  {
    name: 'R\'Reei Blacksmith',
    slug: 'rreei-blacksmith',
    favoriteColor: 'pink',
    profilePic: '/characters/rreei-placeholder.png',
    verse: `“1 || The Lord is my shepherd; I shall not want. 2 || He makes me to lie down in green pastures; He leads me beside the still waters. 
    3 || He restores my soul; He leads me in the paths of righteousness For His name’s sake.” - Psalm 23:01-03 (NKJV)`,
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
    confessional: `Heyyy! I’m R’Reei — but y’all can call me Reei.
    I love knife-throwing with my family… and not to brag, but I am the best. They love to hate on me for it, 
    but it’s all love! I also play tennis with my friends — mostly with Tanner, my fiancé. I always win, 
    obviously. We don’t throw knives together though… he’s okay, but I don’t want to admit he’s actually 
    kind of good. Oops — guess I just did. As you can probably tell, I’m very competitive. Losing? Couldn’t 
    be me.
    I did gymnastics until I was about 12. Nothing dramatic happened — I just moved on. These days, I’m 
    passionate about the art of film. I want to create movies that honor Abba. What draws me in is the story 
    — how it’s told, how it’s shot, the color choices, the editing, the camera angles. I don’t just watch 
    movies; I study them.
    Also… yes, pink is my favorite color. Not just because it’s pretty, but because it looks good on me. 
    Period.
    Oh, and fun fact: I like fire. Not in a weird way! I just think it’s beautiful — the way it moves, how it 
    changes color depending on the heat. It fascinates me. But no, I’m not an arsonist. Would I ever set 
    something on fire just to see the flames? Maybe. (Just kidding… kind of.)
    Now for the real stuff.
    Before I gave my life to Abba, I struggled a lot with doubting myself. I was insecure. I didn’t like how 
    I looked. I compared myself constantly. I also struggled with lust and sexual immorality — it was 
    normalized around me from a young age, and I thought it was okay. But Abba showed me it wasn’t okay — 
    and more than that, He showed me who I really am.
    Now I know: I am fearfully and wonderfully made. That’s what He says. And I receive that.
    I love Abba with all my heart. He delivered me from everything I thought defined me — and now I walk in 
    truth, in confidence, and in purpose.`,
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
    confessional: `G’day, I’m Tanner. I’m from Exmouth — small coastal town up in Western Australia. Not 
    much happens out there, but it’s home.
    Soon as I finished high school, I joined the ADF — the Australian Defence Force. Thought I had life 
    figured out, y’know? I liked control. Needed it, really. Even though I believed in God, I didn’t trust 
    Him. Not properly. I was still tryna run the show myself, make my own calls — as if I could be my own 
    god while still saying I followed Him. That mindset kept me stuck for years.
    I was married once before. My first real relationship. Deep down, I knew it wasn’t right. The Lord 
    showed me signs — plenty of them — but I ignored them. Thought I could fix it. Thought I should. But it 
    fell apart, and after the divorce, I was wrecked.
    Took a lot of time, prayer, and surrender to heal from that. To actually give control over to God. And 
    once I did… that’s when I met R’Reei Stream.
    Mate, it was different from day one. Peaceful. Clear. Like Abba was saying, "Go on, son." Nothing but 
    green lights. The day before we got baptized — together — I proposed. She said yes. We’ve got the video 
    if you want proof — best day of my life.
    But I haven’t always been this put-together.
    There was a time I was deep in depression. Real dark. I didn’t see a way out. I planned to end my life. 
    Had it all worked out. But God — in His mercy — stopped me. That moment changed everything. I surrendered. 
    Gave my life to Jesus. Became born again.
    Now I live with purpose. Not because I earned it, but because He gave it.
    So yeah, I still struggle sometimes. But I’m not running the show anymore. He is.`,
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
    confessional: `\*walks in a little awkwardly\*
    Oh... am I supposed to sit right here? And that’s the camera I’m supposed to look at, right? Okay. 
    Cool.
    So... hi. This is kinda awkward, but my name is Robin Baker.
    Before I met the Lord, I was... let’s just say, hurt — a lot — especially by men. I had this mindset 
    like, “I don’t need no man.” And honestly, the ones I was with before? Not even that great in bed, so 
    I was like, “What’s the point?”
    Eventually, I got my own... “things” — you know, things that replaced the men. Things that satisfied me 
    in ways they never could. So I was good. I made up my mind: I don’t need a man, and I definitely don’t 
    want one.
    Then one day, everything changed.
    I heard the Lord call my name — not once, not twice — three times.
    And I answered: “Yes, Lord.”
    He told me exactly what I needed to do. So I did it. I destroyed everything from my past — especially 
    the “things.” I cleaned out my room, and more importantly, I let Him clean out my heart. That day, I 
    became a new woman. My mindset? Forever changed.
    And then...
    The next day at work, I met this guy. His name was Kai.
    At first? He was so annoying. Like... painfully annoying.
    But something about him — he was scrawny, kind of an oddball, and not many people liked him. I felt bad 
    for him. Like, genuinely. So I became his friend out of pity. I thought, “If that were me, I’d want 
    someone to treat me with kindness too.”
    That’s how it started. And somehow... the annoying, scrawny man became my less annoying, slightly less 
    scrawny husband.
    He kept bothering me, and I just kinda went along with it like, “Why not?”
    We became friends, and one day he asked me out. I was like, “Sure, free food? Bet.”
    But that date? It surprised me. He was different. We talked about God the entire time. I saw his love 
    for the Lord — and it wasn’t just talk, it was real. After that, we started doing Bible studies together, 
    spending more time with each other, and eventually... he asked me to marry him.
    And I said, “Sure, I’ll marry you!”
    Since then, we’ve been learning to love each other — truly love each other — with Christ at the center of 
    our marriage. The Lord has healed so much in me. Now, in this marriage, we communicate. We’re honest. 
    We keep it real. And we keep Him first.
    Oh — and before I go — just be ready for Kai to tell you his version of the story.
    He’ll say I was “head over heels” for him first. I was not. He says that every time, thinking it’s funny. 
    Hopefully, the Holy Spirit convicts him the next time he tells that lie.`,
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
    confessional: `Is this camera on me? Nah, I’m just messing — clearly it is.
    Alright, let’s get into it.
    I’m Kai. Born and raised in Brazil. And I’m married to the baddest chick, I mean woman in Eden — Robin. 
    She’s got me working on calling her a woman, not a chick. Progress, people.
    We actually met at this coffee shop we both worked at. Now, if you ask me how we really met… I’d love to 
    say she was head over heels, couldn’t keep her eyes off me, always finding excuses to talk. But let’s be 
    honest… it was me. I was gone from day one. Still am. But I know she loves me — deep, deep, deeeeeep 
    down.
    Wait, she said that? The Holy Spirit out here snitching again! But I love Him. I’d be nowhere without 
    Him — and definitely not married to Robin, meu amor.
    Now let me be real with you.
    Before Jesus got a hold of me, I was out here wildin’. Struggling with pornography. Sleeping around. I 
    grew up being the class clown — always laughed at, but never seen. Then came high school… the glow-up 
    was real. Suddenly, girls noticed me. And I liked it. Not just the attention — the power. They gave 
    themselves to me, and I took it. I had no idea what love actually was.
    I wasn’t a good person. But I’ve been made new.
    Jesus Christ, my Lord and Savior, changed everything. He saw me when no one else did. He loved me when I 
    didn’t know how to love myself. And because of Him, I’ve apologized to those I hurt. I’ve forgiven those 
    who hurt me.
    Like Jesus said — Matthew 6:14 — “If you forgive others their trespasses, your heavenly Father will also 
    forgive you.” But if you hold onto bitterness… how can you expect to be free?
    So yeah. That’s me. Not perfect. But redeemed. And still madly in love with the woman who made me better.
`,
    confessionalImage: '/characters/kai-placeholder.png', // 👈 Added image for confessional
  },

];

  