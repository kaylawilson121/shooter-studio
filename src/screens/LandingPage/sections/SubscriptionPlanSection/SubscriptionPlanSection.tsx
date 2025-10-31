import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const pricingPlans = [
  {
    icon: "https://c.animaapp.com/mhejq8cn4pmF0V/img/icon-1.svg",
    title: "Free Plan",
    description: "Unleash the Power of Your Business with Pro Plan.",
    price: "$0.00",
    priceNote: "per month",
    features: [
      "Photos per month: 10",
      "Price: $0.00 / month",
      "10 photos per month",
    ],
    buttonVariant: "outline" as const,
    isHighlighted: false,
  },
  {
    icon: "https://c.animaapp.com/mhejq8cn4pmF0V/img/icon-2.svg",
    title: "Standard Plan (Most Popular)",
    description: "Unleash the Power of Your Business with Pro Plan.",
    price: "$265.00",
    priceNote: "per month",
    features: [
      "Photos per month: 500",
      "Cost per photo: $0.53",
      "Discounted price with yearly billing: $225.25 / month",
      "Unused credits roll over",
      "Slider available for custom photo limits",
    ],
    buttonVariant: "outline" as const,
    isHighlighted: false,
  },
  {
    icon: "https://c.animaapp.com/mhejq8cn4pmF0V/img/icon-3.svg",
    title: "Enterprise Plan",
    badge: "Best offer",
    description: "Take Your Business to the Next Level with Business Plan.",
    price: "56",
    priceNote: "per month",
    features: [
      "Photos per month: 5,000",
      "Cost per photo: $0.45",
      "Discounted price with yearly billing: $2,025.00 / month",
      "Unused credits roll over",
      "Auto TV Blackout",
      "Auto Add Fire",
      "Walkthrough Re-ordering",
      "Dedicated Slack Channel",
      "Slider available for custom photo limits",
    ],
    buttonVariant: "default" as const,
    isHighlighted: true,
  },
];

const additionalCreditFeatures = [
  [
    "Extra photo credits can be purchased at any time.",
    "No need to upgrade or change your current subscription plan.",
  ],
  [
    "Credits are available at the current per-photo rate.",
    "Useful for downloading more photos when the monthly limit is reached.",
  ],
];

