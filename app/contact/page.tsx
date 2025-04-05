import { CircleChevronRight } from "lucide-react";
import { Metadata } from "next";
import React from "react";
import ContactCompo from "./ContactCompo";

export const metadata: Metadata = {
  title: "Contact - CodewithKara",
};

export default function ContactPage() {
  return (
    <div className="space-y-5 my-10">
      <div className="h1-grad flex gap-2 items-center">
        Contact
        <span>
          <CircleChevronRight />
        </span>
      </div>
      <ContactCompo/>
    </div>
  );
}
