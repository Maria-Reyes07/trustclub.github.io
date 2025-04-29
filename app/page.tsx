// app/page.tsx
import { Navbar } from "@/trustclub.github.io/components/Navbar";
import { Section1 } from "@/trustclub.github.io/components/section1";
import { Section2 } from "@/trustclub.github.io/components/section2";
import { Section3 } from "@/trustclub.github.io/components/section3";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center min-h-screen pt-24">
        <Section1 />
        <Section2 />
        <Section3 />
      </main>

    </>
  );
}

