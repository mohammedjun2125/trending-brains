
import { BrainCircuit, BookOpen, Users, BarChart, Star, Palette, CookingPot, Hand, Stethoscope, Briefcase, Shield, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Program = {
  slug: string;
  title: string;
  duration: string;
  fee: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  image: string;
  imageHint: string;
  syllabus: {
    week: string; // Can be "Module 1", "Week 1", or a topic name
    topic: string;
  }[];
  details: {
    [key: string]: string;
  };
};


export const programs: Program[] = [
    {
    slug: "entrepreneurs-launch-pad",
    title: "Entrepreneurs Launch Pad",
    duration: "30 Days",
    fee: "₹3999",
    description: "A 30-day startup training program to take your business idea to a successful launch with practical skills training.",
    longDescription: "The Entrepreneurs Launch Pad is an intensive 30-day program designed to guide aspiring entrepreneurs through every critical stage of starting a business. From understanding the fundamentals to building your brand, mastering marketing, and securing funding, this course provides the roadmap you need to launch with confidence. This is a premier startup training program for career growth.",
    icon: Star,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxlbnRyZXByZW5ldXIlMjBwbGFubmluZ3xlbnwwfHx8fDE3NjYxMzY2MjN8MA&ixlib=rb-4.0.3&q=80&w=1080",
    imageHint: "entrepreneur planning",
    syllabus: [
      { week: "Week 1", topic: "Business Ideation & Market Research" },
      { week: "Week 2", topic: "Business Planning, Legal & Operations" },
      { week: "Week 3", topic: "Branding, Digital Presence & Customer Acquisition" },
      { week: "Week 4", topic: "Financials, Pitching & Go-to-Market Strategy" },
    ],
    details: {
        "Program Type": "Entrepreneurship Training",
        "Focus": "Business Launch & Growth",
        "Format": "Workshops & Mentorship",
        "Certification": "Yes, included",
    }
  },
  {
    slug: "women-skill-development",
    title: "Women Skill Development Program",
    duration: "20 Days",
    fee: "₹2999",
    description: "A foundational women empowerment course to build essential digital and communication skills for career growth.",
    longDescription: "This women skill development program focuses on empowering women with fundamental skills for the modern world. It provides digital skills training to navigate the online landscape and enhances communication abilities for better personal and professional interactions. This online course comes with certification.",
    icon: Hand,
    image: "/program-women-skill.jpg",
    imageHint: "women learning",
    syllabus: [
      { week: "Module 1", topic: "Digital Literacy: Computer basics, internet, and online safety." },
      { week: "Module 2", topic: "Communication & English: Effective speaking, writing, and professional etiquette." },
    ],
    details: {
        "Course Level": "Beginner",
        "Prerequisites": "None",
        "Format": "Online, instructor-led",
        "Certification": "Yes, included",
    }
  },
  {
    slug: "vocational-skills-for-women",
    title: "Vocational Training Courses for Women",
    duration: "1 Week",
    fee: "₹4499",
    description: "Our vocational training programs in India help you master a practical skill and turn your passion into a profession.",
    longDescription: "Our vocational training courses allow women to choose a specific hands-on skill to develop. Each track provides expert training to help you master your craft, whether for personal enrichment or to start your own small business. Please note: You must choose one stream to specialize in. Certification is provided upon completion.",
    icon: Palette,
    image: "/program-vocational.jpg",
    imageHint: "vocational skills",
    syllabus: [
        { week: "Track 1", topic: "Tailoring & Fashion Design" },
        { week: "Track 2", topic: "Beauty & Makeup Artistry" },
        { week: "Track 3", topic: "Cooking & Baking Arts" },
        { week: "Track 4", topic: "Professional Mehendi Design" },
    ],
    details: {
        "Course Level": "Beginner to Intermediate",
        "Prerequisites": "None",
        "Format": "Hands-on, workshop-based",
        "Certification": "Yes, included",
    }
  },
  {
    slug: "leadership-personality-development",
    title: "Leadership & Personality Development",
    duration: "20 Days",
    fee: "₹2999",
    description: "Cultivate a powerful personality and develop essential leadership skills to influence and inspire.",
    longDescription: "This transformative 20-day program focuses on holistic personal growth. You will enhance your personality, build unshakeable confidence, and master the key traits of effective leadership, from decision-making and time management to grooming and negotiation, which are crucial for career growth.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxza2lsbCUyMGRldmVsb3BtZW50fGVufDB8fHx8MTc2NjAzMDM1Nnww&ixlib=rb-4.0.3&q=80&w=1080",
    imageHint: "leadership development",
    syllabus: [
        { week: "Module 1", topic: "Personality Development & Confidence Building" },
        { week: "Module 2", topic: "Professional Grooming & Etiquette" },
        { week: "Module 3", topic: "Negotiation & Decision-Making Skills" },
        { week: "Module 4", topic: "Time Management & Productivity" },
    ],
    details: {
        "Course Level": "All Levels",
        "Focus": "Employability Skills, Career Growth",
        "Format": "Online, interactive sessions",
        "Certification": "Yes, included",
    }
  },
  {
    slug: "data-analytics-course",
    title: "Data Analytics Course",
    duration: "4 Months",
    fee: "₹25000",
    description: "Master data analysis from foundations to advanced techniques including Excel, SQL, Python, and data visualization.",
    longDescription: "This comprehensive Data Analytics program is designed to equip you with the job-ready skills needed to become a successful data analyst. You will journey through data foundations, advanced spreadsheet techniques, database querying with SQL, data manipulation with Python, and storytelling with data visualization tools like Tableau or Power BI. The course is packed with real-world case studies and culminates in a capstone project to build your professional portfolio.",
    icon: BarChart,
    image: "/program-data-analytics.jpg",
    imageHint: "data analysis",
    syllabus: [
      { week: "Module 1", topic: "Introduction to Data Analysis: What is data analysis & why it matters, Types of data, Data analyst roles, Data analysis lifecycle, Real-world use cases." },
      { week: "Module 2", topic: "Data Foundations: Data types, scales of measurement, Data quality issues, Data ethics & privacy basics, Introduction to databases." },
      { week: "Module 3", topic: "Excel / Spreadsheets for Data Analysis: Data cleaning & formatting, Formulas & functions (VLOOKUP/XLOOKUP, IF, etc.), Pivot tables & charts, Basic dashboards." },
      { week: "Module 4", topic: "SQL for Data Analysis: Database concepts, SELECT, WHERE, ORDER BY, Aggregations, Joins, Subqueries, Working with real datasets." },
      { week: "Module 5", topic: "Python for Data Analysis: Python basics, NumPy, Pandas (cleaning, manipulation), Data visualization (Matplotlib, Seaborn)." },
      { week: "Module 6", topic: "Data Cleaning & Wrangling: Handling missing data, Outliers & duplicates, Data transformation, Feature engineering basics." },
      { week: "Module 7", topic: "Exploratory Data Analysis (EDA): Descriptive statistics, Data distributions, Correlation analysis, Pattern & trend discovery, Hypothesis generation." },
      { week: "Module 8", topic: "Data Visualization & Storytelling: Best practices, Choosing the right chart, Dashboard design (Tableau/Power BI), Communicating insights." },
      { week: "Module 9", topic: "Statistics for Data Analysis: Probability basics, Descriptive vs inferential statistics, Sampling, Hypothesis testing, Regression basics." },
      { week: "Module 10", topic: "Business & Decision Analytics: KPIs & metrics, A/B testing, Forecasting basics, Data-driven decision making." },
      { week: "Module 11", topic: "Capstone Project: End-to-end data analysis project from problem definition to presentation." },
    ],
    details: {
        "Program Type": "IT Professional Course",
        "Focus": "Data Analytics & BI",
        "Format": "Online, Project-based",
        "Certification": "Yes, included",
    }
  },
  {
    slug: "data-science-course",
    title: "Data Science Course",
    duration: "6 Months",
    fee: "₹25000",
    description: "A comprehensive program covering everything from programming fundamentals to advanced machine learning and MLOps.",
    longDescription: "This comprehensive Data Science program takes you from the fundamentals of Python and math to advanced topics like deep learning, NLP, and MLOps. You'll gain hands-on experience with the entire data science lifecycle, from data collection and cleaning to model deployment and ethical considerations. The course culminates in a real-world capstone project to solidify your skills and build a professional portfolio.",
    icon: BrainCircuit,
    image: "/program-data-science.jpg",
    imageHint: "data science",
    syllabus: [
        { week: "Module 1", topic: "Introduction to Data Science: Roles, lifecycle, applications, and tools overview." },
        { week: "Module 2", topic: "Programming Foundations: Python basics, Control structures, NumPy, Pandas, and working with files & APIs." },
        { week: "Module 3", topic: "Mathematics for Data Science: Linear algebra, probability, statistics, and calculus basics." },
        { week: "Module 4", topic: "Data Collection & Storage: SQL, NoSQL, APIs, web scraping, and data warehousing." },
        { week: "Module 5", topic: "Data Cleaning & Preparation: Handling missing values, outliers, feature scaling, and data pipelines." },
        { week: "Module 6", topic: "Exploratory Data Analysis (EDA): Statistics, distributions, correlation, and pattern discovery with Matplotlib & Seaborn." },
        { week: "Module 7", topic: "Data Visualization & Storytelling: Dashboards with Tableau/Power BI and presenting insights." },
        { week: "Module 8", topic: "Machine Learning Fundamentals: Supervised vs unsupervised, model training/evaluation, and Scikit-learn workflow." },
        { week: "Module 9", topic: "Supervised Learning: Regression, decision trees, random forest, SVM, KNN, and evaluation metrics." },
        { week: "Module 10", topic: "Unsupervised Learning: Clustering, dimensionality reduction (PCA), and anomaly detection." },
        { week: "Module 11", topic: "Advanced Machine Learning: Ensemble methods, gradient boosting, model tuning, and feature selection." },
        { week: "Module 12", topic: "Deep Learning: Neural networks, TensorFlow/PyTorch, CNNs, RNNs & LSTMs." },
        { week: "Module 13", topic: "Natural Language Processing (NLP): Text preprocessing, embeddings, sentiment analysis, and Transformers." },
        { week: "Module 14", topic: "Time Series Analysis: Forecasting models including ARIMA & Prophet." },
        { week: "Module 15", topic: "Big Data & Cloud: Hadoop, Spark, AWS, Azure, GCP, and MLOps basics." },
        { week: "Module 16", topic: "Model Deployment & MLOps: APIs with Flask/FastAPI, CI/CD, and monitoring." },
        { week: "Module 17", topic: "Ethics, Privacy & Responsible AI: Bias, fairness, transparency, and ethical decision-making." },
        { week: "Module 18", topic: "Capstone Project: End-to-end real-world data science project." },
    ],
    details: {
        "Program Type": "IT Professional Course",
        "Focus": "Data Science & Machine Learning",
        "Format": "Online, Project-based",
        "Certification": "Yes, included",
    }
  },
  {
    slug: "artificial-intelligence-machine-learning",
    title: "Artificial Intelligence & Machine Learning",
    duration: "6 Months",
    fee: "₹40000",
    description: "An in-depth course on AI and Machine Learning, from fundamentals to advanced applications like deep learning and NLP.",
    longDescription: "Dive deep into the world of Artificial Intelligence and Machine Learning. This course covers everything from foundational Python and mathematical concepts to advanced topics like deep learning, natural language processing, computer vision, and reinforcement learning. You'll gain practical, hands-on experience by building, training, and deploying complex models, culminating in a capstone project that prepares you for a career at the forefront of technology.",
    icon: Cpu,
    image: "/program-ai-ml.jpg",
    imageHint: "AI ML",
    syllabus: [
      { week: "Module 1", topic: "Introduction to AI & ML: History, types (Narrow, General, Super), and real-world applications." },
      { week: "Module 2", topic: "Programming Foundations: Python basics, NumPy, SciPy, Pandas, and data visualization." },
      { week: "Module 3", topic: "Mathematics for AI & ML: Linear algebra, probability, statistics, calculus, and information theory." },
      { week: "Module 4", topic: "Data Handling & Preparation: Data collection, cleaning, feature engineering, and train-test split." },
      { week: "Module 5", topic: "Machine Learning Fundamentals: ML workflow, model evaluation, bias-variance tradeoff, and cross-validation." },
      { week: "Module 6", topic: "Supervised Learning Algorithms: Regression, decision trees, Random Forest, SVM, k-NN." },
      { week: "Module 7", topic: "Unsupervised Learning Algorithms: Clustering (K-means, DBSCAN), dimensionality reduction (PCA)." },
      { week: "Module 8", topic: "Ensemble & Advanced ML Techniques: Bagging, boosting, XGBoost, and model tuning." },
      { week: "Module 9", topic: "Deep Learning Fundamentals: ANNs, activation functions, backpropagation, and optimizers." },
      { week: "Module 10", topic: "Deep Learning Architectures: CNNs, RNNs, LSTMs, and Transformers." },
      { week: "Module 11", topic: "Natural Language Processing (NLP): Text preprocessing, language models, embeddings, and chatbots." },
      { week: "Module 12", topic: "Computer Vision: Image processing, classification, object detection with OpenCV." },
      { week: "Module 13", topic: "Reinforcement Learning: MDP, Q-Learning, Deep Q Networks, and applications." },
      { week: "Module 14", topic: "Model Deployment & MLOps: APIs, cloud deployment, monitoring, and CI/CD for ML." },
      { week: "Module 15", topic: "Ethics, Bias & Responsible AI: Fairness, explainable AI (XAI), privacy, and regulations." },
      { week: "Module 16", topic: "Capstone Project: End-to-end AI/ML project from problem definition to deployment." },
    ],
    details: {
        "Program Type": "IT Professional Course",
        "Focus": "AI & Machine Learning",
        "Format": "Online, Project-based",
        "Certification": "Yes, included",
    }
  },
  {
    slug: "cyber-security-course",
    title: "Cyber Security Course",
    duration: "5 Months",
    fee: "₹35000",
    description: "An essential guide to understanding and defending against modern cyber threats, from networking basics to ethical hacking.",
    longDescription: "This Cyber Security course provides a comprehensive foundation for anyone looking to enter this critical field. You will learn networking fundamentals, OS security, threat analysis, cryptography, and ethical hacking principles. The program is packed with hands-on labs to give you practical experience in identifying vulnerabilities and securing systems against attacks.",
    icon: Shield,
    image: "/program-cyber-security.jpg",
    imageHint: "cyber security",
    syllabus: [
        { week: "Module 1", topic: "Introduction to Cyber Security: Importance, threats, CIA Triad, and career roles." },
        { week: "Module 2", topic: "Networking Fundamentals: OSI & TCP/IP models, IP addressing, DNS, DHCP, and common protocols." },
        { week: "Module 3", topic: "Operating System Security: Windows & Linux security, access control, hardening, logs, and monitoring." },
        { week: "Module 4", topic: "Threats, Attacks & Vulnerabilities: Malware, phishing, password attacks, DoS, and insider threats." },
        { week: "Module 5", topic: "Cryptography Basics: Symmetric & asymmetric encryption, hashing, digital signatures, and SSL/TLS." },
        { week: "Module 6", topic: "Network Security: Firewalls, IDS/IPS, VPNs, network monitoring, and wireless security." },
        { week: "Module 7", topic: "Web Application Security: OWASP Top 10, SQL Injection, XSS, CSRF, and secure coding." },
        { week: "Module 8", topic: "Ethical Hacking Basics: Hacking phases, reconnaissance, vulnerability assessment, and intro to Nmap & Metasploit." },
        { week: "Module 9", topic: "Cyber Laws & Compliance: IT Act, data protection, ISO 27001, GDPR, and ethics." },
        { week: "Module 10", topic: "Incident Response & Digital Forensics: Lifecycle, detection, evidence handling, and reporting." },
        { week: "Module 11", topic: "Cloud & Emerging Security Trends: Cloud security, IoT risks, AI in cyber security, and Zero Trust." },
        { week: "Module 12", topic: "Hands-On Labs & Projects: Network scanning, malware analysis, vulnerability testing, and capstone project." },
    ],
    details: {
        "Program Type": "IT Professional Course",
        "Focus": "Cyber Security & Ethical Hacking",
        "Format": "Online, Lab-based",
        "Certification": "Yes, included",
    }
  }
];
