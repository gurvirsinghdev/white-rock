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
          "py-24 md:py-36 relative bg-cover bg-center",
          `bg-[linear-gradient(to_right,rgba(0,0,0,0.75),rgba(0,0,0,0.5)),url('/hero.png')]`,
        )}
      >
        <div className="max-w-7xl w-full mx-auto px-6 flex items-center justify-start">
          <div className="max-w-3xl flex flex-col gap-6">
            <div className="uppercase md:block text-soft-aqua max-w-max rounded-full hidden text-sm md:text-base lg:text-lg font-primary">
              where we deliever reliability
            </div>
            <h1 className="font-secondary text-white font-bold text-4xl text-pretty lg:text-6xl leading-[1.2]">
              Reliable Logistics Across North America
            </h1>
            <p className="text-soft-gray/80 text-base -mt-6 md:text-lg font-primary lg:text-2xl">
              Precision-driven transportation solutions designed for the modern
              world. Reliable, safe, and efficient delivery across every mile.
            </p>
            <div className="w-full gap-6 flex items-center mt-4 justify-between max-w-md">
              <button
                className={
                  "text-center py-3 bg-soft-aqua/80 border-soft-aqua/80 border-2 hover:bg-soft-aqua cursor-pointer font-bold font-primary w-full rounded-full text-soft-gray transition-colors"
                }
              >
                Our Services
              </button>
              <button
                className={
                  "text-center py-3 bg-transparent text-soft-aqua w-full rounded-full font-bold border-soft-aqua font-primary border-2 cursor-pointer hover:bg-soft-aqua hover:text-white transition-colors"
                }
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl shadow-xl border-neutral-300 rounded-2xl bg-soft-gray border-2 absolute top-full -translate-y-1/2 z-50 p-6 left-1/2 -translate-x-1/2 w-full flex items-center justify-between">
        {promises.map((promise, index) => (
          <div
            key={index}
            className={cn(
              "flex items-center justify-between py-6 gap-2",
              index !== 0 && "border-l-2 px-8 border-neutral-300",
            )}
          >
            <div className="p-3 bg-soft-aqua/10 rounded-md">
              <promise.icon className="size-6 text-soft-aqua" />
            </div>
            <div className="w-full">
              <h3 className="font-primary text-md font-bold">
                {promise.title}
              </h3>
              <p className="text-neutral-500 font-primary text-sm">
                {promise.description}
              </p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
