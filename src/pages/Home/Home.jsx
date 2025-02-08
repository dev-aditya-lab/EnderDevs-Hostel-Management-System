import FeaturesSection from "@/components/FeaturesSection"
import HowItWorks from "@/components/HowItWorks"
import L_Hero from "@/components/L_Hero"
import Navbar from "@/components/Navbar"

function Home() {
  return (
    <>
        <Navbar/>
        <L_Hero/>
        <HowItWorks/>
        <FeaturesSection/>
    </>
  )
}

export default Home