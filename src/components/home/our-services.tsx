import FullTructLoadServiceImage from "@/assets/images/full-truckload-service.png"

type Feature = {
  title: string;
  description: string;
  image: string;
};

export default function OurServices() {
  const features: Feature[] = [
    {
      title: "Full Truckload",
      description: "Dedicated full-load transparent with air-ride services across Canada and the USA.",
      image: FullTructLoadServiceImage
    }
  ];

  return (
    <section className="py-24 md:py-36 relative bg-soft-gray/10">
      <div className="max-w-7xl w-full mx-auto px-6 flex items-center justify-start">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-secondary text-[40px] font-bold">Our Services</h2>
          <p className="font-primary text-gray-500">Comprehensive logistics solutions designed fpr efficieny, safety and reliability.</p>
        </div>
        <div>
          {features.map((feature, idx) => (
            <div key={idx}>{feature.title}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
