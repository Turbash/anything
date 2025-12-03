import React from "react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import fs from "fs";
import matter from "gray-matter";

const dirContent = fs.readdirSync("content", "utf-8");
const blogs = dirContent.map((fileName) => {
  const fileContent = fs.readFileSync(`content/${fileName}`, "utf-8");
  const { data } = matter(fileContent);
  return data;
});

// const blogs = [
//   {
//     title: "First Blog",
//     description: "This is the first blog description.",
//     slug: "first-blog",
//     date: "2023-10-01",
//     author: "John Doe",
//     image: "/typescript.webp",
//   },
//   {
//     title: "Second Blog",
//     description: "This is the second blog description.",
//     slug: "second-blog",
//     date: "2023-10-02",
//     author: "Jane Doe",
//     image:
//       "https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//   },
//   {
//     title: "Second Blog",
//     description: "This is the second blog description.",
//     slug: "second-blog",
//     date: "2023-10-02",
//     author: "Jane Doe",
//     image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg",
//   },
// ];

const page = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden bg-card border"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={256}
              className="w-full h-64 object-cover"
            />

            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2 text-card-foreground">
                {blog.title}
              </h2>

              <p className="mb-4 text-muted-foreground">{blog.description}</p>

              <div className="text-sm mb-4 text-muted-foreground">
                <span>By {blog.author}</span> |{" "}
                <span>
                  {new Date(blog.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>

              <Link
                href={`/blogpost/${blog.slug}`}
                className={buttonVariants({ variant: "outline" })}
              >
                Click here
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
