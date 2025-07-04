// ParticlesBackground.js
import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim'; // or 'tsparticles' for all features

const ParticlesBackground = () => {
  // useCallback memoizes the particlesInit function to prevent unnecessary re-renders
  // It's used to initialize the tsParticles engine with the slim bundle for performance.
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // useCallback memoizes the particlesLoaded function.
  // This function is called once the particles container is fully loaded.
  const particlesLoaded = useCallback(async (container) => {
    // console.log("Particles container loaded", container); // Optional: for debugging
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#0a0a0a", // Very dark background color for the particles canvas
          },
        },
        fpsLimit: 60, // Limits the frames per second for smoother animation and performance
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push", // When clicked, new particles are "pushed" into existence
            },
            onHover: {
              enable: true,
              mode: "repulse", // When hovered, particles repel away from the cursor
            },
            resize: true, // Particles animation adapts to window resizing
          },
          modes: {
            push: {
              quantity: 4, // Number of particles to push on each click
            },
            repulse: {
              distance: 100, // The distance from the cursor at which particles repel
              duration: 0.4, // The duration of the repulsion animation
            },
          },
        },
        particles: {
          color: {
            value: "#00bfff", // Initial color of the particles (a vibrant electric blue)
            animation: {
              enable: true,
              speed: 5, // Speed of the color animation
              sync: true, // All particles change color in sync
              mode: "hues", // The color animates through different hues of the color spectrum
            }
          },
          links: {
            color: "#00aaff", // Color of the lines connecting particles
            distance: 150, // Maximum distance for particles to connect with a line
            enable: true, // Enable drawing lines between particles
            opacity: 0.5, // Opacity of the connecting lines
            width: 1, // Width of the connecting lines
          },
          collisions: {
            enable: true, // Particles can collide and bounce off each other
          },
          move: {
            direction: "none", // Particles move in random directions
            enable: true,
            outModes: {
              default: "bounce", // Particles bounce off the edges of the canvas
            },
            random: false, // Movement is not completely random, but follows a path
            speed: 1, // Speed of particle movement
            straight: false, // Particles do not move in straight lines
          },
          number: {
            density: {
              enable: true,
              area: 800, // Area in which particles are distributed (higher value means more spread out)
            },
            value: 80, // Total number of particles on the canvas
          },
          opacity: {
            value: 0.5, // Base opacity of individual particles
          },
          shape: {
            type: "circle", // Particles are rendered as circles
          },
          size: {
            value: { min: 1, max: 5 }, // Random size for each particle, between 1 and 5 pixels
          },
        },
        detectRetina: true, // Optimizes particle rendering for high-DPI (retina) displays
      }}
      // CRITICAL FIX: Change z-index to a negative value so it renders behind other content
      className="fixed top-0 left-0 w-full h-full z-0"
    />
  );
};

export default ParticlesBackground;
