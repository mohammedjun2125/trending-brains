import type { StaticImageData } from 'next/image';

export type Post = {
  slug: string;
  title: string;
  description: string;
  author: string;
  authorImage: string;
  date: string;
  tags: string[];
  content: string;
  image: string;
  imageHint: string;
};

export const posts: Post[] = [
  {
    slug: 'how-to-choose-a-career',
    title: 'A Practical Guide on How to Choose a Career You Love',
    description: 'Feeling lost about your career path? This guide will walk you through the essential steps to identify your passions, assess your skills, and find a career that truly fulfills you.',
    author: 'Jane Doe',
    authorImage: 'https://picsum.photos/seed/jd/100/100',
    date: 'October 28, 2024',
    tags: ['Career Advice', 'Personal Development'],
    content: `
        <p>Choosing a career is one of the most significant decisions you'll make in your life. It's not just about earning a living; it's about finding something you are passionate about, something that challenges you, and something that brings you a sense of purpose. Here’s a step-by-step guide to help you navigate this important journey.</p>
        <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. Self-Assessment: Know Thyself</h3>
        <p>The first step is to look inward. Understanding your own interests, values, skills, and personality is crucial. Ask yourself:</p>
        <ul class="list-disc list-inside space-y-2 my-4">
            <li><strong>What are my interests?</strong> What do you enjoy doing in your free time? What subjects do you love learning about?</li>
            <li><strong>What are my values?</strong> Is financial security important to you? Do you value work-life balance, creativity, or helping others?</li>
            <li><strong>What are my skills?</strong> What are you good at? Think about both hard skills (like coding or data analysis) and soft skills (like communication or problem-solving).</li>
        </ul>
        <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Explore Your Options</h3>
        <p>Once you have a better understanding of yourself, it’s time to explore potential career paths. Don’t limit yourself. Research various industries and roles. Talk to people in different professions, conduct informational interviews, and read about their experiences. Online resources like LinkedIn and career blogs can also be invaluable.</p>
        <h3 class="font-headline text-xl font-bold mt-6 mb-2">3. Gain Experience</h3>
        <p>Theory is one thing, but practical experience is another. Try to get hands-on experience through internships, volunteering, or freelance projects. This will not only help you build your resume but also give you a real taste of what a particular career is like. It’s a great way to test the waters before you fully commit.</p>
        <p class="mt-4">Making a career choice is a journey, not a destination. It’s okay to change your mind and pivot. The most important thing is to stay curious, keep learning, and choose a path that aligns with who you are.</p>
    `,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxjYXJlZXIlMjBhZHZpY2V8ZW58MHx8fHwxNzE4NzgzNzM4fDA&ixlib=rb-4.0.3&q=80&w=1080',
    imageHint: 'career advice'
  },
  {
    slug: 'latest-ai-tools-for-beginners',
    title: 'Top 5 AI Tools That Beginners Can Start Using Today',
    description: 'Artificial intelligence is no longer just for experts. Discover five user-friendly AI tools that can help you with everything from writing and design to productivity, no coding required.',
    author: 'John Smith',
    authorImage: 'https://picsum.photos/seed/js/100/100',
    date: 'October 25, 2024',
    tags: ['AI', 'Technology', 'Productivity'],
    content: `
       <p>Artificial Intelligence (AI) is transforming the way we work and create. While it might sound intimidating, many powerful AI tools are surprisingly accessible for beginners. Here are five tools you can start exploring today to boost your productivity and creativity.</p>
        <h3 class="font-headline text-xl font-bold mt-6 mb-2">1. ChatGPT</h3>
        <p>ChatGPT is a versatile AI chatbot that can help with a wide range of tasks. Use it to brainstorm ideas, draft emails, write articles, summarize long documents, and even debug code. Its conversational nature makes it incredibly easy to use.</p>
        <h3 class="font-headline text-xl font-bold mt-6 mb-2">2. Canva Magic Studio</h3>
        <p>Canva has integrated a suite of AI features called Magic Studio. You can generate images from text, create presentations instantly, and even use AI to help with your design layout. It’s perfect for anyone who needs to create visual content without being a professional designer.</p>
        <h3 class="font-headline text-xl font-bold mt-6 mb-2">3. Notion AI</h3>
        <p>If you use Notion for note-taking and project management, Notion AI is a game-changer. It can help you summarize your notes, improve your writing, and generate action items from meeting minutes. It’s like having a personal assistant built right into your workspace.</p>
        <h3 class="font-headline text-xl font-bold mt-6 mb-2">4. Otter.ai</h3>
        <p>Otter.ai is an AI-powered transcription service. It can record your meetings and automatically transcribe them in real-time. It even identifies different speakers and provides a summary, so you can focus on the conversation instead of taking notes.</p>
        <h3 class="font-headline text-xl font-bold mt-6 mb-2">5. Midjourney</h3>
        <p>For those interested in AI art, Midjourney is a fantastic tool. By writing simple text prompts, you can generate stunning and unique images. It’s a fun way to bring your creative ideas to life, whether for a project or just for fun.</p>
        <p class="mt-4">These tools are just the tip of the iceberg, but they offer a great starting point for anyone looking to leverage the power of AI in their daily life.</p>
    `,
    image: 'https://images.unsplash.com/photo-1678416348398-744e43f50164?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxBSSUyMHRvb2xzfGVufDB8fHx8MTcxODc4MzgwMnww&ixlib=rb-4.0.3&q=80&w=1080',
    imageHint: 'AI tools'
  },
  {
    slug: 'student-success-story',
    title: 'From Student to Startup Founder: Aisha Khan’s Story',
    description: 'Read the inspiring journey of Aisha Khan, a graduate of our Women Empowerment Initiative, who went on to launch her own successful creative agency, Bloom Creatives.',
    author: 'Priya Sharma',
    authorImage: 'https://picsum.photos/seed/ps/100/100',
    date: 'October 22, 2024',
    tags: ['Success Story', 'Entrepreneurship', 'Women Empowerment'],
    content: `
        <p>At Trending Brains Academy, our greatest pride comes from seeing our students achieve their dreams. Today, we’re sharing the inspiring story of Aisha Khan, an alumna of our Women Empowerment Initiative who has since become the founder of a thriving creative agency.</p>
        <h3 class="font-headline text-xl font-bold mt-6 mb-2">The Beginning of a Journey</h3>
        <p>Aisha joined our academy with a passion for design but was unsure how to turn it into a career. "I had the creative skills, but I lacked the business knowledge and the confidence to go out on my own," Aisha recalls. "The Women Empowerment Initiative seemed like the perfect fit."</p>
        <h3 class="font-headline text-xl font-bold mt-6 mb-2">Gaining Skills and Confidence</h3>
        <p>Through the program, Aisha learned about financial literacy, business planning, and leadership. The mentorship she received was invaluable. "My mentor helped me see my potential and gave me the practical advice I needed to create a solid business plan," she says.</p>
        <h3 class="font-headline text-xl font-bold mt-6 mb-2">Launching Bloom Creatives</h3>
        <p>After graduating, Aisha launched Bloom Creatives, a digital marketing and design agency focused on supporting female-owned businesses. In just one year, her agency has worked with over 20 clients and is continuing to grow.</p>
        <p class="mt-4">"Trending Brains Academy gave me more than just skills; it gave me a community," Aisha says. "Knowing I have a network of supportive women behind me makes all the difference. My advice to anyone considering this path is simple: believe in yourself and invest in your education. It’s the best decision you’ll ever make."</p>
    `,
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxzdWNjZXNzJTIwc3Rvcnl8ZW58MHx8fHwxNzE4NzgzODczfDA&ixlib=rb-4.0.3&q=80&w=1080',
    imageHint: 'success story'
  },
];
