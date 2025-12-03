"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Typed from "typed.js";
import { use, useEffect, useRef } from "react";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Coding",
        "Web Development",
        "Software Engineering",
        "Data Science",
        "Machine Learning",
      ],
      typeSpeed: 50,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-foreground md:text-4xl">
            A <span className="font-semibold">free repository</span> for
            community <br className="hidden lg:block" /> components using{" "}
            <span className="font-semibold underline decoration-primary">
              <span ref={el} />
            </span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Open source Tailwind UI components and templates to{" "}
            <br className="hidden lg:block" /> bootstrap your new apps, projects
            or landing sites!
          </p>
          <div className="mt-6 bg-transparent border border-border rounded-lg lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary focus-within:ring-opacity-20">
            <form
              action="https://www.creative-tim.com/twcomponents/search"
              className="flex flex-wrap justify-between md:flex-row"
            ></form>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <img
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground">
              Pricing Plans
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Choose the plan that suits you best
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-card rounded-lg shadow-lg border transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-card-foreground">
                  Basic
                </h3>
                <p className="mt-4 text-muted-foreground">
                  $10/month
                </p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-muted-foreground">
                    <s>10GB Storage</s>
                  </li>
                  <li className="text-muted-foreground">
                    <s>Basic Support</s>
                  </li>
                  <li className="text-muted-foreground">
                    <s>Single User</s>
                  </li>
                  <li className="text-muted-foreground">
                    Community Access
                  </li>
                  <li className="text-muted-foreground">
                    Weekly Updates
                  </li>
                </ul>
                <Button className="mx-1" variant="outline">
                  Choose Plan
                </Button>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-card rounded-lg shadow-lg border-2 border-primary transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-card-foreground">
                  Standard
                </h3>
                <p className="mt-4 text-muted-foreground">
                  $20/month
                </p>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-foreground bg-primary rounded-full">
                  Bestseller
                </span>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-muted-foreground">
                    50GB Storage
                  </li>
                  <li className="text-muted-foreground">
                    Priority Support
                  </li>
                  <li className="text-muted-foreground">
                    Up to 5 Users
                  </li>
                  <li className="text-muted-foreground">
                    Community Access
                  </li>
                  <li className="text-muted-foreground">
                    Daily Updates
                  </li>
                </ul>
                <Button className="mx-1" variant="outline">
                  Choose Plan
                </Button>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-card rounded-lg shadow-lg border transform transition duration-500 hover:scale-105 text-center">
                <h3 className="text-2xl font-semibold text-card-foreground">
                  Premium
                </h3>
                <p className="mt-4 text-muted-foreground">
                  $30/month
                </p>
                <ul className="mt-6 mb-6 space-y-4">
                  <li className="text-muted-foreground">
                    200GB Storage
                  </li>
                  <li className="text-muted-foreground">
                    24/7 Support
                  </li>
                  <li className="text-muted-foreground">
                    Unlimited Users
                  </li>
                  <li className="text-muted-foreground">
                    Community Access
                  </li>
                  <li className="text-muted-foreground">
                    Real-time Updates
                  </li>
                </ul>
                <Button className="mx-1" variant="outline">
                  Choose Plan
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Hear from our satisfied customers
            </p>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-card rounded-lg shadow-lg border transform transition duration-500 hover:scale-105 text-center">
                <p className="text-muted-foreground">
                  "This service has been a game-changer for our business. Highly
                  recommend!"
                </p>
                <h3 className="mt-4 text-xl font-semibold text-card-foreground">
                  John Doe
                </h3>
                <p className="text-muted-foreground">
                  CEO, Company A
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-card rounded-lg shadow-lg border transform transition duration-500 hover:scale-105 text-center">
                <p className="text-muted-foreground">
                  "Amazing experience! The team was professional and the results
                  were outstanding."
                </p>
                <h3 className="mt-4 text-xl font-semibold text-card-foreground">
                  Jane Smith
                </h3>
                <p className="text-muted-foreground">
                  Marketing Director, Company B
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-card rounded-lg shadow-lg border transform transition duration-500 hover:scale-105 text-center">
                <p className="text-muted-foreground">
                  "Exceptional service and support. We couldn't be happier with
                  the results."
                </p>
                <h3 className="mt-4 text-xl font-semibold text-card-foreground">
                  Michael Brown
                </h3>
                <p className="text-muted-foreground">
                  CTO, Company C
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-muted/50">
        <div className="container px-4 mx-auto">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground">
                Top Blogs
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Check out our most popular blog posts
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-card rounded-lg shadow-lg border transform transition duration-500 hover:scale-105">
                <img
                  src="/typescript.webp"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-card-foreground">
                    Blog Post Title 1
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                  <Button className="m-2" variant="outline" href="/blog-post-1">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-card rounded-lg shadow-lg border transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Blog 2"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-card-foreground">
                    Blog Post Title 2
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                  <Button className="m-2" variant="outline" href="/blog-post-2">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="p-6 bg-card rounded-lg shadow-lg border transform transition duration-500 hover:scale-105">
                <img
                  src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg"
                  alt="Blog 3"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-card-foreground">
                    Blog Post Title 3
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    A brief description of the blog post goes here. It should be
                    engaging and informative.
                  </p>
                  <Button className="m-2" variant="outline" href="/blog-post-3">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
