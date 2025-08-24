import Intro from "@/components/intro/Intro";
import Head from '@/components/Head/page'
import Image from "next/image";
import Project from "@/components/Projects/Project";
import Description from "@/components/description/Description";
import MouseFollowLight from "@/components/MouseFollow/MouseFollowLight";
import Footer from "@/components/footer/Footer";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { WhatIdo } from "@/components/whatIDo/WhatIdo";
import Cta from "@/components/Cta/Cta";
import GridSection from "@/components/GridSection/GridSection";
import Seo from "@/components/Projects/Seo";
import BeforeAfter from "@/components/BeforeAfter/BeforeAfter";

export default function Home() {
  return (
    <main className="xl:px-70 py-12">
      <Head />


      <Seo />
      <BeforeAfter />
      <Project />
      {/* <WhatIdo/> */}
      <Cta />
      <Footer />



    </main>

  );
}
