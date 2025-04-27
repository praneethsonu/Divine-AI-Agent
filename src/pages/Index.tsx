
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

// Logo ("DIVINE-AI" as on Dashboard)
const DivineAILogo = () => (
  <div className="flex items-center space-x-3 mb-8">
    <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-yellow-200 via-orange-200 to-yellow-50 flex items-center justify-center animate-rotate-slow shadow-lg">
      <Sparkles className="h-6 w-6 text-orange-400" />
    </div>
    <span className="font-divine text-3xl md:text-4xl tracking-wider font-semibold text-black" style={{ letterSpacing: '0.07em', color: "#000" }}>
      DIVINE-AI
    </span>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white">
      {/* Main readable, peaceful content */}
      <div className="container mx-auto max-w-4xl px-6 md:px-10 lg:px-12 py-14 md:py-24">
        <div className="flex flex-col items-center text-center">
          <DivineAILogo />
          <h1 className="text-4xl md:text-5xl font-divine mb-5 leading-tight font-bold" style={{color: "#000"}}>
            Be at <span className="text-orange-500 font-bold">peace</span>, feel <span className="text-yellow-400 font-bold">energy</span>, <span className="text-black">move</span> with <span className="text-orange-400 font-bold">joy</span>
          </h1>
          <p className="max-w-2xl mb-7 text-lg md:text-xl font-light text-black/90" style={{ lineHeight: '1.6'}}>
            Mindful movement arts blend simple physical activity with meditative awareness to gently nurture <span className="font-semibold text-orange-400">health</span>, <span className="font-semibold text-yellow-500">joy</span>, and <span className="font-semibold text-black">inner harmony</span>.
          </p>
          <div className="mb-10">
            <Link to="/dashboard" className="inline-block bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-200 text-black font-semibold px-7 py-3 rounded-xl shadow hover:scale-105 transition-all duration-300">
              Begin Your Journey
            </Link>
          </div>
        </div>
        {/* Mindful Practices section */}
        <section className="rounded-2xl bg-white/90 border border-yellow-50 shadow-lg px-5 md:px-12 py-10 md:py-16 mx-auto max-w-2xl mt-2">
          <h2 className="text-2xl md:text-3xl font-divine font-bold mb-5" style={{color: "#000"}}>Mindful Practices</h2>
          <p className="mb-8 text-black font-medium" style={{ lineHeight: '1.5' }}>
            Move, breathe, and be present. These peaceful movement practices support a gentle body, clear mind, and a joyful heart.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <PracticeCard
              title="Yoga"
              color="from-yellow-50 via-yellow-100 to-orange-100"
              description="Simple postures & breath unite body and mind."
            />
            <PracticeCard
              title="Tai Chi"
              color="from-orange-100 via-yellow-100 to-yellow-200"
              description="Soft, flowing movements calm the spirit."
            />
            <PracticeCard
              title="Qi Gong"
              color="from-yellow-100 via-orange-200 to-yellow-300"
              description="Cultivate calm energy through breath and focus."
            />
            <PracticeCard
              title="Walking Meditation"
              color="from-orange-50 via-yellow-50 to-orange-100"
              description="Mindful steps, connecting movement and awareness."
            />
          </div>
        </section>
        {/* Simple campaign/affirmation for peacefulness */}
        <div className="mt-14 text-center">
          <span className="font-divine text-xl text-orange-500">
            “The journey to joy begins with a single, gentle movement.”
          </span>
        </div>
      </div>
    </div>
  );
};

const PracticeCard = ({
  title,
  description,
  color
}: {
  title: string,
  description: string,
  color: string
}) => (
  <div
    className={`rounded-xl border border-yellow-100 p-7 flex flex-col items-center shadow transition-all duration-300 bg-white hover:shadow-md hover:scale-105 ${color}`}
    style={{
      background: color.startsWith("from-") ? undefined
        : `linear-gradient(135deg, #fffbe6 0%, #ffe2b2 100%)`
    }}
  >
    <span className="font-divine text-lg mb-1 text-orange-500 font-semibold">{title}</span>
    <p className="text-md text-black/80 text-center">{description}</p>
  </div>
);

export default Index;

