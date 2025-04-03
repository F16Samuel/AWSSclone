export const SlideUp = (delay) => {
    return {
        initial: {
            y: 100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5
            }
        }
    }
}

export const SlideLeft = (delay) => {
  return {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};

  
export const SlideRight = (delay) => {
  return {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay,
      },
    },
  };
};


export const SlideDown = (delay) => {
  return {
      initial: {
          y: -100,
          opacity: 0
      },
      animate: {
          y: 0,
          opacity: 1,
          transition: {
              delay: delay,
              duration: 0.5
          }
      }
  }
}

export const FooterAnimation = (delay) => {
  return {
    initial: { y: 100, opacity: 0, scale: 0.95 },
    animate: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: delay, 
        duration: 0.6, 
        ease: "easeOut"
      } 
    }
  };
};
