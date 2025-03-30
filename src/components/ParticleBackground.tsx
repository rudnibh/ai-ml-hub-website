import { useCallback } from 'react';
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles loaded", container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: true,
                force: 20,
                smooth: 50
              }
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            grab: {
              distance: 150,
              links: {
                opacity: 0.3
              }
            }
          },
        },
        particles: {
          color: {
            value: ["#8B5CF6", "#A78BFA", "#7C3AED", "#C4B5FD", "#DDD6FE", "#EC4899"],
          },
          links: {
            color: "#A78BFA",
            distance: 200,
            enable: true,
            opacity: 0.3,
            width: 0.7,
            triangles: {
              enable: true,
              color: "#7C3AED",
              opacity: 0.05
            }
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.6,
            straight: false,
            trail: {
              enable: true,
              length: 3,
              fillColor: "#2E1065",
            }
          },
          number: {
            density: {
              enable: true,
              area: 1200,
            },
            value: 40,
            max: 50,
          },
          opacity: {
            value: 0.4,
            random: true,
            anim: {
              enable: true,
              speed: 0.3,
              opacity_min: 0.2,
              sync: false
            }
          },
          shape: {
            type: ["circle", "polygon"],
            polygon: {
              sides: 6
            }
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
            anim: {
              enable: true,
              speed: 1,
              size_min: 0.3,
              sync: false
            }
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.03,
              opacity: 0.5,
              color: {
                value: ["#A78BFA", "#C4B5FD"]
              }
            }
          }
        },
        detectRetina: true,
      }}
      className="fixed inset-0 -z-10"
    />
  );
}