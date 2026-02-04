"use client"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSection from "./components/WorkoutSection";
import OfferingPic from "./components/Offering";
import PriceDetails from "./components/PriceDetail";
import BMICalculator from "./components/BMICalculator";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
export default function Home() {
  return (
   <div className="min-h-screen bg-fixed bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
    <Navbar/>
    <Hero/>
    <WorkoutSection/>
    <OfferingPic/>
    <PriceDetails/>
    <Contact/>
    <BMICalculator/>
    <Footer/>
   </div>

  );
}
