"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";

export default function About() {
  const { data: session } = useSession();
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20 bg-linear-to-b from-primary/10 to-background">
        <div className="w-full max-w-5xl px-8 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Welcome to SiegeBlog
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            A community-driven blogging platform built for Siege participants to
            document their 10-week journey of building amazing projects.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href={session ? "/create-post" : "/signup"}>
              <Button size="lg" className="text-lg">
                {session ? "Start Writing" : "Sign Up"}
              </Button>
            </Link>
            <Link href="/blog">
              <Button size="lg" variant="outline" className="text-lg">
                Explore Blogs
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <section className="py-16 bg-linear-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card/50 backdrop-blur-sm border rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-card-foreground mb-6">
              About This Project
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Blog Website was created as a learning project to explore modern
                web development technologies including Next.js, Supabase, and
                NextAuth.
              </p>
              <p>
                This platform can be used by Siege participants as a dedicated
                space to: share their 10 week journey with each other, including
                but not limited to what they build over the 10 weeks what did
                they learn, etc.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
