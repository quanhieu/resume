export const ParticlesParams = {
  particles: {
    number: {
      value: 180,
      density: {
        enable: true,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.3,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 1,
      direction: "bottom",
      out_mode: "out",
    },
  },
};

export const ParticlesOptions = {
  background: {
    //  "color":"#000000"
  },
  particles: {
    color: {
      value: "#fff",
    },
    move: {
      direction: "bottom",
      enable: true,
      outModes: "out",
      speed: 2,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 180,
    },
    opacity: {
      value: 0.7,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: 3,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.3,
      },
    },
    wobble: {
      enable: true,
      distance: 10,
      speed: 10,
    },
    zIndex: {
      value: {
        min: 0,
        max: 100,
      },
    },
  },
};
