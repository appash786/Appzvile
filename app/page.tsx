import Intro from "@/components/intro/Intro";
import Image from "next/image";
import Project from "@/components/Projects/Project";
import Description from "@/components/description/Description";
import MouseFollowLight from "@/components/MouseFollow/MouseFollowLight";
import Footer from "@/components/footer/Footer";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { WhatIdo } from "@/components/whatIDo/WhatIdo";
import Cta from "@/components/Cta/Cta";

export default function Home() {
  return (
    <main className="px-70 py-12">
      
          <Intro/>
          <Description/>
          <Project/>
          <WhatIdo/>
          <Cta/>
          <Footer/>
          
    
   
    </main>

  );
}
