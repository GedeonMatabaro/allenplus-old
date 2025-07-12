// components/home/PartnersSection.tsx
"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Globe, Heart, Handshake, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { PartnershipData } from "@/lib/types"; // From your types.ts

interface PartnerCategory {
  title: string;
  description: string;
  icon: JSX.Element;
}

export function PartnersSection() {
  const [partners, setPartners] = useState<string[]>(Array.from({ length: 12 }, (_, i) => `/placeholder.svg?height=80&width=120&text=Partner+${i + 1}`));

  // Example: Fetch dynamic partners (uncomment to integrate with Prisma)
  /*
  useEffect(() => {
    async function fetchPartners() {
      const partnerships = await prisma.partnership.findMany({
        include: getPartnershipDataInclude(""), // No user-specific data needed
        take: 12,
      });
      setPartners(partnerships.map((p) => p.organization || `/placeholder.svg?height=80&width=120&text=Partner`));
    }
    fetchPartners();
  }, []);
  */

  const categories: PartnerCategory[] = [
    {
      title: "International Organizations",
      description: "Global expertise and resources",
      icon: <Globe className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Local NGOs",
      description: "Grassroots community understanding",
      icon: <Heart className="h-8 w-8 text-yellow-600" />,
    },
    {
      title: "Government Agencies",
      description: "Policy implementation support",
      icon: <Handshake className="h-8 w-8 text-cyan-600" />,
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Partners: <span className="text-green-600">Stronger Together</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with international organizations, local NGOs, and government agencies to amplify our impact
            and create sustainable change across Eastern DRC.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-12 shadow-2xl mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {partners.map((src, index) => (
              <div key={index} className="group flex items-center justify-center p-4">
                <Image
                  src={src}
                  alt={`Partner ${index + 1} logo`}
                  width={120}
                  height={80}
                  className="grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 bg-${category.title.includes("International") ? "green" : category.title.includes("Local") ? "yellow" : "cyan"}-100 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{category.title}</h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4 font-semibold">
            <Link href="/partners">
              Meet All Our Partners
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}