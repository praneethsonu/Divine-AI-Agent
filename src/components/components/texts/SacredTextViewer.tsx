import React, { useState, useEffect } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { Book, ChevronRight, ChevronLeft, Star } from 'lucide-react';
import AnimatedCard from '../common/AnimatedCard';
import { sacredVerses } from '@/data/sacredVerses';

type ScriptureType = 'gita' | 'bible' | 'quran';

interface SacredTextViewerProps {
  scripture: string;
  scriptureType: ScriptureType;
}

const SacredTextViewer = ({ scripture, scriptureType }: SacredTextViewerProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [content, setContent] = useState<any>([]);
  
  useEffect(() => {
    if (scriptureType) {
      const scriptureContent = sacredVerses[scriptureType] || [];
      setContent(scriptureContent);
      setTotalPages(scriptureContent.length);
      setCurrentPage(1);
    }
  }, [scripture, scriptureType]);
  
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const currentContent = content[currentPage - 1];
  
  const getTextBlockClass = () => {
    switch (scriptureType) {
      case 'gita':
        return 'gita-text-block';
      case 'bible':
        return 'bible-text-block';
      case 'quran':
        return 'quran-text-block';
      default:
        return 'sacred-text-block';
    }
  };

  const getBackgroundImage = () => {
    if (scriptureType === 'gita') {
      return '/lovable-uploads/b6a77f19-be4b-4b12-86fd-f5eef74de6de.png';
    } else if (scriptureType === 'bible') {
      return '/lovable-uploads/148cc506-ef67-4533-91dd-4e92785a3a4c.png';
    } else if (scriptureType === 'quran') {
      return '/lovable-uploads/e6298c2c-9f3b-4926-a85c-a148ae5a26d3.png';
    }
    return '';
  };
  
  return (
    <AnimatedCard className="overflow-hidden">
      <div className={cn(
        "p-1 text-white relative overflow-hidden",
        scriptureType === 'gita' ? 'bg-gradient-gita' :
        scriptureType === 'bible' ? 'bg-gradient-bible' :
        'bg-gradient-quran'
      )}>
        <div className="absolute inset-0 opacity-20">
          <img 
            src={getBackgroundImage()} 
            alt={scriptureType} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex items-center justify-between px-4 py-3 relative z-10">
          <div className="flex items-center gap-2">
            <Book className="h-5 w-5" />
            <h3 className="font-divine font-bold text-lg">
              {scriptureType === 'gita' ? 'Bhagavad Gita' :
               scriptureType === 'bible' ? 'Holy Bible' :
               'Holy Quran'}
            </h3>
          </div>
          <div className="text-sm font-medium flex items-center gap-2">
            <Star className="h-4 w-4" />
            Page {currentPage} of {totalPages}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        {currentContent ? (
          <>
            <div className="mb-4 flex justify-between items-center">
              <h3 className="text-xl font-bold bg-gradient-divine bg-clip-text text-transparent">
                {currentContent.chapter}
              </h3>
              <span className="text-sm font-medium text-divine-500 dark:text-divine-400">
                Verse {currentContent.verse}
              </span>
            </div>
            
            <ScrollArea className="h-[400px] md:h-[500px]">
              <div className="relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <img 
                    src={getBackgroundImage()} 
                    alt={scriptureType} 
                    className="w-full h-full object-contain object-center"
                  />
                </div>
                <div className={cn(
                  "sacred-text-block font-medium text-lg leading-relaxed relative z-10",
                  scriptureType === 'gita' ? 'gita-text-block' :
                  scriptureType === 'bible' ? 'bible-text-block' :
                  'quran-text-block'
                )}>
                  {currentContent.text}
                </div>
              </div>
              
              <div className="mt-6 text-divine-600/90 dark:text-divine-400/90">
                <p className="font-medium italic">Reflect upon these sacred words and find guidance in their timeless wisdom.</p>
              </div>
            </ScrollArea>
            
            <div className="mt-6 flex justify-between items-center">
              <button 
                onClick={prevPage}
                disabled={currentPage === 1}
                className={cn(
                  "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  currentPage === 1 
                    ? "text-divine-400/50 dark:text-divine-500/30 cursor-not-allowed" 
                    : "text-divine-600 dark:text-divine-400 hover:bg-divine-50 dark:hover:bg-divine-100/5"
                )}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </button>
              
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-divine-500 animate-pulse-gentle" />
                <span className="font-medium text-divine-600 dark:text-divine-400">
                  Sacred Wisdom
                </span>
                <Star className="h-4 w-4 text-divine-500 animate-pulse-gentle" />
              </div>
              
              <button 
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className={cn(
                  "flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  currentPage === totalPages 
                    ? "text-divine-400/50 dark:text-divine-500/30 cursor-not-allowed" 
                    : "text-divine-600 dark:text-divine-400 hover:bg-divine-50 dark:hover:bg-divine-100/5"
                )}
              >
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-[300px] text-divine-500/50">
            <Book className="h-12 w-12 mb-4 opacity-30" />
            <p className="font-medium">Select a page to begin reading</p>
          </div>
        )}
      </div>
    </AnimatedCard>
  );
};

export default SacredTextViewer;
