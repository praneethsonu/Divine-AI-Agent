
import React, { useState } from 'react';
import Layout from '../components/Layout';
import SacredTextViewer from '../components/texts/SacredTextViewer';
import AnimatedCard from '../components/common/AnimatedCard';
import { BookOpen, Star, Sparkles, Book } from 'lucide-react';
import { cn } from '@/lib/utils';

type ScriptureType = 'gita' | 'bible' | 'quran';

const SacredTexts = () => {
  const [activeText, setActiveText] = useState<string | null>(null);

  const sacredTexts = [
    {
      id: 'bhagavad-gita',
      title: 'Bhagavad Gita',
      description: 'The divine song of Lord Krishna, revealing eternal truths and spiritual wisdom.',
      icon: <Star className="text-golden-500" />,
      scriptureType: 'gita' as ScriptureType,
      symbol: '🕉️',
      image: 'src/pages/gita.jpeg'
    },
    {
      id: 'holy-bible',
      title: 'Holy Bible',
      description: 'The sacred word of God, containing divine teachings and eternal wisdom.',
      icon: <Book className="text-golden-600" />,
      scriptureType: 'bible' as ScriptureType,
      symbol: '✝️',
      image: 'src/pages/bible.jpg'
    },
    {
      id: 'holy-quran',
      title: 'Holy Quran',
      description: 'The final divine revelation, guiding humanity towards spiritual enlightenment.',
      icon: <BookOpen className="text-golden-500" />,
      scriptureType: 'quran' as ScriptureType,
      symbol: '☪️',
      image: 'src/pages/quran.jpeg'
    },
  ];

  const selectedText = activeText
    ? sacredTexts.find(text => text.id === activeText)
    : null;

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 font-divine relative">
        <div className="absolute inset-0 divine-pattern-2 opacity-10 pointer-events-none" />
        
        <div className="mb-10 text-center relative">
          <div className="absolute inset-0 bg-gradient-divine opacity-5 blur-3xl -z-10" />
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-golden-300 to-saffron-300 flex items-center justify-center animate-float shadow-divine-lg">
              <Star className="h-10 w-10 text-white animate-pulse-gentle" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-divine font-bold bg-gradient-divine-conic bg-clip-text text-transparent animate-background-shine tracking-wider">
              Sacred Wisdom Repository
            </h1>
            <div className="flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-golden-500 animate-pulse-gentle" />
              <p className="text-lg md:text-xl text-divine-800 dark:text-divine-200 font-medium">
                Explore timeless verses of divine enlightenment
              </p>
              <Sparkles className="h-6 w-6 text-saffron-500 animate-pulse-gentle" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {sacredTexts.map((text, index) => (
            <AnimatedCard
              key={text.id}
              className={cn(
                "overflow-hidden transition-all transform hover:scale-105 cursor-pointer divine-glow",
                activeText === text.id ? "ring-4 ring-offset-4 ring-golden-400/50" : ""
              )}
              onClick={() => setActiveText(text.id)}
              delay={index}
              glassEffect
            >
              <div className="relative h-72 w-full overflow-hidden rounded-t-xl">
                <img
                  src={text.image}
                  alt={text.title}
                  className="absolute inset-0 w-full h-full object-cover object-center transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <span className="text-4xl" role="img" aria-label={`${text.title} symbol`}>
                    {text.symbol}
                  </span>
                </div>
              </div>

              <div className="p-8 bg-white/95 dark:bg-divine-900/95 backdrop-blur-xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-divine shadow-divine-md">
                      {React.cloneElement(text.icon as React.ReactElement, { className: "h-7 w-7 text-white" })}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-divine font-bold bg-gradient-divine bg-clip-text text-transparent">
                      {text.title}
                    </h3>
                  </div>
                </div>
                <p className="text-divine-700 dark:text-divine-300 font-medium leading-relaxed text-lg">
                  {text.description}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {selectedText && (
          <div className="mt-12 animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Star className="h-8 w-8 text-golden-500" />
              <h2 className="text-3xl md:text-4xl font-divine font-bold bg-gradient-divine bg-clip-text text-transparent">
                {selectedText.title}
              </h2>
              <span className="text-4xl">{selectedText.symbol}</span>
            </div>
            <SacredTextViewer
              scripture={selectedText.id}
              scriptureType={selectedText.scriptureType}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SacredTexts;
