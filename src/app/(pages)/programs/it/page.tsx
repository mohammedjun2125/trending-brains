import { Button } from "@/components/ui/button";
import { Cpu, Construction } from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'IT Programs',
    description: 'Explore our upcoming expert-led IT courses in AI, Machine Learning, Cloud Computing, Cyber Security, and Full-Stack Development.',
    alternates: {
        canonical: '/programs/it',
    },
};


export default function ITProgramsPage() {
  return (
    <div className="container mx-auto py-12 md:py-16">
       <div className="mb-8">
            <Link href="/programs" className="text-sm text-accent hover:underline">
                &larr; Back to all program categories
            </Link>
        </div>
      <div className="text-center">
        <Cpu className="mx-auto h-16 w-16 text-accent" />
        <h1 className="mt-6 text-4xl font-bold font-headline tracking-tighter sm:text-5xl">
          IT Programs
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
          Our expert-led IT courses are currently under development and will be launching soon. Get ready to master the most in-demand skills in the tech industry.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mt-12 text-center rounded-lg border bg-card text-card-foreground shadow-sm p-8">
        <Construction className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-bold font-headline">Coming Soon!</h2>
        <p className="mt-2 text-muted-foreground">
          We are working hard to bring you top-tier courses in AI & ML, Cloud Computing, Cyber Security, and Full-Stack Development. Stay tuned for our official launch!
        </p>
        <Button asChild className="mt-6">
            <Link href="/contact">
                Notify Me
            </Link>
        </Button>
      </div>
    </div>
  );
}
