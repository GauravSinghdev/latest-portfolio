"use client";

import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import axios from "axios";
import { postComment } from "./actions";
import ReviewSkeleton from "./ReviewSkeleton";
import { motion } from "framer-motion";

interface Review {
  id: string;
  comment: string;
  user: {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
  };
  createdAt?: string;
}

const ReviewComp: React.FC = () => {
  const { data: session, status } = useSession();
  const [text, setText] = useState<string>("");
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("/api/all-reviews");
        setReviews(response.data.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const handleBtn = async () => {
    if (!text) return;

    setIsSubmitting(true);
    const result = await postComment({ text }); // No explicit type needed here now

    if (result.success && result.data) {
      setReviews([result.data, ...reviews]);
      setText("");
    } else {
      console.error(result.message);
    }
    setIsSubmitting(false);
  };

  if (isLoading || status === "loading") {
    return <ReviewSkeleton />;
  }

  return (
    <div className="space-y-5 max-w-6xl mx-auto">
      {session?.user ? (
        <div className="flex flex-col gap-2">
          <Button
            onClick={() => signOut()}
            className="w-fit self-end cursor-pointer text-red-500 disabled:text-red-500 border"
          >
            Logout
          </Button>
          <Textarea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setText(e.target.value)
            }
            value={text}
            className="placeholder:text-gray-400 min-h-[10px] border border-gray-300 rounded-md p-2 resize-none focus:outline-none"
            placeholder="comment here . . ."
            autoFocus={true}
          />
          <div className="flex justify-between">
            <Button
              onClick={handleBtn}
              className="w-fit self-end cursor-pointer text-black border disabled:text-black/60 border-green-500 shadow-2xl disabled:border disabled:border-slate-300"
              disabled={!text.length || isSubmitting}
            >
              {isSubmitting
                ? "Posting..."
                : `Add review as @${session.user.name}`}
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex h-full justify-end">
          <Button
            className="cursor-pointer flex items-center gap-2 shadow-2xl border border-slate-300 hover:scale-105"
            onClick={() =>
              signIn("google", {
                redirect: true,
                callbackUrl: "/reviews",
              })
            }
          >
            Login
            <FcGoogle className="size-5" />
            for review
          </Button>
        </div>
      )}

      {reviews.length > 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="py-5 space-y-5"
        >
          {reviews.map((review) => (
            <div key={review.id} className="flex items-center gap-2">
              <Image
                src={review.user.avatarUrl}
                alt={`${review.user.name}'s avatar`}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex flex-col w-full">
                <div className="flex gap-2 items-center">
                  <div className="flex gap-1 items-center">
                    <h2 className="sm:text-lg font-semibold capitalize">
                      {review.user.name}
                    </h2>
                    {/* <p className="hidden sm:block text-gray-600">
                      ({review.user.email})
                    </p> */}
                  </div>
                  {review.createdAt && (
                    <div className="text-xs text-slate-500">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </div>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-gray-700">
                  {review.comment}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      ) : (
        <div className="text-center">No reviews Yet.</div>
      )}
    </div>
  );
};

export default ReviewComp;
