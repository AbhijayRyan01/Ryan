// index.js
export const servicesData = [
  {
    title: "FullStack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I develop custom web apps with clean architecture, optimized databases, and seamless integrations—ensuring reliability at every layer.",
    items: [
      {
        title: "Backend Engineering",
        description: "(REST/GraphQL APIs, Microservices, Auth Systems)",
      },
      {
        title: "Frontend Excellence",
        description: "(React, Vue, TypeScript, Interactive UI/UX)",
      },
      {
        title: "Database Design",
        description: "(SQL/NoSQL Optimization, Scalable Structures)",
      },
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I automate infrastructure, enforce security, and leverage cloud platforms (AWS/Azure) to keep your app running smoothly—24/7, at any scale.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server Management ",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance Tuning",
        description: "(Caching, Compression, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
     title: "Learning Systems & Intelligence",
  description:
    "I craft apps that don’t just run — they learn. By combining Machine Learning and Deep Learning, I turn data into decisions and automation into innovation.",
    items: [
    {
      title: "Predictive Modeling",
      description: "(Data-driven Insights & Forecasting)",
    },
    {
      title: "Neural Network Design",
      description: "(Model Architecture & Training)",
    },
    {
      title: "Real-time AI Integration",
      description: "(Smart Automation & Scalable Deployment)",
    },
  ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I craft responsive, pixel perfect web and mobile apps ( Microsoft Power Apps ) that users love—bridging design and functionality seamlessly.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Single codebase for iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline mode, Push Notifications)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout flows, Payment Gateways, Inventory APIs)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Crop.AI",
    description:
      "A multi-page ML-integrated React app built for real-time crop yield prediction and soil analysis.",
    href: "https://crop-ai-two.vercel.app/",
    image: "/assets/projects/Crop.AI.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Restful APIs" },
      { id: 3, name: "NodeJS" },
      { id: 4, name: "Machine Learning" },
      { id: 5, name: "TailwindCSS" },
    ],
  },
  {
    id: 2,
    name: "NeuraNet",
    description:
      "A multi-page ML-integrated React app built for real-time inference using AWS services.",
    href: "https://aws-project-5.vercel.app/",
    image: "/assets/projects/AWS.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "JavaScript" },
      { id: 3, name: "TailwindCSS" },
      { id: 4, name: "AWS Lambda" },
      { id: 5, name: "SageMaker" },
    ],
  },
  {
    id: 3,
    name: "k72-xi",
    description:
      "A dynamic and interactive React web project using GSAP animations, designed for engaging user experiences.",
    href: "https://k72-78qz.onrender.com/",
    image: "/assets/projects/ryk72-xi.png", // replace with actual screenshot
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React.js" },
      { id: 2, name: "GSAP" },
      { id: 3, name: "TailwindCSS" },
      { id: 4, name: "JavaScript" },
    ],
  },
  {
    id: 4,
    name: "KinectPosture",
    description:
      "A posture classification system using deep learning and real-world pose estimation data.",
    href: "https://github.com/AbhijayRyan01/AI_Posture_Project",
    image: "/assets/projects/Posture.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "TensorFlow" },
      { id: 2, name: "MediaPipe" },
      { id: 3, name: "Python" },
      { id: 4, name: "Neural Networks" },
    ],
  },
  {
    id: 5,
    name: "GreenSphere",
    description:
      "A multi-page ML-integrated React app built for real-time inference using AWS services.",
    href: "https://greensph.vercel.app/",
    image: "/assets/projects/GreenSphere.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Typescript" },
      { id: 3, name: "TailwindCSS" },
    ],
  },
  {
    id: 6,
    name: "Profitability App – TuTeck Technologies",
    description:
      "A financial analysis app to track profitability metrics at employee, project, and company levels.",
    href: "https://vestiti.vercel.app/",
    image: "/assets/projects/Profit.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "REST API" },
      { id: 2, name: "Zoho" },
      { id: 3, name: "Razorpay" },
      { id: 4, name: "PowerApps" },
    ],
  },
  {
    id: 7,
    name: "Vestiti",
    description:
      "A web-based visualization app leveraging OpenGL Shading Language (GLSL) for real-time interactive graphics.",
    href: "https://vestiti.vercel.app/",
    image: "/assets/projects/Vestiti.png",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "GLSL" },
      { id: 2, name: "JavaScript" },
      { id: 3, name: "TailwindCSS" },
      { id: 4, name: "WebGL" },
    ],
  },
];
export const experiences = [
  {
    title: "Research Intern",
    job: "Vellore Institute Of Technology, Chennai",
    date: "June 2025 - Present",
    contents: [
      "Developed a deep learning–based system using MediaPipe for pose landmark extraction and Neural Networks for classification of good vs. bad sitting posture.",
      "Implemented data preprocessing, augmentation, and model fine-tuning to achieve high performance with 99.4% accuracy on validation data.",
      "Currently working on IoT integration to enable real-time posture monitoring and feedback.",
    ],
  },
  {
    title: "Software Development Intern",
    job: "TuTeck Technologies, Kolkata",
    date: "May 2025 - June 2025",
    contents: [
      "Developed a Profitability App for calculating employee, project, and company-level profitability.",
      "Integrated Zoho and Razorpay APIs to automate financial data entry, reducing processing time by 60%.",
      "Deployed real-time tracking for over 120 employees and 20+ projects across departments.",
    ],
  },
  {
    title: "Machine Learning Developer",
    job: "Qiskit FallFest (Finalist)",
    date: "Nov 2024",
    contents: [
      "Designed and implemented a quantum fraud detection model using Qiskit and classical ML techniques.",
      "Built an interactive prototype for identifying anomalous transactions using hybrid quantum-classical logic.",
      "Collaborated with a multi-disciplinary team and presented the solution at IBM’s Qiskit FallFest Hackathon.",
    ],
  },
  {
    title: "Full Stack & ML Developer",
    job: "Freelance / Personal Projects",
    date: "2023 - Present",
    contents: [
      "Created GreenSphere, a React-based sustainability platform used by 500+ users for carbon tracking.",
      "Built NeuraNet, an ML-integrated web app with AWS SageMaker, Lambda, and API Gateway.",
      "Developed KinectPosture, a DL-based posture detector using MediaPipe and TensorFlow, achieving ~99.4% accuracy.",
      "Continuously learning and applying modern technologies like React, Node.js, AWS, and TensorFlow.",
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/abhijay_ryan" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/abhijay-dhar-a6b798241" },
  { name: "GitHub", href: "https://github.com/AbhijayRyan01" },
];

export const coding = [
  { name: "Leetcode", href: "https://leetcode.com/u/Abhijay_Ryan/" },
  { name: "GeeksforGeeks", href: "https://www.geeksforgeeks.org/user/abhijaydhar01/" },
]