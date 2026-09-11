import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 border border-orange-100"
            >
              <span className="text-4xl mb-3">{stat.icon}</span>
              <div className="text-5xl font-extrabold text-[#E53E1A] mb-2" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
