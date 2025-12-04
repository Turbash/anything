"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch("/api/posts?published=true");
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        }
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <p className="text-center text-muted-foreground">Loading posts...</p>
      </div>
    );
  }
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-center text-muted-foreground">
          No posts available yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((blog) => (
            <div
              key={blog.id}
              className="rounded-lg shadow-md overflow-hidden bg-card border"
            >
              {blog.image && (
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover"
                />
              )}

              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2 text-card-foreground">
                  {blog.title}
                </h2>

                <p className="mb-4 text-muted-foreground">{blog.description}</p>

                <div className="text-sm mb-4 text-muted-foreground">
                  <span>By {blog.users?.name || "Anonymous"}</span> |{" "}
                  <span>
                    {new Date(blog.created_at).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>

                <Link
                  href={`/blogpost/${blog.id}`}
                  className={buttonVariants({ variant: "outline" })}
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
