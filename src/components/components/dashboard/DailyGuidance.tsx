import React from 'react';
import AnimatedCard from '../common/AnimatedCard';
import { Book, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

type Mood = 'peaceful' | 'anxious' | 'grateful' | 'confused' | 'inspired' | 'tired';

interface DailyGuidanceProps {
  selectedMood: Mood | null;
}

const DailyGuidance = ({ selectedMood }: DailyGuidanceProps) => {
  // This would ideally come from an API based on the user's mood
  const getGuidanceText = () => {
    switch (selectedMood) {
      case 'peaceful':
        return {
          source: 'Bhagavad Gita',
          text: 'The mind acts like an enemy for those who do not control it.',
          verse: 'Chapter 6, Verse 6',
          meditation: 'Mindfulness Meditation',
          guidance: 'Continue nurturing your peaceful state by practicing gratitude and mindfulness meditation.'
        };
      case 'anxious':
        return {
          source: 'Bible',
          text: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.',
          verse: 'Philippians, 4:6',
          meditation: 'Breathing Meditation',
          guidance: 'Find a quiet space and practice deep breathing to calm your anxious thoughts.'
        };
      case 'grateful':
        return {
          source: 'Quran',
          text: 'If you are grateful, I will surely increase you [in favor].',
          verse: 'Surah Ibrahim, 14:7',
          meditation: 'Gratitude Meditation',
          guidance: 'Express your gratitude through journaling and sharing your blessings with others.'
        };
      case 'confused':
        return {
          source: 'Bhagavad Gita',
          text: 'When a person is devoted to something with complete faith, I unify his faith in that form.',
          verse: 'Chapter 7, Verse 21',
          meditation: 'Clarity Meditation',
          guidance: 'Seek clarity by connecting with your inner wisdom through silent reflection.'
        };
      case 'inspired':
        return {
          source: 'Bible',
          text: 'Whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things.',
          verse: 'Philippians, 4:8',
          meditation: 'Creative Visualization',
          guidance: 'Channel your inspiration into creative expression and positive action.'
        };
      case 'tired':
        return {
          source: 'Bhagavad Gita',
          text: 'For one who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, the mind will remain the greatest enemy.',
          verse: 'Chapter 6, Verse 6',
          meditation: 'Restorative Meditation',
          guidance: 'Allow yourself to rest and recharge with gentle, restorative practices.'
        };
      default:
        return {
          source: 'Spiritual Wisdom',
          text: 'The journey of a thousand miles begins with a single step.',
          verse: 'Ancient Proverb',
          meditation: 'Mindfulness Meditation',
          guidance: 'Start your spiritual journey by connecting with your inner self through meditation.'
        };
    }
  };

  const guidance = getGuidanceText();

  if (!selectedMood) {
    return (
      <AnimatedCard className="p-6 md:p-8 text-center">
        <h3 className="text-3xl font-light text-black mb-4">
          Select how you're feeling to receive your personalized spiritual guidance
        </h3>
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-divine-100 dark:bg-divine-100/10 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-divine-200 dark:bg-divine-200/20 animate-pulse-gentle"></div>
        </div>
        <p className="text-black/70">
          DIVINE-AI will analyze your emotional state and provide wisdom from sacred texts
        </p>
      </AnimatedCard>
    );
  }

  return (
    <div className="space-y-6">
      <AnimatedCard className="p-6 md:p-8">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-light text-black mb-2">
              Your Divine Guidance
            </h3>
            <p className="text-black/70 mb-4">
              Based on your {selectedMood} state
            </p>
          </div>
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gradient-divine flex items-center justify-center text-white">
            <Book className="h-5 w-5" />
          </div>
        </div>
        
        <blockquote className="sacred-text-block">
          <p className="text-black mb-2">"{guidance.text}"</p>
          <footer className="text-black/70 text-sm">
            — {guidance.source}, {guidance.verse}
          </footer>
        </blockquote>
        
        <p className="text-black mb-6">
          {guidance.guidance}
        </p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            to="/sacred-texts"
            className="divine-button-subtle flex items-center justify-center"
          >
            <Book className="mr-2 h-4 w-4" />
            Explore Sacred Texts
          </Link>
        </div>
      </AnimatedCard>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatedCard className="p-6" delay={1}>
          <h4 className="text-lg font-medium text-black mb-3">
            Divine Reflection
          </h4>
          <p className="text-black/70 mb-4">
            Take a moment to reflect on how the sacred wisdom resonates with your current state.
          </p>
          <div className="mb-4">
            <div className="h-2 w-full bg-divine-100 dark:bg-divine-100/10 rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-gradient-divine rounded-full"></div>
            </div>
            <div className="flex justify-between text-xs text-black/70 mt-1">
              <span>Begin</span>
              <span>In Progress</span>
              <span>Complete</span>
            </div>
          </div>
          <button className="divine-button-subtle w-full">
            Continue Reflection
          </button>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default DailyGuidance;
