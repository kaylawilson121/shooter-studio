import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const featureCardsTop = [
  {
    icon: "../../../src/asset/image/frame_1171275611.png",
    title: "Upload In Seconds",
    description: "Drag, Browse, Or Connect Cloud Storage",
    bgColor: "bg-[#edf0fd]",
    titleColor: "text-[#404144]",
    descriptionWidth: "w-[317px]",
  },
  {
    icon: "../../../src/asset/image/frame_1171275612.png",
    title: "Ai-powered Hdr Editing",
    description: "Professional-quality Enhancement Instantly.",
    bgColor: "bg-[#5fcca029]",
    titleColor: "text-[#5fcca0]",
    descriptionWidth: "w-[410px]",
  },
];

const featureCardsBottom = [
  {
    icon: "../../../src/asset/image/frame_1171275613.png",
    title: "Manage Listings Easily",
    description: "Organize, Share, And Track Projects.",
    bgColor: "bg-[#cb9bfb30]",
    titleColor: "text-[#cb9bfb]",
    descriptionWidth: "w-[236px]",
  },
  {
    icon: "../../../src/asset/image/frame_1171275614.png",
    title: "Accessible For Everyone",
    description: "Agents, Photographers, Or Homeowners.",
    bgColor: "bg-[#f9fd9173]",
    titleColor: "text-[#bcc303]",
    descriptionWidth: "w-[236px]",
  },
];

export const PricingPlanSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center max-w-[1265px] mx-auto gap-[60px] relative">
      <header className="inline-flex flex-col items-center justify-center p-2.5 relative opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:0ms]">
        <h2 className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#404144] text-[40px] text-center tracking-[0] leading-[normal]">
          Why Use Autohdr Studio?
        </h2>
      </header>

      <div className="flex flex-col items-center justify-center relative self-stretch w-full">
        <div className="flex h-[400px] items-start gap-[180px] relative self-stretch w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
          {featureCardsTop.map((card, index) => (
            <Card
              key={index}
              className={`flex flex-col items-center justify-center gap-[30px] p-[50px] relative flex-1 self-stretch grow ${card.bgColor} rounded-[72px] border-0 shadow-none transition-transform hover:scale-105`}
            >
              <CardContent className="flex flex-col items-center justify-center gap-[30px] p-0">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Feature icon"
                  src={card.icon}
                />

                <h3
                  className={`relative w-fit [font-family:'Poppins',Helvetica] font-semibold ${card.titleColor} text-3xl text-center tracking-[0] leading-[normal]`}
                >
                  {card.title}
                </h3>

                <p
                  className={`relative ${card.descriptionWidth} [font-family:'Poppins',Helvetica] font-normal text-[#616267] text-2xl text-center tracking-[0] leading-[normal]`}
                >
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <img
          className="relative w-[123.79px] h-[134.18px] opacity-0 animate-fade-in [--animation-delay:400ms]"
          alt="Decorative connector"
          src="https://c.animaapp.com/mhejq8cn4pmF0V/img/group-3.png"
        />

        <div className="flex h-[400px] items-center gap-[180px] relative self-stretch w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:600ms]">
          {featureCardsBottom.map((card, index) => (
            <Card
              key={index}
              className={`flex flex-col items-center justify-center gap-[30px] p-[50px] relative flex-1 self-stretch grow ${card.bgColor} rounded-[72px] border-0 shadow-none transition-transform hover:scale-105`}
            >
              <CardContent className="flex flex-col items-center justify-center gap-[30px] p-0">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Feature icon"
                  src={card.icon}
                />

                <h3
                  className={`relative w-fit [font-family:'Poppins',Helvetica] font-semibold ${card.titleColor} text-3xl text-center tracking-[0] leading-[normal]`}
                >
                  {card.title}
                </h3>

                <p
                  className={`relative ${card.descriptionWidth} [font-family:'Poppins',Helvetica] font-normal text-[#616267] text-2xl text-center tracking-[0] leading-[normal]`}
                >
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
