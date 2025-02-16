import { Suspense } from 'react';
import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';

import { calculateSizes } from '../constants/index.js';

import CanvasLoader from '../components/CanvasLoader';
import HackerRoom from '../components/HackerRoom';

const Hero = () => {
  const isSmall = useMediaQuery({ maxWidth: 480 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className="w-full min-h-screen flex flex-col relative" id="home">
      <div className="flex flex-col items-center justify-center mx-auto h-full text-white mt-32 sm:mt-36 c-space gap-3">
        <p className=" sm:text-5xl text-3xl font-medium ">
          <span className="glow-text"> Hello, I am Meri</span>
          <span className="waving-hand">👋</span>
        </p>

        <p className="text-gray_gradient hero_tag">
          Making The Web Pretty, One Page At A time
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            <HackerRoom
              position={sizes.deskPosition}
              scale={sizes.deskScale}
              rotation={[0, -Math.PI, 0]}
            />
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
