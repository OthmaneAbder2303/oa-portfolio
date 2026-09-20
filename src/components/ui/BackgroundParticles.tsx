import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';

const BackgroundParticles: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="bg-particles"
      init={particlesInit}
      className="absolute inset-0 -z-10 pointer-events-none"
      options={{
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: { value: 38, density: { enable: true, area: 900 } },
          color: { value: '#16a36a' },
          opacity: { value: 0.045 },
          size: { value: { min: 1, max: 3 } },
          links: {
            enable: true,
            distance: 120,
            color: '#16a36a',
            opacity: 0.035,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.35,
            direction: 'none',
            outModes: { default: 'out' }
          }
        },
        interactivity: {
          detectsOn: 'canvas',
          events: { onHover: { enable: false }, onClick: { enable: false }, resize: true }
        },
        background: { color: 'transparent' }
      }}
    />
  );
};

export default BackgroundParticles;
