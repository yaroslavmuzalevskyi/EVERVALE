import React from "react";
import InfoContainer from "../common/InfoContainer";
import Button from "../ui/Button";
import Card from "../common/Card";

const WhyWeSection = () => {
  return (
    <div className="flex flex-col gap-20">
      <div className=" w-full flex justify-between">
        <InfoContainer
          title="Why we?"
          titleClassName="display-xl text-pr_w"
          contentClassName="display-md_thin text-pr_w"
          containerGap="gap-3"
        >
          Evervale is a new generation of cannabis genetics <br /> provider
          built on transparency and precision.
        </InfoContainer>
        <Button>Request product catalog</Button>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Card width="580px" height="420px">
          <div></div>
          <InfoContainer
            title="Certified Quality"
            textAlign="left"
            titleClassName="display-md_bold text-pr_dg"
            contentClassName="display-sm text-pr_dg"
            containerGap="gap-2"
          >
            GACP-, GMP-, and ISO-aligned production ensures consistent,
            lab-verified seed quality.
          </InfoContainer>
        </Card>
        <Card width="580px" height="420px"></Card>
        <Card width="580px" height="420px"></Card>
        <Card width="580px" height="420px"></Card>
      </div>
    </div>
  );
};

export default WhyWeSection;
