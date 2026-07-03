import React from "react";
import {
  SiNodedotjs,
  SiNestjs,
  SiMongodb,
  SiDocker,
  SiJest,
  SiGithub,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiCplusplus,
  SiC,
  SiRabbitmq,
} from "react-icons/si";
import {
  FaCode,
  FaDatabase,
  FaServer,
  FaCogs,
  FaExchangeAlt,
  FaLock,
  FaNetworkWired,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

export const personalDetails = {
  name: "Zeeshan Ahmad",
  title: "Software Engineer",
  subtitle: "Backend Engineer • Full-Stack Developer",
  location: "Jamshedpur, Jharkhand, India",
  email: "zeem1920@gmail.com",
  phone: "+91 79798 25081",
  phoneRaw: "7979825081",
  github: "https://github.com/zeem2626",
  linkedin: "https://www.linkedin.com/in/zeem26/",
  resumeUrl:
    "https://drive.google.com/file/d/1dFCf6GRQBJOjibIJcB9TfsRHoxj3SS-2/view?usp=drive_link",
  description:
    "I specialize in building production-grade backend systems and scalable APIs using NestJS, Node.js, TypeScript, and MongoDB. Driven by a strong ownership mindset, I design and ship event-driven architectures (WebSockets, Pulsar, Redis), secure OAuth2 integrations (Google, YouTube, Meta, Keycloak), and robust payment workflows (Razorpay) from design to production.",
  contactDescription:
    "I am currently open to new opportunities and looking to join a team where I can solve complex architectural challenges, take end-to-end feature ownership, and scale backend infrastructures. Get in touch directly via email, phone, or LinkedIn.",
};

export const metrics = {
  experience: "~ 2 Years",
  apisShipped: "200+",
  latencyDrop: "95%",
  gitCommits: "1200+",
  dsaSolved: "200+",
  awardName: "Employee of Month",
};

export const about = {
  summary:
    "I am a Software Engineer specializing in backend systems, with nearly 2 years of production experience designing and shipping high-performance API infrastructures, real-time architectures, and secure third-party integrations. Proficient in NestJS, Node.js, TypeScript, and MongoDB, I have a track record of driving end-to-end feature ownership—from system design to deployment. I excel at improving application performance (such as reducing latency by 95% via strategic storage offloading) and collaborating across teams to deliver robust products.",
  coreCompetencies: [
    {
      title: "Backend Scalability",
      description:
        "Skilled in structuring microservices, event-driven workflows, and real-time communication systems using NestJS, WebSockets, and Apache Pulsar.",
    },
    {
      title: "API & DB Optimization",
      description:
        "Experienced in MongoDB aggregation pipelines, database design, query optimization, and offloading image storage to S3 to achieve a 95% latency reduction.",
    },
    {
      title: "Security & Integrations",
      description:
        "Secured endpoints using Keycloak client authentication, custom JWT guards, and OAuth2 integrations (Google, YouTube, Meta).",
    },
  ],
  professionalStrengths: [
    {
      title: "End-to-End Ownership",
      description:
        "Independently delivered 40+ production modules and 200+ REST APIs, single-handedly building over 70% of endpoints for a zero-to-one loyalty platform.",
    },
    {
      title: "Analytical Problem Solving",
      description:
        "Leveraged a strong mathematical foundation to optimize complex data structures, query performance, and backend algorithms.",
    },
    {
      title: "Rapid Technical Adaptability",
      description:
        "Mastered and deployed complex integrations (Apache Pulsar, Razorpay, and third-party APIs) within short development cycles under minimal supervision.",
    },
  ],
  backendPractices: [
    {
      title: "Clean Code & Testing",
      description:
        "Enforcing clean interfaces, TypeScript type-safety, modular folder structures, and maintaining 80-85% unit test coverage using Jest.",
    },
    {
      title: "Integration & POCs",
      description:
        "Proactively prototyping solutions for third-party platform limitations, secure OAuth2 token lifecycles, and API rate limits.",
    },
    {
      title: "System Documentation",
      description:
        "Authored detailed microservice specifications, system integration flow diagrams, and OpenAPI/Swagger schemas to accelerate team onboarding.",
    },
  ],
};

export const architectureTabs = [
  {
    id: "realtime",
    label: "Real-Time Messaging",
    colorClass: "bg-indigo-600 text-white shadow-md shadow-indigo-500/20",

    architectureDetails: {
      title: "Real-Time WebSocket & Event-Driven Architecture",
      subtitle:
        "Engineered for instant client-server communication and background task processing.",
      tech: ["NestJS", "WebSockets", "Apache Pulsar", "Redis", "MongoDB"],
      highlights: [
        "Designed and built real-time admin-customer chat using NestJS Gateway and WebSockets, supporting concurrent customer-support agent chats.",
        "Implemented Apache Pulsar as a highly scalable message broker to manage event queues and distribute workloads asynchronously.",
        "Used Redis for event caching and session management, tracking WebSocket connection states across backend nodes.",
        "Optimized event flows with robust error handling and retry queues to prevent message loss during traffic spikes.",
      ],
      flow: [
        {
          step: "1",
          role: "Client App",
          details: "Initiates WebSocket connection / sends live message",
        },
        {
          step: "2",
          role: "NestJS Gateway",
          details: "Authenticates connection & processes payload",
        },
        {
          step: "3",
          role: "Redis Store",
          details: "Tracks active connections & cache chat sessions",
        },
        {
          step: "4",
          role: "Apache Pulsar",
          details:
            "Publishes message events asynchronously to other microservices",
        },
        {
          step: "5",
          role: "Recipient Client",
          details: "Instantly receives the message payload in real-time",
        },
      ],
    },
  },
  {
    id: "auth",
    label: "OAuth2 & Security",
    colorClass: "bg-blue-600 text-white shadow-md shadow-blue-500/20",

    architectureDetails: {
      title: "OAuth2 & Keycloak Enterprise Security Integration",
      subtitle:
        "Architected secure and compliant authorization models across microservices.",
      tech: ["Keycloak", "OAuth2", "JWT", "NestJS Guards", "CORS"],
      highlights: [
        "Secured backend REST APIs for two major platforms by integrating Keycloak Identity Provider (IDP) and implementing role-based access control (RBAC).",
        "Developed multi-platform OAuth2 client consent integrations to securely link Google, YouTube, and Meta business accounts.",
        "Built custom NestJS guards to decode, validate, and authorize JSON Web Tokens (JWT) based on user scopes and privileges.",
        "Designed secure token refreshing mechanisms and managed environment configurations to enforce strict CORS policies across API domains.",
      ],
      flow: [
        {
          step: "1",
          role: "User Request",
          details: "Accesses secure resource or triggers platform sync",
        },
        {
          step: "2",
          role: "Keycloak server",
          details: "Verifies user identity or performs OAuth2 handshake",
        },
        {
          step: "3",
          role: "JWT Access Token",
          details: "Issued to the client containing user scopes & details",
        },
        {
          step: "4",
          role: "NestJS Auth Guards",
          details: "Decodes JWT & verifies roles and permissions",
        },
        {
          step: "5",
          role: "Protected Resource",
          details: "Access granted; executes requested business logic",
        },
      ],
    },
  },
  {
    id: "payments",
    label: "Razorpay & Billing",
    colorClass: "bg-cyan-600 text-white shadow-md shadow-cyan-500/20",

    architectureDetails: {
      title: "Razorpay Workflow & Automated PDF Billing Engine",
      subtitle: "Secured billing systems processing credit and subscriptions.",
      tech: [
        "Razorpay SDK",
        "SendGrid",
        "NestJS",
        "PDFKit / Puppeteer",
        "Webhooks",
      ],
      highlights: [
        "Designed secure, idempotent payment workflows that ingest and verify Razorpay webhook signatures to process billing events.",
        "Implemented background workers to dynamically update customer loyalty tiers and subscription status upon successful payment confirmations.",
        "Engineered an automated PDF billing engine utilizing PDFKit to generate branded invoice documents programmatically in real-time.",
        "Integrated SendGrid to automatically dispatch transaction receipts with the generated PDF invoices attached asynchronously.",
      ],
      flow: [
        {
          step: "1",
          role: "Client Checkout",
          details: "Initiates purchase; opens Razorpay secure overlay",
        },
        {
          step: "2",
          role: "Razorpay Gateway",
          details: "Processes card/UPI transaction; triggers payment webhook",
        },
        {
          step: "3",
          role: "NestJS Webhook Validator",
          details: "Verifies signature integrity to prevent payment spoofing",
        },
        {
          step: "4",
          role: "Billing Engine",
          details: "Generates branded PDF invoices & updates database",
        },
        {
          step: "5",
          role: "SendGrid Service",
          details: "Dispatches confirmation email with PDF invoice attached",
        },
      ],
    },
  },
  {
    id: "optimization",
    label: "Latency Optimization",
    colorClass: "bg-emerald-600 text-white shadow-md shadow-emerald-500/20",

    architectureDetails: {
      title: "95% API Latency Optimization & Cloud Storage Migration",
      subtitle: "Drastically reduced database load and infrastructure costs.",
      tech: [
        "MongoDB",
        "Object Storage (S3)",
        "Data Migration Scripts",
        "NestJS API Core",
      ],
      highlights: [
        "Diagnosed critical database read/write bottlenecks caused by storing high-resolution binary images directly in MongoDB documents.",
        "Wrote and executed a zero-downtime, single-handed migration script to upload legacy binary data from MongoDB to cloud object storage (S3).",
        "Offloaded media blobs to S3 bucket and replaced them in MongoDB with lightweight, indexed URL strings, drastically reducing database footprint.",
        "Reduced average API latency by 95% and achieved significant cloud hosting cost savings through optimized document query sizing.",
      ],
      flow: [
        {
          step: "1",
          role: "Diagnostic Scan",
          details:
            "Identified large database sizes causing high read latencies",
        },
        {
          step: "2",
          role: "Migration Script",
          details:
            "Wrote automated script extracting binary images from MongoDB",
        },
        {
          step: "3",
          role: "Object Storage",
          details:
            "Uploaded binary assets to cloud storage; retrieved secure URLs",
        },
        {
          step: "4",
          role: "DB Document Sync",
          details:
            "Replaced heavy binary data with lightweight image URL strings",
        },
        {
          step: "5",
          role: "Result",
          details:
            "95% API latency reduction & significantly lower hosting costs",
        },
      ],
    },
  },
];

export const skillCategories = [
  {
    title: "Languages",
    color: "border-indigo-500 text-indigo-600 dark:text-indigo-400",
    skills: [
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-5 h-5 text-blue-500" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="w-5 h-5 text-yellow-500" />,
      },
      { name: "C++", icon: <SiCplusplus className="w-5 h-5 text-blue-600" /> },
      { name: "C", icon: <SiC className="w-5 h-5 text-slate-500" /> },
      { name: "HTML", icon: <FaCode className="w-5 h-5 text-orange-500" /> },
      { name: "CSS", icon: <FaCode className="w-5 h-5 text-blue-400" /> },
    ],
  },
  {
    title: "Backend Stack",
    color: "border-blue-500 text-blue-600 dark:text-blue-400",
    skills: [
      { name: "NestJS", icon: <SiNestjs className="w-5 h-5 text-red-500" /> },
      {
        name: "Node.js",
        icon: <SiNodedotjs className="w-5 h-5 text-green-500" />,
      },
      {
        name: "Express.js",
        icon: (
          <SiExpress className="w-5 h-5 text-slate-400 dark:text-slate-200" />
        ),
      },
      {
        name: "REST & Microservices",
        icon: <FaCode className="w-5 h-5 text-indigo-500" />,
      },
    ],
  },
  {
    title: "Databases & Storage",
    color: "border-emerald-500 text-emerald-600 dark:text-emerald-400",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-5 h-5 text-green-600" />,
      },
      {
        name: "MongoDB Aggregation",
        icon: <FaDatabase className="w-5 h-5 text-green-500" />,
      },
      {
        name: "AWS S3 / Object Storage",
        icon: <FaServer className="w-5 h-5 text-sky-500" />,
      },
      {
        name: "Database Design",
        icon: <FaServer className="w-5 h-5 text-amber-500" />,
      },
      {
        name: "Query Optimization",
        icon: <FaCogs className="w-5 h-5 text-cyan-500" />,
      },
      {
        name: "Data Migration",
        icon: <FaExchangeAlt className="w-5 h-5 text-emerald-500" />,
      },
    ],
  },
  {
    title: "Security & Integrations",
    color: "border-cyan-500 text-cyan-600 dark:text-cyan-400",
    skills: [
      {
        name: "OAuth2 & JWT Security",
        icon: <FaLock className="w-5 h-5 text-indigo-500" />,
      },
      {
        name: "Keycloak (IAM)",
        icon: <FaLock className="w-5 h-5 text-cyan-500" />,
      },
      {
        name: "Google, YouTube & Meta APIs",
        icon: <FaNetworkWired className="w-5 h-5 text-orange-500" />,
      },
      {
        name: "Razorpay (Payments)",
        icon: <FaExchangeAlt className="w-5 h-5 text-blue-400" />,
      },
      {
        name: "Firebase (FCM)",
        icon: <FaServer className="w-5 h-5 text-yellow-500" />,
      },
      {
        name: "SendGrid (Emails)",
        icon: <FaEnvelope className="w-5 h-5 text-cyan-400" />,
      },
    ],
  },
  {
    title: "DevOps & Messaging",
    color: "border-purple-500 text-purple-600 dark:text-purple-400",
    skills: [
      {
        name: "Apache Pulsar",
        icon: <FaNetworkWired className="w-5 h-5 text-teal-500" />,
      },
      { name: "Redis", icon: <FaDatabase className="w-5 h-5 text-red-600" /> },
      {
        name: "RabbitMQ (Basics)",
        icon: <SiRabbitmq className="w-5 h-5 text-orange-600" />,
      },
      {
        name: "Jest (Unit Testing)",
        icon: <SiJest className="w-5 h-5 text-red-600" />,
      },
      {
        name: "Nx Monorepo",
        icon: <FaCogs className="w-5 h-5 text-indigo-400" />,
      },
      {
        name: "Docker (Basics)",
        icon: <SiDocker className="w-5 h-5 text-sky-500" />,
      },
      {
        name: "Git & Version Control",
        icon: (
          <SiGithub className="w-5 h-5 text-slate-800 dark:text-slate-100" />
        ),
      },
      { name: "Postman", icon: <FaCode className="w-5 h-5 text-orange-500" /> },
      {
        name: "Agile & Refactoring",
        icon: <FaCheckCircle className="w-5 h-5 text-green-500" />,
      },
    ],
  },
  {
    title: "Frontend Stack",
    color: "border-pink-500 text-pink-600 dark:text-pink-400",
    skills: [
      { name: "React.js", icon: <SiReact className="w-5 h-5 text-blue-400" /> },
      { name: "Redux", icon: <SiRedux className="w-5 h-5 text-purple-500" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="w-5 h-5 text-cyan-400" />,
      },
    ],
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company: "Kanlas Technologies",
    location: "Remote / WFH",
    period: "Dec 03, 2024 – Mar 03, 2026",
    color: "bg-blue-600 text-blue-600 dark:text-blue-400 bg-blue-500/10",
    description:
      "Led backend engineering for a social media management SaaS (Google, YouTube, and Meta integrations). Engineered microservices facilitating posting schedules, advertising campaigns, multi-account syncing, and dashboard analytics.",
    impactTitle: "Core Production Impact",
    impactDescription:
      "95% API Latency Reduction: Migrated binary image uploads from MongoDB to AWS S3, reducing database document payload sizes, cutting query overheads, and lowering hosting costs.",
    bulletPoints: [
      "Core SaaS Microservices: Owned backend development, designing and shipping 50+ REST APIs and microservices for scheduling, pricing, subscriptions, and referral workflows.",
      "Enterprise Integrations: Engineered secure OAuth2 integrations to sync locations, posts, reviews, and ad campaigns across Google, YouTube, and Meta APIs, handling token rotation and API rate limits.",
      "Resilient Event Workflows: Architected cron-based background schedulers with automated retry policies to handle third-party publishing failures, maintaining system consistency.",
      "Latency & Cost Reduction: Migrated binary media storage from MongoDB to AWS S3, reducing database payload sizes, cutting average API latency by 95%, and lowering infrastructure costs.",
      "Secure Billing Systems: Implemented Razorpay webhook handlers to automate user subscription lifecycle events and designed a PDFKit generator to compile branded PDF invoices programmatically.",
      "Code Quality & Testing: Enforced modular architectures in an Nx Monorepo using NestJS, maintaining 80-85% unit test coverage with Jest to eliminate regressions.",
      "Technical Documentation: Authored API and architecture documentation for 2+ microservices to accelerate cross-team developer onboarding.",
    ],
    techStack: [
      "NestJS",
      "Node.js",
      "MongoDB",
      "Apache Pulsar",
      "OAuth2",
      "Keycloak",
      "Razorpay",
      "SendGrid",
      "Jest",
      "Nx Monorepo",
      "TypeScript",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Kanlas Technologies",
    location: "Remote / WFH",
    period: "Jun 03, 2024 – Dec 03, 2024",
    color:
      "bg-slate-300 dark:bg-slate-700 text-slate-600 dark:text-slate-400 bg-slate-500/10",
    description:
      "Collaborated as a core backend builder for a zero-to-one customer loyalty and engagement platform from scratch. Took ownership of architectural decisions, designed schemas, and built proofs-of-concept (POCs) for complex microservice integrations, real-time messaging, and auth systems.",
    impactTitle: "Core Production Impact",
    impactDescription:
      "70%+ API Delivery Ownership: Single-handedly developed over 70% of the API endpoints and built 20+ core features spanning products catalog, customer tiers, checkout validation, return orders, and analytics.",
    bulletPoints: [
      "API Infrastructure Ownership: Single-handedly developed over 70% of the REST APIs and 20+ core platform features, including loyalty tiers, bulk uploads, and checkout logic.",
      "Real-Time Architectures: Designed a real-time customer-support chat system using WebSockets, integrating Redis for connection caching and Apache Pulsar for event queuing.",
      "Identity & Access (IAM): Integrated Keycloak for enterprise identity management, setting up Role-Based Access Control (RBAC) and social OAuth2 sign-in flows.",
      "Event-Driven Alerts: Integrated Firebase Cloud Messaging (FCM) and SendGrid API to automate real-time push notifications and transactional order confirmations.",
      "Database & Aggregations: Designed MongoDB schemas, wrote optimized aggregation queries for analytics dashboards, and authored automated database migration scripts.",
    ],
    techStack: [
      "NestJS",
      "Node.js",
      "Express.js",
      "WebSockets",
      "Keycloak",
      "MongoDB",
      "Redis",
      "Apache Pulsar",
      "Firebase (FCM)",
      "SendGrid",
      "Jest",
    ],
  },
];

