import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Heart, Lightbulb, Globe, HandHeart } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Large Background Image */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="ALLEN+ team and community members working together"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mt-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Our Story: Empowering Communities,
            <span className="block text-yellow-400">Sustaining Our Planet</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Discover the mission, vision, and values that drive ALLEN+ forward
          </p>
        </div>
      </section>

      {/* Mission with Split Image Layout */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=700"
                alt="Community members engaged in sustainable development"
                width={700}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-green-100 rounded-2xl -z-10"></div>
            </div>
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full font-semibold">
                Our Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Fostering a Resilient and
                <span className="text-green-600"> Sustainable Future</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                ALLEN+ (Aid Life Learn Environment) is dedicated to empowering youth and vulnerable communities through
                innovative, practice-driven programs in climate action, sustainable agriculture, renewable energy, and
                humanitarian support.
              </p>
              <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                <p className="text-lg text-gray-700 font-medium">
                  "Ensuring no one is left behind in our journey toward sustainability."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision with Reverse Layout */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-semibold">
                Our Vision
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                Empowered Communities
                <span className="text-yellow-600"> Leading Change</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We envision a world where empowered communities actively lead in creating sustainable solutions for
                environmental challenges, where every individual has the opportunity to thrive and contribute to a
                healthier planet.
              </p>
              <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                <p className="text-lg text-gray-700 font-medium">
                  "Every individual deserves the opportunity to thrive and contribute to a healthier planet."
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <Image
                src="/placeholder.svg?height=600&width=700"
                alt="Vision of sustainable future with thriving communities"
                width={700}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-yellow-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values with Image Icons */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide every decision, every program, and every partnership
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Community Empowerment",
                description: "Believing in the power of local communities to drive meaningful change",
                color: "green",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                description: "Fostering creative solutions to complex environmental challenges",
                color: "yellow",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                icon: Globe,
                title: "Sustainability",
                description: "Protecting the environment for current and future generations",
                color: "cyan",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                icon: Heart,
                title: "Inclusivity",
                description: "Ensuring programs reach and benefit the most vulnerable",
                color: "purple",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                icon: HandHeart,
                title: "Collaboration",
                description: "Working with partners to amplify our collective impact",
                color: "blue",
                image: "/placeholder.svg?height=300&width=400",
              },
              {
                icon: Target,
                title: "Action-Oriented",
                description: "Emphasizing hands-on practice and tangible results",
                color: "red",
                image: "/placeholder.svg?height=300&width=400",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={value.image || "/placeholder.svg"}
                    alt={`${value.title} in action`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className={`w-12 h-12 bg-${value.color}-500 rounded-full flex items-center justify-center`}>
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Unique - Visual Storytelling */}
      <section className="py-20 px-4 bg-green-600 text-white overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                What Makes Us
                <span className="text-yellow-400"> Unique</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-800 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Youth-Driven Change</h3>
                    <p className="text-green-100">
                      We firmly believe young people can drive change, putting practice at the center of all programs.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-800 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Local Focus, Global Impact</h3>
                    <p className="text-green-100">
                      Deep understanding of Eastern DRC challenges enables culturally appropriate, sustainable
                      solutions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-800 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Practice-Driven Programs</h3>
                    <p className="text-green-100">
                      Every initiative translates into real-world impact through hands-on implementation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Young people leading community change"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white rounded-full opacity-10"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
