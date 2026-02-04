import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WorkoutSessions from "./components/WorkoutPage";
import OfferingPic from "./components/Offering";

export default function Home() {
  return (
   <div className="">
    <Navbar/>
    <Hero/>
    <WorkoutSessions/>
    <OfferingPic/>
   </div>

  );
}
