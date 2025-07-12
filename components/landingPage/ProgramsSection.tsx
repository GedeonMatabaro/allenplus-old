// components/home/ProgramsSection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Users, Heart, Lightbulb, ArrowRight } from "lucide-react";

interface Program {
  title: string;
  description: string;
  icon: JSX.Element;
  image: string;
  alt: string;
}

export function ProgramsSection() {
  const programs: Program[] = [
    {
      title: "Green Youth Forum",
      description: "Empowering 234+ youth through climate dialogues and innovative solutions at local and international levels.",
      icon: <Users className="h-6 w-6" />,
      image: "/placeholder.svg?height=400&width=600",
      alt: "Youth engaged in climate action discussions",
    },
    {
      title: "Solidarity +",
      description: "Supporting 1,500+ children in IDP camps, building resilience and sparking hope through community solidarity.",
      icon: <Heart className="h-6 w-6" />,
      image: "/placeholder.svg?height=400&width=600",
      alt: "Children receiving support in IDP camps",
    },
    {
      title: "Innovation Hub",
      description: "Driving sustainable agriculture and renewable energy solutions through practice-centered programs.",
      icon: <Lightbulb className="h-6 w-6" />,
      image: "/placeholder.svg?height=400&width=600",
      alt: "Sustainable agriculture and renewable energy projects",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Programs: Driving<span className="text-green-600"> Sustainable Change</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three core programs creating measurable impact across Eastern DRC
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center mb-3">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      {program.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{program.title}</h3>
                  </div>
                  <p className="text-gray-200 mb-4">{program.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4 font-semibold">
            <Link href="/programs">
              Explore All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}