import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import {getLocale, getMessages} from 'next-intl/server';



export async function generateMetadata() {

  const locale = await getLocale();
  const messages: any = await getMessages({ locale });

  const title = messages.Metadata.title;
  const description = messages.Metadata.description;
  return {
    title,
    description
  };
}

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
