import GetStarted from "@/components/get-started/GetStarted";
import Features from "@/components/features/Features";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <GetStarted />
      {/*
      <Pricing />
      <Testimonials />
      <FAQ /> */}
    </>
  );
}
