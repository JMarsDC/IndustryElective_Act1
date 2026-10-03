import { Link } from "react-router-dom"
import bgImage from "../images/AgiNiJose.jpg"

function LandingPage(){
    return(
<div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      
      <div 
        className="absolute inset-0 bg-cover bg-center blur-md scale-105"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
      
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 font-serif italic flex flex-col items-center justify-center gap-6 text-center px-4">
        <h1 className="text-3xl font-bold text-[#ffb623] md:text-8xl drop-shadow-lg">
          Ang agi ni Jose
        </h1>
    
    <Link to="/" 
      className="rounded-lg bg-[#6d4c09] px-6 py-3 text-lg font-semibold text-white shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#a4720d] hover:shadow-lg active:scale-95"
    >
      Explore
    </Link>
  </div>
    </div>
    );
}

export default LandingPage