"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import type { Program } from '@/lib/programs';
import { generateWhatsappLink } from '@/lib/config';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

// Create a version of the Program type that is safe to pass to client components
type SerializableProgram = Omit<Program, 'icon'>;

export default function ProgramDetailClient({ program }: { program: SerializableProgram }) {
  const isVocational = program.slug === 'vocational-skills-for-women' || program.slug === 'general-vocational-training';
  
  const [selectedTrack, setSelectedTrack] = useState<string>(
    isVocational && program.syllabus.length > 0 ? program.syllabus[0].topic : ""
  );

  const baseMessage = `Hello! I'm interested in enrolling in the "${program.title}" program.`;
  const trackMessage = isVocational && selectedTrack ? ` I'd like to specialize in the "${selectedTrack}" track.` : '';
  const finalMessage = baseMessage + trackMessage;
  const whatsappLink = generateWhatsappLink(finalMessage);

  return (
    <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        <main className="md:col-span-2 space-y-12">
            {isVocational ? (
                 <section>
                    <h2 className="text-2xl font-bold font-headline mb-4">Choose Your Specialization</h2>
                    <p className="text-muted-foreground mb-6">Please select one track to specialize in. Your government-certified certificate will be for this specialization.</p>
                    <RadioGroup value={selectedTrack} onValueChange={setSelectedTrack} className="space-y-4">
                        {program.syllabus.map((item, index) => (
                            <Label 
                                key={index}
                                htmlFor={`track-${index}`} 
                                className="flex items-center space-x-4 border p-4 rounded-lg cursor-pointer has-[:checked]:bg-accent/10 has-[:checked]:border-accent transition-colors"
                            >
                                <RadioGroupItem value={item.topic} id={`track-${index}`} />
                                <span className="font-semibold text-lg">{item.topic}</span>
                            </Label>
                        ))}
                    </RadioGroup>
                </section>
            ) : (
                <section>
                     <h2 className="text-2xl font-bold font-headline mb-4">Weekly Syllabus</h2>
                     <ul className="space-y-4 border-l-2 border-accent pl-6">
                        {program.syllabus.map((item, index) => (
                            <li key={index} className="relative">
                                 <div className="absolute -left-[1.6rem] top-1 h-3 w-3 rounded-full bg-accent"></div>
                                 <p className="font-semibold text-lg">Weeks {item.week}</p>
                                 <p className="text-muted-foreground">{item.topic}</p>
                            </li>
                        ))}
                     </ul>
                </section>
            )}
        </main>
        
        <aside className="space-y-6 md:col-span-1">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 sticky top-24">
                 <h3 className="text-xl font-bold font-headline mb-4">Course Details</h3>
                 <div className="space-y-3 text-sm">
                    {Object.entries(program.details).map(([key, value]) => (
                         key !== 'Certification' && (
                            <div key={key} className="flex justify-between">
                                <span className="font-medium text-muted-foreground">{key}:</span>
                                <span className="text-right">{value}</span>
                            </div>
                        )
                    ))}
                     <div className="flex justify-between">
                        <span className="font-medium text-muted-foreground">Duration:</span>
                        <span className="text-right">{program.duration}</span>
                    </div>
                     <div className="flex justify-between items-baseline">
                        <span className="font-medium text-muted-foreground">Fee:</span>
                        <span className="text-right font-bold text-lg text-foreground">{program.fee}</span>
                    </div>
                 </div>
                 <Button 
                    size="lg" 
                    className="w-full mt-6" 
                    asChild={!isVocational || !!selectedTrack}
                    disabled={isVocational && !selectedTrack}
                >
                   <Link href={whatsappLink} target="_blank">
                    Enroll Now
                   </Link>
                 </Button>
                 {isVocational && !selectedTrack && (
                    <p className="text-xs text-destructive text-center mt-2">Please select a track to enroll.</p>
                 )}
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                 <h3 className="text-xl font-bold font-headline mb-4">What You'll Gain</h3>
                 <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Portfolio-ready projects</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Certificate of Completion</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Access to alumni network</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-accent" /> Career support services</li>
                 </ul>
            </div>
        </aside>
      </div>
  );
}
