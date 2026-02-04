"use client"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutSection";
import OfferingPic from "./components/Offering";
import PriceDetails from "./components/PriceDetail";

export default function Home() {
  return (
   <div className="min-h-screen bg-fixed bg-[radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
    <Navbar/>
    <Hero/>
    <WorkoutSessions/>
    <OfferingPic/>
    <PriceDetails/>
   </div>

  );
}
