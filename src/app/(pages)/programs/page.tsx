"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Cpu, BookOpen } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

// This is a client component, but we can't export metadata from it directly.
// We'll keep the Metadata object here for reference, but it should be moved
// to the layout or a server component if static generation is needed.
const metadata: Metadata = {
  title: "Our Programs",
  description: "Explore our wide range of programs, including professional IT courses and general skill-based training designed to help you achieve your career goals.",
  alternates: {
      canonical: "/programs",
  },
};


export default function ProgramsPage() {
  return (
    <div className="container mx-auto py-12 md:py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">
          Explore Our Programs
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
          We offer a diverse range of courses in both technical and general fields to help you succeed. Choose a category to begin your learning journey.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 max-w-4xl mx-auto">
        
        <Link href="/programs/it">
          <Card className="flex flex-col h-full transform transition-transform hover:-translate-y-2 hover:shadow-lg">
            <CardHeader className="flex-row items-center gap-4">
               <div className="bg-accent text-accent-foreground rounded-full p-4">
                  <Cpu className="h-8 w-8" />
               </div>
               <div>
                  <CardTitle className="font-headline text-2xl">IT Programs</CardTitle>
                  <CardDescription className="mt-2 text-base">
                    Coming Soon! Get ready for cutting-edge courses in the most in-demand technologies.
                  </CardDescription>
               </div>
            </CardHeader>
            <div className="p-6 pt-0 mt-auto">
                <div className="flex items-center text-accent font-semibold">
                    Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                </div>
            </div>
          </Card>
        </Link>
        
        <Link href="/programs/general">
          <Card className="flex flex-col h-full transform transition-transform hover:-translate-y-2 hover:shadow-lg">
            <CardHeader className="flex-row items-center gap-4">
                <div className="bg-accent text-accent-foreground rounded-full p-4">
                  <BookOpen className="h-8 w-8" />
               </div>
               <div>
                  <CardTitle className="font-headline text-2xl">General & Skill-Based Programs</CardTitle>
                  <CardDescription className="mt-2 text-base">
                    Develop essential skills in entrepreneurship, leadership, communication, and vocational trades.
                  </CardDescription>
               </div>
            </CardHeader>
             <div className="p-6 pt-0 mt-auto">
                <div className="flex items-center text-accent font-semibold">
                    Explore Courses <ArrowRight className="ml-2 h-4 w-4" />
                </div>
            </div>
          </Card>
        </Link>
        
      </div>
    </div>
  );
}
