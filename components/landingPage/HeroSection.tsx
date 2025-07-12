// components/home/HeroSection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 inset-0 z-0">
        <Image
          src="/home2.jpg"
          alt="Community members working together on environmental projects"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-0 inset-0 z-20 bg-black/40"></div>
      </div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Empowering Changemakers for a
          <span className="block text-yellow-400">Sustainable Future</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-3xl mx-auto">
          AID LIFE LEARN ENVIRONMENT: Nurturing Growth, Fostering Resilience, and Inspiring Change in Eastern DRC and
          Beyond.
        </p>
        <Button
          asChild
          size="lg"
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          <Link href="/about">
            Learn More About Our Work
            <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </Button>
      </div>
    </section>
  );
}