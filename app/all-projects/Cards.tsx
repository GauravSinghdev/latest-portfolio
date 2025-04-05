"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectObj } from "@/lib/projectsNskills";
import { MoveUpRightIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Card = {
  title: string;
  description: string;
  stack?: string[];
  live: string;
  image: string;
  githubLink: string;
};

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [callback]);

  return ref;
};

const ProjCard = () => {
  const [current, setCurrent] = useState<Card | null>(null);
  const ref = useOutsideClick(() => setCurrent(null));

  return (
    <div className="relative">
      {current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="fixed z-10 h-full w-full inset-0 bg-black/50 backdrop-blur-sm"
        />
      )}
      {current && (
        <motion.div
          layoutId={`card-${current.title}`}
          ref={ref}
          className="fixed inset-0 z-20 m-auto w-[90%] sm:w-[25%] max-h-[50vh] bg-white rounded-lg border border-neutral-200 p-3 shadow-lg flex flex-col"
        >
          <motion.img
            layoutId={`card-image-${current.title}`}
            src={current.image}
            alt={current.title}
            className="h-[32%] mx-auto aspect-square object-contain"
          />
          <hr className="my-2 text-slate-200 shadow-xl" />
          <div className="flex-1 gap-6">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4">
              <div className="flex flex-col gap-3">
                <motion.h2
                  layoutId={`card-title-${current.title}`}
                  className="font-bold text-2xl text-black"
                >
                  {current.title}
                </motion.h2>
                {current.stack && (
                  <div className="flex flex-wrap gap-0.5">
                    {current.stack.map((st, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-neutral-800 text-neutral-100 text-xs"
                      >
                        {st}
                      </span>
                    ))}
                  </div>
                )}
                <motion.p
                  layoutId={`card-description-${current.title}`} // Changed to use title for uniqueness
                  className="text-neutral-600"
                >
                  {current.description}
                </motion.p>
              </div>
            </div>
          </div>
          <div>
            <motion.div
              layoutId={`card-live-${current.title}`}
              className="flex gap-2"
            >
              <Link
                href={current.live}
                target="_blank"
                className="px-4 py-2 bg-green-500 rounded text-white text-sm hover:bg-green-600 transition-colors w-[50%] text-center flex items-center justify-center"
              >
                Live <MoveUpRightIcon  className="size-5"/>
              </Link>
              <Link
                href={current.githubLink}
                target="_blank"
                className="px-4 py-2 bg-purple-500 rounded text-white text-sm hover:bg-green-600 transition-colors  w-[50%] text-center flex items-center justify-center gap-1"
              >
                Github <FaGithub className="size-5"/>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
      {/* <h1 className="text-center font-bold text-3xl py-5 underline decoration-double">
        Projects
      </h1> */}
      <div className="grid sm:grid-cols-2 gap-2 max-w-7xl mx-auto py-5">
        {ProjectObj.map((card, idx) => (
          <motion.button
            layoutId={`card-${card.title}`}
            onClick={() => setCurrent(card)}
            key={idx}
            className="cursor-pointer p-2 rounded-lg flex justify-between items-center bg-white border border-neutral-200 hover:shadow-md transition-shadow"
          >
            <div className="flex gap-4 items-center">
              <motion.img
                layoutId={`card-image-${card.title}`}
                src={card.image}
                alt={card.title}
                className="h-32 aspect-square rounded-lg object-contain"
              />
              <div className="flex flex-col items-start gap-2">
                <motion.h2
                  layoutId={`card-title-${card.title}`}
                  className="font-bold text-lg text-black"
                >
                  {card.title}
                </motion.h2>
                <motion.p
                  layoutId={`card-description-${card.title}`} // Changed to use title for uniqueness
                  className="text-neutral-500 text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            {/* <motion.div layoutId={`card-cta-${card.title}`}>
              <Link href={card.live} className="px-2 py-1 bg-green-500 rounded-full text-white text-sm">Visit</Link>
            </motion.div> */}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default ProjCard;
