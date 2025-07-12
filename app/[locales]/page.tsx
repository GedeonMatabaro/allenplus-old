import { HeroSection } from "@/components/landingPage/HeroSection"
import { StatisticsSection } from "@/components/landingPage/StatisticsSection"
import { ProgramsSection } from "@/components/landingPage/ProgramsSection"
import { FutureGoalsSection } from "@/components/landingPage/FutureGoalsSection"
import { ImpactSection } from "@/components/landingPage/ImpactSection"
import { PartnersSection } from "@/components/landingPage/PartnersSection"
import { Navigation } from "@/components/navigation"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* <Navigation /> */}
      <HeroSection />
      <StatisticsSection />
      <ProgramsSection />
      <FutureGoalsSection />
      <ImpactSection />
      <PartnersSection /> 
       <Footer />
    </div>
  )
}
