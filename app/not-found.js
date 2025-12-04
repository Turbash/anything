import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="space-y-2">
          <h1 className="text-9xl font-bold text-primary">404</h1>
          <h2 className="text-3xl font-bold text-foreground">Page Not Found</h2>
        </div>
        <p className="text-lg text-muted-foreground">
          Sorry, we couldn't find the page you're looking for. It might have
          been removed, renamed, or doesn't exist.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link href="/">
            <Button size="lg">Go Home</Button>
          </Link>
          <Link href="/blog">
            <Button size="lg" variant="outline">
              Browse Blogs
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
