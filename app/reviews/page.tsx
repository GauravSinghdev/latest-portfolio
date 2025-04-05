import { CircleChevronRight } from "lucide-react";
import React from "react";
import ReviewComp from "./ReviewComp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews - CodewithKara",
};


export default async function ReviewPage() {
  // const session = await getServerSession(authOptions);
  return (
    <div className="space-y-5 my-10">
      <div className="h1-grad flex gap-2 items-center">
        <h1>Reviews</h1> {/* Added semantic h1 tag */}
        <span>
          <CircleChevronRight />
        </span>
      </div>
      <ReviewComp />
    </div>
  );
}
