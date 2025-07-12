// components/home/AboutSection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <Image
              src="/placeholder.svg?height=600&width=700"
              alt="ALLEN+ team and community members working together"
              width={700}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-8 -right-8 bg-white p-4 rounded-xl shadow-2xl border-l-4 border-green-500">
              <div className="text-2xl font-bold text-green-600">Our Mission</div>
              <p className="text-gray-600 text-sm">Empowering Communities</p>
            </div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-green-100 rounded-2xl opacity-20"></div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Who We Are: Our Mission &<span className="text-green-600"> Story</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              ALLEN+ empowers youth and vulnerable communities through innovative, practice-driven programs in climate
              action, sustainable agriculture, and humanitarian support. We believe in community-led solutions that
              create lasting change, ensuring no one is left behind in building a sustainable future for Eastern DRC
              and beyond.
            </p>
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4 font-semibold">
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}