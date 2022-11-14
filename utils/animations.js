const easing = [0.6, -0.05, 0.91, 0.99];

export default {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: easing,
    },
  },
};
