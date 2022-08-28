import React from "react";
import AboutMeSection from "./AboutMeSection";
import InstructionSection from "./InstructionSection";
import ProjectsSection from "./ProjectsSection";
import TechSection from "./TechSection";
import TitleSection from "./TitleSection";

function MainContent() {
  return (
    <main>
      <TitleSection />
      <AboutMeSection />
      <InstructionSection />
      <TechSection />
      <ProjectsSection />
    </main>
  );
}

export default MainContent;
