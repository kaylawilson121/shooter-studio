import React from "react";
import { Button } from "../../../../components/ui/button";

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[50px] px-4 py-[50px] relative">
      <div className="flex flex-col items-center gap-[50px] relative w-full max-w-[1520px]">
        <header className="inline-flex flex-col items-center justify-center p-2.5 relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <h2 className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#404144] text-[44px] text-center tracking-[0] leading-[normal]">
            Managing Files
          </h2>

          <p className="relative max-w-[886px] [font-family:'Poppins',Helvetica] font-normal text-[#616267] text-3xl text-center tracking-[0] leading-[normal]">
            File Management Helps Keep Your Workspace Tidy By Making It Easy To
            Store And Find Your Documents.
          </p>
        </header>

        <div className="relative w-full max-w-[1240px] h-[824px] bg-[#1c1e20] rounded-[40px] shadow-[10px_0px_1px_#0000000a,0px_2px_6px_#0000001a,0px_16px_24px_#0000001a] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="absolute w-full h-[89.93%] top-[10.07%] left-0 flex rounded-[0px_0px_40px_40px] overflow-hidden">
            <img
              className="flex-1 w-full object-cover"
              alt="Magicpattern design"
              src="https://c.animaapp.com/mhejq8cn4pmF0V/img/magicpattern-design-1.png"
            />
          </div>

          <div className="absolute w-[40.81%] h-[3.88%] top-[3.03%] left-[13.71%] bg-[#26282b] rounded-lg" />

          <div className="inline-flex items-start gap-[13.48px] absolute w-[7.74%] h-[2.79%] top-[3.64%] left-[2.42%]">
            <div className="relative w-[23px] h-[23px] bg-[#f45952] rounded-[11.5px]" />

            <div className="relative w-[23px] h-[23px] bg-[#dfb94e] rounded-[11.5px]" />

            <div className="relative w-[23px] h-[23px] bg-[#5ab748] rounded-[11.5px]" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2.5 px-0 py-2.5 relative w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <Button className="w-[230px] h-14 px-4 py-2 bg-[#4183f1] rounded-[100px] border-0 hover:bg-[#4183f1]/90 transition-colors">
            <span className="[font-family:'Poppins',Helvetica] font-medium text-componentsbuttonprimarycolor text-xl tracking-[0] leading-[30px] whitespace-nowrap">
              Try Free Trial Now
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
