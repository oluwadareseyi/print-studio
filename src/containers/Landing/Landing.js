import React, { useRef, useEffect, useState } from "react";
import LandingTop from "../../components/LandingTop/LandingTop";
import LandingBottom from "../../components/LandingBottom/LandingBottom";

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
    <div>
      <LandingTop refs={refs} />
      <LandingBottom footerRef={footer} productRef={product} />
    </div>
  );
};

export default Landing;
