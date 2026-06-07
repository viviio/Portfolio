import SectionNav from "@/components/nav/SectionNav";

// ── Intro ──
import Hero from "@/components/sections/intro/Hero";
import Background from "@/components/sections/intro/Background";
import Tension from "@/components/sections/intro/Tension";
import Problem from "@/components/sections/intro/Problem";

// ── Thesis ──
import Thesis from "@/components/sections/thesis/Thesis";
import Principles from "@/components/sections/thesis/Principles";

// ── Solution ──
import Storyboard from "@/components/sections/solution/Storyboard";
import RhythmEditing from "@/components/sections/solution/RhythmEditing";
import DirectorMode from "@/components/sections/solution/DirectorMode";

// ── Outro ──
import Value from "@/components/sections/outro/Value";
import Reflection from "@/components/sections/outro/Reflection";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
      <SectionNav />
      <main>
        <Hero />
        <Background />
        <Tension />
        <Problem />
        <Thesis />
        <Principles />
        <Storyboard />
        <RhythmEditing />
        <DirectorMode />

        <Value />

        <Reflection />
      </main>
      <Footer />
    </>
  );
}
