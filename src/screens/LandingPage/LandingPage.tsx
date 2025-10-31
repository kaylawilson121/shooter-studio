import React from "react";
import { FeaturesSection } from "./sections/FeaturesSection";
import { ImageGallerySection } from "./sections/ImageGallerySection";
import { IntegrationSection } from "./sections/IntegrationSection";
import { PricingPlanSection } from "./sections/PricingPlanSection";
import { SubscriptionPlanSection } from "./sections/SubscriptionPlanSection";
import { TeamManagementSection } from "./sections/TeamManagementSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const LandingPage = (): JSX.Element => {
  return (
    <main
      className="bg-white w-full min-h-screen relative overflow-hidden"
      data-model-id="65:214"
    >
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-[965px] opacity-[0.12] pointer-events-none">
        <div className="absolute w-[35.76%] h-[36.68%] top-[10.88%] left-[8.28%] bg-[#4183f1] rounded-[343.27px/177px] blur-[100px]" />

        <div className="absolute w-[48.28%] h-[49.53%] top-[42.38%] left-[44.04%] bg-cyan-500 rounded-[463.52px/239px] blur-[100px]" />

        <div className="absolute top-[131px] right-[746px] w-[656px] h-[656px] bg-emerald-500 rounded-[328px] blur-[100px]" />
      </div>

      <div className="flex flex-col w-full items-center relative">
        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] pb-[100px]">
          <ImageGallerySection />
        </section>

        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] pb-[100px]">
          <PricingPlanSection />
        </section>

        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] pb-[100px]">
          <TestimonialsSection />
        </section>

        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] pb-[100px]">
          <SubscriptionPlanSection />
        </section>

        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] pb-[100px]">
          <FeaturesSection />
        </section>

        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms] pb-[100px]">
          <IntegrationSection />
        </section>

        <section className="w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
          <TeamManagementSection />
        </section>
      </div>
    </main>
  );
};
