"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTranslations } from "next-intl";


export default function About() {
  const t = useTranslations();
  const { ref } = useSectionInView("Navbar.about", 0.5);

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t("About.title")} </SectionHeading>
     
      <div className="mb-3" dangerouslySetInnerHTML={{ __html: t.raw('About.paragraph3') }} />
      {/* <div className="mb-3" dangerouslySetInnerHTML={{ __html: t.raw('About.paragraph2') }} /> */}

    </motion.section>
  );
}
