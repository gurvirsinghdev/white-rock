import FTLImage from "@/assets/images/full-truckload-service.png";
import LTTImage from "@/assets/images/less-than.png";
import DImage from "@/assets/images/dryage.png";
import SYMImage from "@/assets/images/yard.png";
import CDDImage from "@/assets/images/crossdock.png";
import BDImage from "@/assets/images/brokerage.png";
import { cn } from "@/utils";

type Feature = {
  title: string;
  description: string;
  image: string;
};

export default function OurServices() {
  const features: Feature[] = [
    {
      title: "Full Truckload",
      description:
        "Dedicated full-load transparent with air-ride services across Canada and the USA.",
      image: FTLImage,
    },
    {
      title: "Less-Than Truckload",
      description:
        "Cost-effective shipping for smaller freight with reliable scheduleing. Air-Ride services powered in Canada and the USA.",
      image: LTTImage,
    },
    {
      title: "Drayage",
      description:
        "Efficient port-to-warehouse transportation. Service only provided in Ontario.",
      image: DImage,
    },
    {
      title: "Shunting and Yard Management",
      description:
        "Optimized yard operations for smooth logistics flow. Service only provided in Ontario.",
      image: SYMImage,
    },
    {
      title: "Cross Dock and Distribution",
      description:
        "Fast transfer, storage, and redistribution. Service only provided in Ontario.",
      image: CDDImage,
    },
    {
      title: "Brokerage Division",
      description:
        "Service including reefers, dry vans, Flatbeds, Ocean/ air, dedicated, heated which is available all throughout North America.",
      image: BDImage,
    },
  ];

  return (
    <section className="bg-soft-gray/10 relative py-24 md:py-36">
      <div className="mx-auto w-full max-w-7xl items-center justify-start px-6">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-secondary text-xl font-bold lg:text-[40px]">
            Our Services
          </h2>
          <p className="font-primary text-gray-500">
            Comprehensive logistics solutions designed for efficieny, safety and
            reliability.
          </p>
        </div>
        <div className="space-y-8 py-8 md:py-12 lg:space-y-16 lg:py-16">
          {features.map((feature, idx) => (
            <div key={idx} className="grid grid-rows-1 lg:grid-cols-2">
              <div
                className={cn(
                  "max-w-md space-y-3 p-5 lg:mt-3",
                  idx % 2 === 0 ? "lg:order-1" : "lg:order-2",
                )}
              >
                <h3 className="font-secondary text-xl font-bold lg:text-[32px]">
                  {feature.title}
                </h3>
                <p className="font-primary text-gray-600">
                  {feature.description}
                </p>
              </div>
              <div
                className={cn(
                  "relative",
                  idx % 2 === 0 ? "lg:order-2" : "lg:order-1",
                )}
              >
                <div className="absolute top-3 left-5 h-1 w-[40%] rounded-2xl bg-gray-300"></div>
                <div className="absolute top-5 left-3 h-[50%] w-1 rounded-2xl bg-gray-300"></div>
                <div className="overflow-hidden p-10">
                  <img
                    src={feature.image}
                    className="h-full w-full rounded-2xl object-cover"
                    alt={feature.title}
                  />
                </div>
                <div className="absolute right-5 bottom-3 h-1 w-[40%] rounded-2xl bg-gray-300"></div>
                <div className="absolute right-3 bottom-5 h-[50%] w-1 rounded-2xl bg-gray-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
