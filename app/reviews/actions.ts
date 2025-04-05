"use server";

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { revalidatePath } from "next/cache";

// Define the Review type (same as in ReviewComp)
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

// Define the response type
interface PostCommentResponse {
  success: boolean;
  message: string;
  data?: Review;
}

interface CommentData {
  text: string;
}

export async function postComment({ text }: CommentData): Promise<PostCommentResponse> {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      return {
        success: false,
        message: "You must be logged in to post a comment",
      };
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      return {
        success: false,
        message: "User not found",
      };
    }

    const comment = await prisma.comment.create({
      data: {
        comment: text,
        userId: user.id,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatarUrl: true,
          },
        },
      },
    });

    revalidatePath("/reviews");

    return {
      success: true,
      message: "Comment posted successfully",
      data: {
        id: comment.id,
        comment: comment.comment,
        user: {
          id: comment.user.id,
          name: comment.user.name!,
          email: comment.user.email,
          avatarUrl: comment.user.avatarUrl!,
        },
        createdAt: comment.createdAt.toISOString(),
      },
    };
  } catch (error) {
    console.error("Error posting comment:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Failed to post comment",
    };
  }
}