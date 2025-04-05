import { ChevronRightCircle } from "lucide-react";
import React from "react";
import SkillsOrbit from "./SkillsComp";

const Skills = () => {
  return (
    <div className="sm:px-6 box_1">
      <div className="flex items-center justify-between">
        <div className="h2-grad flex items-center gap-2">
          Skills
          <span>
            <ChevronRightCircle className="w-6 h-6 text-[var(--primary)]" />
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <SkillsOrbit />
        {/* <FloatingSkills /> */}
      </div>
    </div>
  );
};

export default Skills;
