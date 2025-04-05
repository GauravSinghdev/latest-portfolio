import SuperMotion from "@/components/motion_compo/SuperMotion";
import { CircleChevronRight } from "lucide-react";
import React from "react";
import ProjCard from "./Cards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - CodewithKara",
};

export default function AllProjectsPage() {
  return (
    <SuperMotion>
      <div className="space-y-5 my-10">
        <div className="h1-grad flex gap-2 items-center">
          Projects{" "}
          <span className="text-primary">
            <CircleChevronRight />
          </span>
        </div>
        <ProjCard />
      </div>
    </SuperMotion>
  );
}
