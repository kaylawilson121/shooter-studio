import React from "react";

const socialIcons = [
  {
    src: "https://c.animaapp.com/mhejq8cn4pmF0V/img/00.png",
    alt: "Facebook",
  },
  {
    src: "https://c.animaapp.com/mhejq8cn4pmF0V/img/17.png",
    alt: "Instagram",
  },
  {
    src: "https://c.animaapp.com/mhejq8cn4pmF0V/img/000.png",
    alt: "LinkedIn",
  },
];

const footerLinks = [
  { label: "About" },
  { label: "Features" },
  { label: "Pricing" },
  { label: "Support" },
];

export const TeamManagementSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-[url(https://c.animaapp.com/mhejq8cn4pmF0V/img/frame-1171276135.svg)] bg-[100%_100%]">
      <div className="flex w-full items-start justify-center px-[200px] py-10 bg-[#f9f9f966] border-t [border-top-style:solid] border-[#a6a6a6] backdrop-blur-[20px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(20px)_brightness(100%)]">
        <div className="flex flex-col items-start justify-between flex-1 self-stretch translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <div className="flex flex-col items-start gap-5 w-full">
            <div className="inline-flex flex-col items-start justify-center gap-1.5 px-0 py-2.5">
              <div className="[font-family:'Exo_2',Helvetica] font-semibold text-[#4183f1] text-3xl tracking-[0] leading-5">
                SHOOTR
              </div>
            </div>

            <p className="w-[438px] [font-family:'Poppins',Helvetica] font-normal text-[#444444] text-xl tracking-[-0.22px] leading-[30px]">
              AI-powered editing designed for real estate professionals and
              homeowners alike.
            </p>
          </div>

          <div className="flex flex-col items-start gap-[30px] w-full">
            <h3 className="w-[506.67px] h-6 [font-family:'Poppins',Helvetica] font-semibold text-[#444444] text-[28px] tracking-[-0.31px] leading-[normal] whitespace-nowrap">
              Social icons
            </h3>

            <div className="flex items-center gap-[30px] w-full">
              {socialIcons.map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="inline-flex items-center gap-2.5 transition-transform hover:scale-110"
                  aria-label={icon.alt}
                >
                  <img className="w-10 h-10" alt={icon.alt} src={icon.src} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-[30px] flex-1 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <h3 className="w-[506.67px] h-6 [font-family:'Poppins',Helvetica] font-semibold text-[#444444] text-[28px] tracking-[-0.31px] leading-[normal] whitespace-nowrap">
            Links
          </h3>

          <nav className="flex flex-col items-start gap-[30px] w-full">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center justify-center gap-2 w-full transition-colors hover:text-[#4183f1]"
              >
                <span className="flex-1 [font-family:'Poppins',Helvetica] font-normal text-[#444444] text-[22px] tracking-[-0.24px] leading-[33px]">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