export const projects = [
  {
    title: "Reppoo (Social Media Management)",
    category: "SaaS Enterprise",
    role: "Full-time Role",
    roleBadgeColor:
      "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300",
    description:
      "Lead Backend Developer for a social media management SaaS. Designed and shipped 50+ REST APIs and microservices, integrated Google/YouTube/Meta OAuth2 pipelines, configured Razorpay checkout, and engineered an automated PDF billing system. Migrated binary image assets to S3, reducing API latency by 95%.",
    repoStatus: "Private Repository",
    techText: "NestJS • AWS S3 • Microservices",
  },
  {
    title: "Loya (Customer Loyalty & Engagement Platform)",
    category: "SaaS Enterprise",
    role: "Internship Role",
    roleBadgeColor:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
    description:
      "Core Backend Developer on an enterprise customer loyalty SaaS. Architected and shipped 70%+ of all API endpoints from scratch. Designed a real-time support chat system using WebSockets, cached session states using Redis, and integrated Apache Pulsar for inter-service messaging.",
    repoStatus: "Private Repository",
    techText: "NestJS • Pulsar • Redis",
  },
  {
    title: "Full-Stack YouTube Clone",
    category: "Personal Project",
    role: "Jan - Feb 2024",
    roleBadgeColor:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300",
    description:
      "Developed 30+ REST APIs using Express.js and MongoDB. Configured MongoDB aggregation pipelines for user feeds, integrated Firebase Storage for video uploads, implemented JWT session authentication, and built Google OAuth2 workflows.",
    repoStatus: "View Repository",
    repoLink: "https://github.com/zeem2626",
    techText: "Node.js • Express • MongoDB",
  },
];

