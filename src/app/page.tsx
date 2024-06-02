import Image from "next/image";
import Hero from '../components/main/Hero'
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Socials from '@/components/main/Socials'

export default function Home() {
  return (
    <main className="h-full  flex justify-center">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Socials />
      </div>
    </main>
  );
}
