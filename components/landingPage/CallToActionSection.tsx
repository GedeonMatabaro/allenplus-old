// components/home/CallToActionSection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function CallToActionSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Diverse group of volunteers and community members working together"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-800/90"></div>
      </div>
      <div className="relative z-10 container mx-auto max-w-4xl text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Join Us: Make a Difference with<span className="block text-yellow-400">ALLEN+</span>
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-green-100">
          Every partnership, every donation, every volunteer hour creates ripple effects of positive change across
          Eastern DRC. Be part of building a sustainable future for communities that need it most.
        </p>
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">Partner</div>
              <p className="text-lg">Collaborate on programs</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">Support</div>
              <p className="text-lg">Fund sustainable change</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400 mb-2">Volunteer</div>
              <p className="text-lg">Share your expertise</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-xl px-10 py-5"
            >
              <Link href="/contact">
                Get Involved
                <ArrowRight className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-green-800 text-xl px-10 py-5"
            >
              <Link href="/programs">Explore Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}