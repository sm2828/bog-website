import { useState, useMemo, useRef, useCallback } from "react";

import Header from "./components/Header";
import TrueFocus from "./components/TrueFocus";
import LightRays from "./components/LightRays";
import InfiniteMenu from "./components/InfiniteMenu";
import Crosshair from "./components/Crosshair";
import LoadingScreen from "./components/LoadingScreen";

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  const originalItems = [
    {
      image: '/bog1.jpeg',
      link: '#',
      title: 'BOGGERS',
    },
    {
      image: '/bog2.jpeg',
      link: '#',
      title: 'The Gift of Bog',
    },
    {
      image: '/bog3.jpeg',
      link: '#',
      title: 'The Hiesenbog',
    },
    {
      image: '/bog4.jpeg',
      link: '#',
      title: 'Ricardio Bog',
    },
    {
      image: '/bog5.jpeg',
      link: '#',
      title: 'The Bog Smirk',
    },
    {
      image: '/bog6.jpeg',
      link: '#',
      title: 'Max The Bog',
    },
    {
      image: '/bog7.jpeg',
      link: '#',
      title: 'Golden Labogu',
    },
    {
      image: '/bog8.jpeg',
      link: '#',
      title: 'BD Labogu',
    },
    {
      image: '/bog9.jpeg',
      link: '#',
      title: 'Get Bogged.',
    },
    {
      image: '/bog11.jpeg',
      link: '#',
      title: 'Theo Bog',
    },
    {
      image: '/bog13.jpeg',
      link: '#',
      title: 'John W. Bog',
    },
    {
      image: '/bog14.jpeg',
      link: '#',
      title: 'Bog Guy',
    },
    {
      image: '/bog15.jpeg',
      link: '#',
      title: 'Phantom Bog',
    },
    {
      image: '/bog16.jpeg',
      link: '#',
      title: 'Fried Bog',
    },
    {
      image: '/bog17.jpeg',
      link: '#',
      title: 'What the Bog',
    },
    {
      image: '/bog18.jpeg',
      link: '#',
      title: 'Enter The Bog',
    },
    {
      image: '/bog19.jpeg',
      link: '#',
      title: 'No Bog ?',
    },
    {
      image: '/bog20.jpeg',
      link: '#',
      title: 'Dr. JinBog',
    },
    {
      image: '/bog21.jpeg',
      link: '#',
      title: 'Guy Bog',
    },
    {
      image: '/bog22.jpeg',
      link: '#',
      title: 'Review Bog',
    },
    {
      image: '/bog23.jpeg',
      link: '#',
      title: 'Bogsy',
    },
    {
      image: '/bog24.jpeg',
      link: '#',
      title: 'Bog Forgive Me',
    },
    {
      image: '/bog25.jpeg',
      link: '#',
      title: 'Boglined',
    },
    
  ];

  // Shuffle items randomly on every render
  const items = useMemo(() => shuffleArray(originalItems), [refreshKey]);

  const handleRefresh = useCallback(() => {
    setRefreshKey(prev => prev + 1);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {/* <MobileOrientationBlocker /> */}
      <div className="min-h-screen relative" ref={containerRef}>
        <Crosshair containerRef={containerRef} color="#ffffff" />
        
        <div className="absolute inset-0 z-10">
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1.5}
            lightSpread={0.6}
            rayLength={1.5}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="w-full h-full"
          />
        </div>
        
        <Header />
        
        <main className="flex min-h-screen flex-col items-center justify-start gap-8 sm:gap-12 md:gap-16 pt-16 sm:pt-20 pb-4 sm:pb-8 px-4 text-white text-center relative z-20">
          <div className="relative h-[200px] sm:h-[300px] md:h-[400px] w-full">
            <TrueFocus 
              sentence="Bog The World"
              manualMode={false}
              blurAmount={8}
              borderColor="red"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </div>
          
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full">
            <InfiniteMenu items={items} onRefresh={handleRefresh}/>
          </div>
        </main>
        
        <footer className="text-center py-4 px-4 text-gray-400 text-xs sm:text-sm relative z-20">
          $Bog is a meme coin with no value or utility. It's just for fun. Not financial advice. Use at your own risk.
        </footer>
      </div>
    </>
  );
}

export default App;
