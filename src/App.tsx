import { useState, useMemo, useRef } from "react";

import Button from "./components/Button";
import Header from "./components/Header";
import TrueFocus from "./components/TrueFocus";
import LightRays from "./components/LightRays";
import InfiniteMenu from "./components/InfiniteMenu";
import Crosshair from "./components/Crosshair";

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
      title: 'Dr. Bog',
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
    
  ];

  // Shuffle items randomly on every render
  const items = useMemo(() => shuffleArray(originalItems), []);

  return (
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
      
      <main className="flex min-h-screen flex-col items-center justify-start gap-16 pt-20 pb-8 text-white text-center relative z-20">
        <div style={{position: 'relative', height: '400px'}}>
          <TrueFocus 
            sentence="Bog The World"
            manualMode={false}
            blurAmount={8}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
        </div>
        
        <div style={{ height: '500px', position: 'relative', width: '100%' }}>
          <InfiniteMenu items={items}/>
        </div>
      </main>
    </div>
  );
}

export default App;
