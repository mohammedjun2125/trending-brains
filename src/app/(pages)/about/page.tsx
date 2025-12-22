import Image from "next/image";
import placeholderImages from "@/lib/placeholder-images.json";
import type { Metadata } from "next";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Trending Brains, a future-focused technology education and career-enablement organization dedicated to transforming students into industry-ready professionals.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
    const aboutImage = placeholderImages.placeholderImages.find(p => p.id === "hero-image");

  return (
    <div className="container mx-auto py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl">About Trending Brains</h1>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground md:text-xl">
          Transforming today's learners into tomorrow's technology leaders.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-bold font-headline mb-4">Who We Are</h2>
            <p className="text-muted-foreground">
              Trending Brains is a future-focused technology education and career-enablement organization dedicated to transforming students into industry-ready professionals. We bridge the gap between academic learning and real-world job requirements through practical, skill-driven, and outcome-oriented training programs in emerging and in-demand technologies.
            </p>
          </div>
           <div>
            <h2 className="text-3xl font-bold font-headline mb-4">Our Vision</h2>
             <p className="text-muted-foreground">
               To empower students and young professionals to become globally competitive, future-ready technologists by delivering industry-aligned, job-oriented education that fuels innovation, employability, and lifelong success.
            </p>
             <p className="text-muted-foreground mt-4">
                We envision a world where every learner—regardless of background—has access to cutting-edge skills in AI, Machine Learning, Cloud Computing, Cyber Security, and Full-Stack Development, enabling them to thrive in the digital economy.
            </p>
          </div>
        </div>
        <div>
           {aboutImage && (
            <Image
              src={aboutImage.imageUrl}
              alt={aboutImage.description}
              width={600}
              height={450}
              className="rounded-lg object-cover"
              data-ai-hint={aboutImage.imageHint}
            />
          )}
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-16">
          <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold font-headline mb-4">Our Mission</h2>
                <p className="text-muted-foreground mb-6">Our mission is to transform ambition into expertise and skills into sustainable careers. We achieve this by:</p>
                 <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0"/>
                        <span className="text-muted-foreground">Delivering job-oriented, industry-relevant courses in AI & ML, Cloud Computing (AWS & Azure), Cyber Security, Full-Stack Java, and Full-Stack Python.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0"/>
                        <span className="text-muted-foreground">Providing hands-on training, real-time projects, and practical exposure aligned with current industry demands.</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0"/>
                        <span className="text-muted-foreground">Equipping learners with technical excellence, problem-solving ability, and professional skills.</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0"/>
                        <span className="text-muted-foreground">Building strong industry partnerships to enhance internships, certifications, and placement opportunities.</span>
                    </li>
                     <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0"/>
                        <span className="text-muted-foreground">Creating an ecosystem of continuous learning, innovation, and career mentorship.</span>
                    </li>
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold font-headline mb-4">What We Stand For</h2>
                 <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                       <span className="font-bold text-lg text-accent mt-px">✓</span>
                       <div>
                           <h4 className="font-semibold">Employability First</h4>
                           <p className="text-muted-foreground">Skills that lead to real jobs, not just certificates.</p>
                       </div>
                    </li>
                     <li className="flex items-start gap-3">
                       <span className="font-bold text-lg text-accent mt-px">✓</span>
                       <div>
                           <h4 className="font-semibold">Future-Driven Learning</h4>
                           <p className="text-muted-foreground">Courses designed for tomorrow’s tech landscape.</p>
                       </div>
                    </li>
                     <li className="flex items-start gap-3">
                       <span className="font-bold text-lg text-accent mt-px">✓</span>
                       <div>
                           <h4 className="font-semibold">Practical Excellence</h4>
                           <p className="text-muted-foreground">Learn by doing, building, and solving real problems.</p>
                       </div>
                    </li>
                    <li className="flex items-start gap-3">
                       <span className="font-bold text-lg text-accent mt-px">✓</span>
                       <div>
                           <h4 className="font-semibold">Inclusive Growth</h4>
                           <p className="text-muted-foreground">Empowering students from diverse backgrounds.</p>
                       </div>
                    </li>
                    <li className="flex items-start gap-3">
                       <span className="font-bold text-lg text-accent mt-px">✓</span>
                       <div>
                           <h4 className="font-semibold">Career Transformation</h4>
                           <p className="text-muted-foreground">From learner to professional, with clarity and confidence.</p>
                       </div>
                    </li>
                </ul>
              </div>
          </div>
      </div>

    </div>
  );
}
