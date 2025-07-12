// components/home/ImpactSection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Award } from "lucide-react";

export function ImpactSection() {
  return (
    <section className="py-20 px-4 bg-green-600 text-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Our Impact: Making a<span className="text-yellow-400"> Tangible Difference</span>
            </h2>
            <p className="text-xl text-green-100 leading-relaxed">
              From empowering 10,000+ community members to representing Eastern DRC at global climate conferences, our
              work creates ripple effects of positive change. We've supported over 1,500 children, trained 357 youth
              climate activists, and earned recognition from the UN Environment Programme for our dedication to
              sustainable development.
            </p>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">COP 29 & 16</div>
                <p className="text-green-100 text-sm">Global Advocacy</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">UN Recognition</div>
                <p className="text-green-100 text-sm">Certificate of Appreciation</p>
              </div>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4"
            >
              <Link href="/impact">
                View Our Full Impact
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/placeholder.svg?height=600&width=700"
              alt="Large community gathering showing ALLEN+ impact"
              width={700}
              height={600}
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-2xl">
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-yellow-500" />
                <div>
                  <div className="text-lg font-bold text-gray-800">UN Recognized</div>
                  <p className="text-gray-600 text-xs">Environmental Excellence</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-2xl">
              <div className="text-2xl font-bold text-green-600">10,000+</div>
              <p className="text-gray-600 text-sm">Lives Touched</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}