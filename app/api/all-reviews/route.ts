import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Adjust the import path based on your prisma setup

export async function GET() {
  try {
    // Fetch all comments with their related user details
    const comments = await prisma.comment.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            avatarUrl: true,
            createdAt: true,
          },
        },
      },
      orderBy: {
        id: "desc", // Optional: orders comments by ID descending (newest first)
      },
    });

    // Return successful response with comments data
    return NextResponse.json(
      {
        message: "Comments retrieved successfully",
        data: comments,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    // Handle any errors that occur during database query
    console.error("Error fetching comments:", error);
    return NextResponse.json(
      {
        message: "Error fetching comments",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      {
        status: 500,
      }
    );
  }
}
