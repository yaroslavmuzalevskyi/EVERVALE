import React from "react";
import HeroSection from "../sections/HeroSection";
import ExplanationSection from "../sections/ExplanationSection";
import WhyWeSection from "../sections/WhyWeSection";

const B2B = () => {
  return (
    <div className="flex flex-col gap-52 px-[130px]">
      <HeroSection />
      <ExplanationSection />
      <WhyWeSection />
    </div>
  );
};

export default B2B;
