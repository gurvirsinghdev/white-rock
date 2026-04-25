import { ClockIcon, TruckIcon, type LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import { BiCheckShield } from "react-icons/bi";
import { GoShieldLock } from "react-icons/go";
import { cn } from "../../utils";

export default function LandingAboveTheFold() {
  const promises: {
    icon: LucideIcon | IconType;
    title: string;
    description: string;
  }[] = [
    {
      icon: BiCheckShield,
      title: "Safety First",
      description: "Industry-leading safety scores",
    },
    {
      icon: ClockIcon,
      title: "On-Time Delivery",
      description: "99.8% precision rate",
    },
    {
      icon: GoShieldLock,
      title: "24/7 Secure Yard",
      description: "Fully monitored yard",
    },
    {
      icon: TruckIcon,
      title: "Competitive Rates",
      description: "Cost-effective transportation",
    },
  ];

  return (
    <div className="relative">
      <section
        className={cn(
          "relative bg-cover bg-center py-24 md:py-36",
          `bg-[linear-gradient(to_right,rgba(0,0,0,0.75),rgba(0,0,0,0.5)),url('/hero.png')]`,
        )}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-start px-6">
          <div className="flex max-w-3xl flex-col gap-6">
            <div className="text-soft-aqua font-primary hidden max-w-max rounded-full text-sm uppercase md:block md:text-base lg:text-lg">
              where we deliever reliability
            </div>
            <h1 className="font-secondary text-4xl leading-[1.2] font-bold text-pretty text-white lg:text-6xl">
              Reliable Logistics Across North America
            </h1>
            <p className="text-soft-gray/80 font-primary -mt-6 text-base md:text-lg lg:text-2xl">
              Precision-driven transportation solutions designed for the modern
              world. Reliable, safe, and efficient delivery across every mile.
            </p>
            <div className="mt-4 flex w-full max-w-md items-center justify-between gap-6">
              <button
                className={
                  "bg-soft-aqua/80 border-soft-aqua/80 hover:bg-soft-aqua font-primary text-soft-gray w-full cursor-pointer rounded-full border-2 py-3 text-center font-bold transition-colors"
                }
              >
                Our Services
              </button>
              <button
                className={
                  "text-soft-aqua border-soft-aqua font-primary hover:bg-soft-aqua w-full cursor-pointer rounded-full border-2 bg-transparent py-3 text-center font-bold transition-colors hover:text-white"
                }
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:bg-soft-gray flex w-full max-w-7xl flex-col items-start justify-between gap-3 p-3 lg:absolute lg:top-full lg:left-1/2 lg:z-50 lg:-translate-x-1/2 lg:-translate-y-1/2 lg:flex-row lg:items-center lg:gap-0 lg:rounded-2xl lg:border-2 lg:border-neutral-300 lg:p-6 lg:shadow-xl">
        {promises.map((promise, index) => (
          <div
            key={index}
            className={cn(
              "flex w-full items-center justify-between gap-2 rounded-lg border border-gray-300 px-4 py-6 shadow-sm lg:w-auto lg:border-none lg:px-0",
              index !== 0 && "lg:border-l-2 lg:border-neutral-300 lg:px-8",
            )}
          >
            <div className="bg-soft-aqua/10 rounded-md p-3">
              <promise.icon className="text-soft-aqua size-6" />
            </div>
            <div className="w-full">
              <h3 className="font-primary text-md font-bold">
                {promise.title}
              </h3>
              <p className="font-primary text-sm text-neutral-500">
                {promise.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
