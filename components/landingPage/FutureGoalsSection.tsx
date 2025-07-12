// components/home/FutureGoalsSection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Globe, Target, Users } from "lucide-react";

export function FutureGoalsSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              Our Vision Ahead: Building for<span className="text-cyan-600"> Tomorrow</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're creating a comprehensive digital platform to connect all our beneficiaries, share online courses,
              provide climate news for farmers, and partner with stakeholders to amplify our programs and reach even
              more communities across Eastern DRC and beyond.
            </p>
            <div className="bg-cyan-50 p-6 rounded-xl border-l-4 border-cyan-500">
              <div className="flex items-center space-x-4">
                <Target className="h-8 w-8 text-cyan-600" />
                <div>
                  <h4 className="font-bold text-gray-800">Expected Impact</h4>
                  <p className="text-gray-600">10x increase in community reach through digital connectivity</p>
                </div>
              </div>
            </div>
            <Button asChild size="lg" className="bg-cyan-600 hover:bg-cyan-700 text-lg px-8 py-4 font-semibold">
              <Link href="/future-goals">
                Discover Our Future Plans
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=700"
              alt="Digital connectivity and future technology empowering communities"
              width={700}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <Target className="h-10 w-10 text-white" />
            </div>
            <div className="absolute top-1/2 -left-8 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
              <Users className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}