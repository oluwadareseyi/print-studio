import React, { useRef, useEffect, useState } from "react";
import LandingTop from "../components/LandingTop/LandingTop";
import LandingBottom from "../components/LandingBottom/LandingBottom";
import { motion } from "framer-motion";

const transition = { duration: 2, ease: [0.43, 0.13, 0.23, 0.96] };

const Landing = () => {
  let product = useRef(null);
  let footer = useRef(null);
  const [refs, setRefs] = useState({});

  useEffect(() => {
    setRefs((currentRefs) => {
      return { ...currentRefs, product, footer };
    });
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.2 }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { ...transition, duration: 1 },
      }}
      transition={transition}
      className="landing max-width"
    >
      <LandingTop refs={refs} />
      <LandingBottom footerRef={footer} productRef={product} />
    </motion.div>
  );
};

export default Landing;
