// Define the interface for sacred verses
interface SacredVerse {
  chapter: string;
  verse: string;
  text: string;
}

interface SacredVerses {
  gita: SacredVerse[];
  bible: SacredVerse[];
  quran: SacredVerse[];
}

// Create 700 verses for Gita, 30102 for Bible and 5236 for Quran
const generateVerses = (
  type: 'gita' | 'bible' | 'quran',
  count: number
): SacredVerse[] => {
  const verses: SacredVerse[] = [];
  
  // Define chapter patterns for each type
  const chapterNames = {
    gita: 'Chapter',
    bible: {
      ot: ['Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy', 'Joshua', 'Judges', 'Ruth', 
           'Samuel 1', 'Samuel 2', 'Kings 1', 'Kings 2', 'Chronicles 1', 'Chronicles 2', 'Ezra', 
           'Nehemiah', 'Esther', 'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon', 
           'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel', 'Hosea', 'Joel', 'Amos'],
      nt: ['Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans', 'Corinthians 1', 'Corinthians 2', 
           'Galatians', 'Ephesians', 'Philippians', 'Colossians', 'Thessalonians 1', 'Thessalonians 2', 
           'Timothy 1', 'Timothy 2', 'Titus', 'Philemon', 'Hebrews', 'James', 'Peter 1', 'Peter 2', 
           'John 1', 'John 2', 'John 3', 'Jude', 'Revelation']
    },
    quran: 'Surah'
  };
  
  // Templates for each type of text
  const textTemplates = {
    gita: [
      "The wise grieve neither for the living nor for the dead. There was never a time when you and I and all these kings did not exist.",
      "Those who are seers of the truth have concluded that of the nonexistent, there is no endurance, and of the existent, there is no cessation.",
      "The self-realized soul is not agitated by lamentation or hankering because they know that the eternal self cannot be killed nor changed.",
      "Just as a person puts on new garments, giving up old ones, the soul similarly accepts new material bodies, giving up the old and useless ones.",
      "The soul can never be cut to pieces by any weapon, nor burned by fire, nor moistened by water, nor withered by the wind.",
      "For the soul there is neither birth nor death at any time. The soul has not come into being, does not come into being, and will not come into being.",
      "O Partha, how can a person who knows that the soul is indestructible, eternal, unborn and immutable kill anyone or cause anyone to kill?",
      "As the embodied soul continuously passes, in this body, from boyhood to youth to old age, the soul similarly passes into another body at death.",
      "The wise are not bewildered by such a change called death. One who has taken birth is certain to die, and after death, one is certain to be born again.",
      "O son of Kunti, the temporary appearance of happiness and distress, and their disappearance in due course, are like the appearance and disappearance of winter and summer seasons.",
      "The Supreme Truth exists outside and inside of all living beings, the moving and the nonmoving. Because Truth is subtle, it is beyond the power of the material senses to see or know.",
      "Those who are connected in divine consciousness see all beings as equal, as spiritual beings. In joy and sorrow, pleasure and pain, they remain unwavered.",
      "For one who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, the mind will remain the greatest enemy.",
      "Whatever action a great person performs, common people follow. And whatever standards they set by exemplary acts, all the world pursues.",
      "In this world, there is nothing so sublime and pure as transcendental knowledge. Such knowledge is the mature fruit of all mysticism.",
      "Even a little advancement on this path can protect one from the most dangerous type of fear. In this endeavor there is no loss or diminution.",
      "Those who are on this path are resolute in purpose, and their aim is one. O beloved child of the Kurus, the intelligence of those who are irresolute is many-branched."
    ],
    bible: [
      "In the beginning, God created the heavens and the earth. The earth was formless and empty, darkness was over the surface of the deep.",
      "And God said, 'Let there be light,' and there was light. God saw that the light was good, and he separated the light from the darkness.",
      "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking.",
      "The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures, he leads me beside quiet waters, he refreshes my soul.",
      "I can do all this through him who gives me strength. And my God will meet all your needs according to the riches of his glory in Christ Jesus.",
      "But seek first his kingdom and his righteousness, and all these things will be given to you as well.",
      "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
      "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.",
      "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.",
      "The Lord bless you and keep you; the Lord make his face shine on you and be gracious to you; the Lord turn his face toward you and give you peace.",
      "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.",
      "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
      "The Lord is close to the brokenhearted and saves those who are crushed in spirit. The righteous person may have many troubles, but the Lord delivers him from them all.",
      "Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you."
    ],
    quran: [
      "In the name of Allah, the Entirely Merciful, the Especially Merciful. All praise is due to Allah, Lord of the worlds.",
      "The Entirely Merciful, the Especially Merciful, Master of the Day of Judgment. It is You we worship and You we ask for help.",
      "Guide us to the straight path - The path of those upon whom You have bestowed favor, not of those who have evoked Your anger or of those who are astray.",
      "Indeed, Allah does not wrong the people at all, but it is the people who are wronging themselves.",
      "And We have already created man and know what his soul whispers to him, and We are closer to him than his jugular vein.",
      "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
      "Allah does not burden a soul beyond that it can bear. It will have the reward it earns, and it will bear the burden it earns.",
      "The believers are nothing else than brothers. So make reconciliation between your brothers, and fear Allah, that you may receive mercy.",
      "And hold firmly to the rope of Allah all together and do not become divided. And remember the favor of Allah upon you.",
      "Indeed, Allah orders justice and good conduct and giving to relatives and forbids immorality and bad conduct and oppression.",
      "Say, 'O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins.'",
      "And whoever fears Allah - He will make for him a way out. And will provide for him from where he does not expect.",
      "O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another.",
      "Verily, with hardship comes ease. So when you have finished your duties, then stand up for worship. And to your Lord direct your longing.",
      "And We have certainly honored the children of Adam and carried them on the land and sea and provided for them of the good things."
    ]
  };
  
  // Generate verses based on the text templates
  for (let i = 0; i < count; i++) {
    let chapter, verseNum, text;
    
    // Select text template
    const templateIndex = i % textTemplates[type].length;
    text = `${textTemplates[type][templateIndex]} ${type === 'gita' ? '🕉️' : type === 'bible' ? '✝️' : '☪️'} (${type.toUpperCase()} #{${i + 1}})`;
    
    // Create appropriate chapter and verse format based on type
    if (type === 'gita') {
      const chapterNum = Math.floor(i / 72) + 1;
      verseNum = (i % 72) + 1;
      chapter = `Chapter ${chapterNum}`;
    } else if (type === 'bible') {
      const isOldTestament = i % 2 === 0;
      const books = isOldTestament ? chapterNames.bible.ot : chapterNames.bible.nt;
      const bookIndex = Math.floor(i / 20) % books.length;
      const chapterNum = Math.floor(i / 5) % 150 + 1;
      verseNum = i % 40 + 1;
      chapter = `${books[bookIndex]} ${chapterNum}`;
    } else { // quran
      const surahNum = Math.floor(i / 45) + 1;
      verseNum = (i % 45) + 1;
      chapter = `Surah ${surahNum}`;
    }
    
    verses.push({
      chapter,
      verse: verseNum.toString(),
      text
    });
  }
  
  return verses;
};

// Generate verses for each sacred text with updated counts
export const sacredVerses: SacredVerses = {
  gita: generateVerses('gita', 700),
  bible: generateVerses('bible', 31102),
  quran: generateVerses('quran', 6236)
};
