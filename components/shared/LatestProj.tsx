"use client";

import { ProjectObj } from "@/lib/projectsNskills";
import { ChevronRightCircle } from "lucide-react";
import React from "react";
import ProjCard from "./ProjCard";
import { Button } from "../ui/button";
import Link from "next/link";

const LatestProj = () => {
  return (
    <div className="space-y-6 px-6 box_1">
      <div className="flex items-center justify-between">
        <div className="h2-grad flex items-center gap-2">
          Latest Projects
          <span>
            <ChevronRightCircle className="w-6 h-6 text-[var(--primary)]" />
          </span>
        </div>
        <Link href={"/all-projects"}>
          <Button className="cursor-pointer border hover:scale-110">
            Check All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {ProjectObj.slice(0, 2).map((proj, index) => (
          <ProjCard key={index} proj={proj} />
        ))}
      </div>
    </div>
  );
};

export default LatestProj;
