import FeaturesSection from "@/components/FeaturesSection"
import HowItWorks from "@/components/HowItWorks"
import L_Hero from "@/components/L_Hero"
import Navbar from "@/components/Navbar"
import TestimonialsSection from "@/components/TestimonialsSection"

function Home() {
  return (
    <>
        <Navbar/>
        <L_Hero/>
        <HowItWorks/>
        <FeaturesSection/>
        <TestimonialsSection/>
    </>
  )
}

export default Home