export const education = [
  {
    title: "MCA (Information Technology)",
    school: "Netaji Subhas University, Jamshedpur",
    timeline: "2022 – 2024",
    score: "73.2%",
    color: "text-indigo-600 dark:text-indigo-400",
    details:
      "Focus on software engineering principles, database management systems (DBMS), data structures and algorithms, network architecture, and object-oriented programming.",
  },
  {
    title: "B.Sc in Mathematics",
    school: "Kolhan University",
    timeline: "2019 – 2022",
    score: "69%",
    color: "text-blue-600 dark:text-blue-400",
    details:
      "Rigorous training in discrete mathematics, logic, linear algebra, and graph theory, fostering analytical thinking and structured algorithm optimization.",
  },
  {
    title: "Intermediate (Science)",
    school: "Karim City College, Jamshedpur • JAC Board",
    timeline: "2017 – 2019",
    score: "71%",
  },
  {
    title: "Matriculation",
    school: "Vikas Vidyalaya, Jamshedpur • CBSE Board",
    timeline: "2015 – 2017",
    score: "70%",
  },
];

export const achievements = [
  {
    title: "Employee of the Month (2025)",
    subtitle: "Kanlas Technologies",
    iconColor: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    description:
      "Awarded for outstanding ownership in zero-to-one delivery, troubleshooting multi-platform OAuth2 integration blockers, and maintaining high release stability.",
  },
  {
    title: "200+ DSA Problems Solved",
    subtitle: "LeetCode & GeeksforGeeks",
    iconColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    description:
      "Demonstrated analytical problem-solving skills with practical mastery of data structures, search/sort algorithms, dynamic programming, and graph algorithms (BFS, DFS, Dijkstra).",
  },
  {
    title: "1200+ Production Commits",
    subtitle: "Git & Pull Requests (Kanlas SaaS)",
    iconColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    description:
      "Maintained high code quality and Git hygiene across backend repositories, conducting code reviews, structuring merge requests, and managing release deployments.",
  },
  {
    title: "~85% Test Suite Coverage",
    subtitle: "Unit Testing (Jest)",
    iconColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    description:
      "Authored rigorous Jest unit and integration tests for NestJS microservices, achieving ~85% code coverage to prevent regression issues in production releases.",
  },
];