export const SubscriptionPlanSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full max-w-[1520px] mx-auto items-center gap-10 relative">
      <header className="flex flex-col max-w-[1087px] items-center relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#404144] text-5xl text-center tracking-[0] leading-[normal]">
          THE PERFECT PLAN FOR YOUR BIZ
        </h2>

        <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal italic text-[#616267] text-[32px] text-center tracking-[0] leading-[normal]">
          Discover The Ideal Plan To Fuel Your Business Growth. Our Pricing
          Options Are Carefully Crafted To Cater To Businesses.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-10 relative w-full">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={`relative flex flex-col overflow-hidden bg-white rounded-[26px] border border-solid border-[#e7ebff] shadow-[0px_26px_40px_#bccaff21] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:${200 + index * 200}ms]`}
          >
            {plan.isHighlighted && (
              <div className="absolute top-[-193px] left-[calc(50.00%_-_735px)] w-[1327px] h-[1084px] pointer-events-none overflow-hidden">
                <img
                  className="absolute w-[969px] h-[969px]"
                  alt="Ellipse"
                  src="https://c.animaapp.com/mhejq8cn4pmF0V/img/ellipse-13.svg"
                />
                <div className="absolute top-[115px] left-[calc(50.00%_-_305px)] w-[969px] h-[969px] rounded-[484.33px] bg-[linear-gradient(180deg,rgba(65,131,241,0.5)_0%,rgba(65,131,241,0.08)_100%)]" />
              </div>
            )}

            <CardContent className="flex flex-col gap-11 p-10 relative z-10">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-5">
                  <img
                    className="w-14 h-14"
                    alt={`${plan.title} icon`}
                    src={plan.icon}
                  />

                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-3.5">
                      <div className="inline-flex items-start gap-3.5">
                        <h3 className="mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#1a223c] text-2xl tracking-[-1.00px] leading-[normal]">
                          {plan.title}
                        </h3>
                        {plan.badge && (
                          <Badge className="inline-flex items-center justify-center gap-2.5 px-2.5 py-[5px] bg-[#ffffff14] rounded-lg border border-solid border-white h-auto">
                            <span className="[font-family:'Outfit',Helvetica] font-light text-white text-lg tracking-[0] leading-[normal]">
                              {plan.badge}
                            </span>
                          </Badge>
                        )}
                      </div>

                      <p className="[font-family:'Poppins',Helvetica] font-light text-[#787777] text-xl tracking-[0] leading-8">
                        {plan.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#1a223c] text-[40px] tracking-[-1.00px] leading-[normal]">
                        {plan.price}
                      </span>
                      <span className="[font-family:'Outfit',Helvetica] font-light text-[#787777] text-xl tracking-[0] leading-[normal]">
                        {plan.priceNote}
                      </span>
                    </div>
                  </div>
                </div>

                <img
                  className="w-full h-px object-cover"
                  alt="Divider"
                  src="https://c.animaapp.com/mhejq8cn4pmF0V/img/line-11-1.svg"
                />

                <ul className="flex flex-col gap-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-4">
                      <CheckIcon className="w-7 h-7 text-[#4183f1] flex-shrink-0" />
                      <span className="flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#1a223c] text-[22px] tracking-[0] leading-10">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={plan.buttonVariant}
                className={`h-auto px-4 py-2 rounded-[100px] ${
                  plan.buttonVariant === "default"
                    ? "h-14 bg-[#4183f1] border-transparent hover:bg-[#3672d9]"
                    : "h-[58px] border-[#4183f1] hover:bg-[#4183f1]/10"
                }`}
              >
                <span
                  className={`[font-family:'Poppins',Helvetica] font-medium text-xl tracking-[0] leading-[30px] whitespace-nowrap ${
                    plan.buttonVariant === "default"
                      ? "text-componentsbuttonprimarycolor"
                      : "text-componentsbuttoncolor"
                  }`}
                >
                  Let&#39;s roll!
                </span>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="flex w-full bg-white rounded-[26px] overflow-hidden border border-solid border-[#e7ebff] shadow-[0px_26px_40px_#bccaff21] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
        <CardContent className="flex flex-col items-end justify-end gap-11 p-10 w-full">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-5 w-full">
              <div className="flex flex-col gap-6 w-full">
                <div className="flex items-center justify-between w-full">
                  <img
                    className="w-14 h-14"
                    alt="Additional credits icon"
                    src="https://c.animaapp.com/mhejq8cn4pmF0V/img/icon.svg"
                  />

                  <div className="inline-flex items-center gap-4">
                    <span className="mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#1a223c] text-[40px] tracking-[-1.00px] leading-[normal]">
                      $0.00
                    </span>
                    <span className="[font-family:'Outfit',Helvetica] font-light text-[#787777] text-xl tracking-[0] leading-[normal]">
                      per month
                    </span>
                  </div>
                </div>

                <div className="flex flex-col gap-3.5 w-full">
                  <h3 className="mt-[-1.00px] [font-family:'Poppins',Helvetica] font-medium text-[#1a223c] text-2xl tracking-[-1.00px] leading-[normal]">
                    Additional Credit Purchase Option
                  </h3>

                  <p className="[font-family:'Poppins',Helvetica] font-light text-[#787777] text-xl tracking-[0] leading-8">
                    Unleash the Power of Your Business with Pro Plan.
                  </p>
                </div>
              </div>
            </div>

            <img
              className="w-full h-px object-cover"
              alt="Divider"
              src="https://c.animaapp.com/mhejq8cn4pmF0V/img/line-11.svg"
            />

            <div className="flex flex-col gap-3 w-full">
              {additionalCreditFeatures.map((row, rowIndex) => (
                <div key={rowIndex} className="flex items-start gap-3 w-full">
                  {row.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-4 flex-1"
                    >
                      <CheckIcon className="w-7 h-7 text-[#4183f1] flex-shrink-0" />
                      <span className="flex-1 mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#1a223c] text-[22px] tracking-[0] leading-10">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            className="w-[263px] h-[58px] border-[#4183f1] px-4 py-2 rounded-[100px] hover:bg-[#4183f1]/10"
          >
            <span className="[font-family:'Poppins',Helvetica] font-medium text-componentsbuttoncolor text-xl tracking-[0] leading-[30px] whitespace-nowrap">
              Let&#39;s roll!
            </span>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
