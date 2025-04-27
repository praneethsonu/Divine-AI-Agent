
import React from 'react';
import { cn } from '@/lib/utils';

type Mood = 'peaceful' | 'anxious' | 'grateful' | 'confused' | 'inspired' | 'tired';

interface MoodSelectorProps {
  selectedMood: Mood | null;
  onSelectMood: (mood: Mood) => void;
}

const MoodSelector = ({ selectedMood, onSelectMood }: MoodSelectorProps) => {
  const moods: { value: Mood; label: string; emoji: string }[] = [
    { value: 'peaceful', label: 'Peaceful', emoji: '😌' },
    { value: 'anxious', label: 'Anxious', emoji: '😟' },
    { value: 'grateful', label: 'Grateful', emoji: '🙏' },
    { value: 'confused', label: 'Confused', emoji: '🤔' },
    { value: 'inspired', label: 'Inspired', emoji: '✨' },
    { value: 'tired', label: 'Tired', emoji: '😴' },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-xl font-light mb-4 text-divine-800 dark:text-divine-200">How are you feeling today?</h3>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
        {moods.map((mood) => (
          <button
            key={mood.value}
            onClick={() => onSelectMood(mood.value)}
            className={cn(
              'flex flex-col items-center justify-center py-4 px-2 rounded-xl transition-all duration-300',
              selectedMood === mood.value
                ? 'bg-divine-200 dark:bg-divine-300/20 transform scale-[1.05] shadow-divine-sm'
                : 'bg-white/60 dark:bg-divine-100/5 hover:bg-divine-100 dark:hover:bg-divine-200/10'
            )}
          >
            <span className="text-2xl mb-2" role="img" aria-label={mood.label}>
              {mood.emoji}
            </span>
            <span className="text-sm font-medium text-divine-700 dark:text-divine-300">
              {mood.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;
