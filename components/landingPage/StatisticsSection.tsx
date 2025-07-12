// components/home/StatisticsSection.tsx
"use client";
import { useEffect, useState } from "react";
import { DonationData, PartnershipData } from "@/lib/types"; // From your types.ts

interface Stat {
  value: string;
  label: string;
  color: string;
}

export function StatisticsSection() {
  const [stats, setStats] = useState<Stat[]>([
    { value: "5K+", label: "Community Members Reached", color: "green" },
    { value: "1.5K+", label: "Children Supported", color: "yellow" },
    { value: "157+", label: "Youth Climate Activists", color: "cyan" },
    { value: "205+", label: "Women Empowered", color: "purple" },
  ]);

  // Example: Fetch dynamic stats (uncomment to integrate with Prisma)
  /*
  useEffect(() => {
    async function fetchStats() {
      const [donations, partnerships] = await Promise.all([
        prisma.donation.count(),
        prisma.partnership.count(),
      ]);
      setStats([
        { value: `${(donations + partnerships).toLocaleString()}+`, label: "Community Members Reached", color: "green" },
        { value: "1.5K+", label: "Children Supported", color: "yellow" },
        { value: "357+", label: "Youth Climate Activists", color: "cyan" },
        { value: "105+", label: "Women Empowered", color: "purple" },
      ]);
    }
    fetchStats();
  }, []);
  */

  return (
    <section className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <div className={`text-6xl md:text-7xl font-bold text-${stat.color}-600 mb-2`}>{stat.value}</div>
              <p className="text-lg text-gray-600 font-medium">{stat.label}</p>
              <div className={`absolute -top-4 -right-4 w-20 h-20 bg-${stat.color}-100 rounded-full opacity-20`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}