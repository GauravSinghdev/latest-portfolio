// components/ReviewSkeleton.tsx
import React from "react";

const ReviewSkeleton: React.FC = () => {
  return (
    <div className="space-y-5 animate-pulse max-w-6xl mx-auto">
      {/* Comment input skeleton (shown when authenticated) */}
      <div className="flex flex-col gap-2">
        <div className="w-24 h-10 bg-gray-200 rounded self-end" />
        <div className="h-10 bg-gray-200 rounded-md" /> {/* Textarea */}
        <div className="w-60 h-10 bg-gray-200 rounded self-start" /> {/* Add Comment button */}
      </div>

      {/* Reviews list skeleton */}
      <div className="py-5 space-y-5">
        {[1, 2, 3].map((_, index) => (
          <div key={index} className="flex items-start gap-2">
            <div className="h-10 w-10 bg-gray-200 rounded-full" /> {/* Avatar */}
            <div className="flex flex-col w-full gap-2">
              <div className="flex gap-1 items-center justify-between">
                <div className="flex gap-2 items-center">
                  <div className="h-4 w-24 bg-gray-200 rounded" /> {/* Name */}
                  <div className="h-3 w-32 bg-gray-200 rounded" /> {/* Email */}
                </div>
                <div className="h-3 w-16 bg-gray-200 rounded" /> {/* Date */}
              </div>
              <div className="space-y-2">
                <div className="h-3 w-full bg-gray-200 rounded" /> {/* Comment line 1 */}
                <div className="h-3 w-3/4 bg-gray-200 rounded" /> {/* Comment line 2 */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSkeleton;