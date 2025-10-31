import React from "react";
import { Button } from "../../../../components/ui/button";

export const ImageGallerySection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center w-full justify-between">
      <img
        className="w-full h-[164px] object-cover"
        alt="Version"
        src="https://c.animaapp.com/mhejq8cn4pmF0V/img/version-5.png"
      />
      {/* <div className="w-full h-[150px] border-b-[3px] border-white flex justify-between pt-[30px] pb-[30px] pl-[150px] pr-[150px] shadow-[0_0_14px_rgba(0,0,0,0.1)] backdrop-blur-[42px]">
        <div className="flex w-[1520px] h-[60px] justify-between">
          <div className="flex w-[115px] h-[40px] pt-[20px] pb-[20px] gap-[6px] justify-between ">
            <div className="flex w-[115px] h-[20px] font-exo2 font-semibold text-[30px] leading-[20px] uppercase text-[#4183F1]">
              SHOOTR
            </div>
          </div>
        </div>
      </div> */}

      <div className="flex flex-col w-full max-w-[1520px] items-center gap-[50px] px-4 py-[50px]">
        <div className="flex flex-col items-center gap-[50px] w-full">
          <div className="flex flex-col items-center justify-center p-2.5 opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
            <h1 className="mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-transparent text-[44px] text-center tracking-[0] leading-[44px]">
              <span className="font-semibold text-[#404144] leading-[0.1px]">
                Human quality images
              </span>
              <span className="font-semibold text-[#404144] text-[40px]">
                &nbsp;
              </span>
              <span className="font-semibold italic text-[#4183f1] text-[40px]">
                At{" "}
              </span>
              <span className="font-semibold italic text-[#4183f1] text-[40px] leading-[0.1px]">
                superhuman speed.
              </span>
            </h1>

            <p className="w-full max-w-[674px] [font-family:'Poppins',Helvetica] font-normal text-[#616267] text-3xl text-center tracking-[0] leading-[normal]">
              Turn Ordinary Property Photos Into Stunning Hdr Images—in Minutes
            </p>
          </div>

          <div className="flex items-center justify-center gap-2.5 px-0 py-2.5 w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
            <Button className="w-[230px] h-14 px-4 py-2 bg-[#4183f1] rounded-[100px] border-0 hover:bg-[#3672d9] transition-colors">
              <span className="[font-family:'Poppins',Helvetica] font-medium text-componentsbuttonprimarycolor text-xl tracking-[0] leading-[30px] whitespace-nowrap">
                Try Free Trial Now
              </span>
            </Button>
          </div>
        </div>

        <div className="w-full max-w-[1240px] h-[824px] bg-[#1c1e20] rounded-[40px] shadow-[10px_0px_1px_#0000000a,0px_2px_6px_#0000001a,0px_16px_24px_#0000001a] relative opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:600ms]">
          <div className="absolute w-full h-[89.93%] top-[10.07%] left-0 flex rounded-[0px_0px_40px_40px] overflow-hidden">
            <img
              className="flex-1 w-full object-cover"
              alt="Magicpattern design"
              src="https://c.animaapp.com/mhejq8cn4pmF0V/img/magicpattern-design.png"
            />
          </div>

          <div className="absolute w-[40.81%] h-[3.88%] top-[3.03%] left-[13.71%] bg-[#26282b] rounded-lg" />

          <div className="inline-flex items-start gap-[13.48px] absolute w-[7.74%] h-[2.79%] top-[3.64%] left-[2.42%]">
            <div className="w-[23px] h-[23px] bg-[#f45952] rounded-[11.5px]" />
            <div className="w-[23px] h-[23px] bg-[#dfb94e] rounded-[11.5px]" />
            <div className="w-[23px] h-[23px] bg-[#5ab748] rounded-[11.5px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
