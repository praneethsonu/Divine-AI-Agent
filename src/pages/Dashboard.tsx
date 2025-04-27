
import React, { useState } from 'react';
import Layout from '../components/Layout';
import MoodSelector from '../components/dashboard/MoodSelector';
import DailyGuidance from '../components/dashboard/DailyGuidance';
import AnimatedCard from '../components/common/AnimatedCard';
import { ActivitySquare, Move, Sparkles, Circle } from 'lucide-react';

// 5 best mindful movement practices
const movementPractices = [
  {
    title: 'Yoga',
    description: 'Unites body and breath for balance and inner peace.',
    icon: <ActivitySquare className="h-6 w-6 text-yellow-600" />,
  },
  {
    title: 'Tai Chi',
    description: 'Gentle, flowing movements for relaxation and energy flow.',
    icon: <Move className="h-6 w-6 text-orange-600" />,
  },
  {
    title: 'Qi Gong',
    description: 'Cultivate life energy and calm through breath.',
    icon: <Sparkles className="h-6 w-6 text-yellow-700" />,
  },
  {
    title: 'Walking Meditation',
    description: 'Mindful steps integrate movement and awareness.',
    icon: <Move className="h-6 w-6 text-orange-700" />,
  },
  {
    title: 'Stretching & Mobility',
    description: 'Enhances flexibility while grounding body and mind.',
    icon: <Circle className="h-6 w-6 text-yellow-800" />,
  },
];

type Mood = 'peaceful' | 'anxious' | 'grateful' | 'confused' | 'inspired' | 'tired';

const Dashboard = () => {
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const currentTime = new Date();
  const hours = currentTime.getHours();

  let greeting = 'Good morning';
  if (hours >= 12 && hours < 17) {
    greeting = 'Good afternoon';
  } else if (hours >= 17) {
    greeting = 'Good evening';
  }

  return (
    <Layout>
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-light text-black mb-2 font-divine">
          {greeting},{" "}
          <span className="font-divine text-orange-500 font-semibold">Seeker</span>
        </h2>
        <p className="text-yellow-700/90 mb-2 font-divine">
          May your spiritual journey be guided by wisdom today
        </p>
      </div>
      <MoodSelector
        selectedMood={selectedMood}
        onSelectMood={setSelectedMood}
      />
      {/* DailyGuidance automatically adapts, no Mindfulness Meditation mention */}
      <DailyGuidance selectedMood={selectedMood} />
      <h3 className="text-2xl md:text-3xl font-light text-black mt-12 mb-6 font-divine">
        Movement Practices for Mindful Living
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {movementPractices.map((practice) => (
          <div
            key={practice.title}
            className="flex flex-col items-center text-center bg-white rounded-xl border border-yellow-200 shadow-md p-6 min-h-[180px] transition hover:scale-105 hover:shadow-lg"
          >
            <div className="mb-3 flex items-center justify-center rounded-full bg-orange-50 p-3 shadow">
              {practice.icon}
            </div>
            <span className="font-divine text-lg mb-1 text-orange-700 font-bold">
              {practice.title}
            </span>
            <p className="text-sm text-black/80">{practice.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 max-w-2xl mx-auto">
        <div className="bg-white border border-yellow-100 rounded-xl p-6 shadow text-center">
          <h4 className="text-lg font-divine text-yellow-700 mb-2">
            What are Mindful Movement Practices?
          </h4>
          <p className="text-black text-md leading-relaxed font-divine">
            Mindful movement arts integrate physical exercise with meditative awareness, supporting{' '}
            <span className="font-bold text-orange-600">health</span>,{' '}
            <span className="font-bold text-yellow-500">joy</span>, and{' '}
            <span className="font-bold text-black">inner harmony</span>.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
