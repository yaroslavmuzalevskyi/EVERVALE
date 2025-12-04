import React from "react";
import Card from "../common/Card";
import InfoContainer from "../common/InfoContainer";
import Image from "next/image";
import cannabis1 from "../../../public/images/ExplanationSectionImages/cannabis1.png";
import cannabis2 from "../../../public/images/ExplanationSectionImages/cannabis2.png";

const ExplanationSection = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-20">
        <div className="max-w-[680px]">
          <InfoContainer
            title="Rooted in Science. Growing with Trust."
            textAlign="left"
            titleClassName="display-xl text-pr_w"
            contentClassName="display-md_thin text-pr_w"
            containerGap="gap-3"
          >
            Evervale is a new generation of cannabis genetics provider built on
            transparency and precision.
          </InfoContainer>
        </div>

        <div className="w-full flex justify-between gap-8">
          <Card width="580px" height="420px">
            <Image src={cannabis1} alt="cannabis" className="mb-6" />
            <InfoContainer
              title="Продажа семян оптом"
              textAlign="left"
              titleClassName="display-md_bold text-pr_dg"
              contentClassName="display-sm text-pr_dg"
              containerGap="gap-2"
            >
              We promote responsible sourcing & environmentally
              <br /> conscious production.
            </InfoContainer>
          </Card>
          <Card width="580px" height="420px">
            <Image src={cannabis2} alt="cannabis" className="mb-6" />
            <InfoContainer
              title="Селекция под заказ"
              textAlign="left"
              titleClassName="display-md_bold text-pr_dg"
              contentClassName="display-sm text-pr_dg"
              containerGap="gap-2"
            >
              Constantly improving our genetics through science
              <br /> and collaboration.
            </InfoContainer>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExplanationSection;
