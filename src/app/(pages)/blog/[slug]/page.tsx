import { notFound } from 'next/navigation';
import Image from 'next/image';
import { posts } from '@/lib/blog';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container max-w-3xl mx-auto py-12 md:py-16">
       <div className="mb-8">
            <Link href="/blog" className="text-sm text-accent hover:underline">
                &larr; Back to all posts
            </Link>
        </div>
      <article>
        <header className="mb-8">
          <div className="flex gap-2 mb-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Avatar className="h-9 w-9">
                <AvatarImage src={post.authorImage} alt={post.author} />
                <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-foreground">{post.author}</p>
                <p className="text-sm">{post.date}</p>
              </div>
            </div>
          </div>
        </header>

        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="w-full rounded-lg object-cover mb-8"
          priority
          data-ai-hint={post.imageHint}
        />

        <div 
          className="prose prose-lg dark:prose-invert text-muted-foreground max-w-none space-y-4"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
}
