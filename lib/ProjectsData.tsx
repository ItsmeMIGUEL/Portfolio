import { Server, Zap, Cpu, Layers, Globe } from "lucide-react";
import type { ReactNode } from "react";

type Project = {
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  icon: ReactNode;
  iconName: string;
  features?: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const ProjectsData: Project[] = [
  {
    title: "E-Commerce Microservices",
    description:
      "A scalable e-commerce platform built with microservices architecture using Node.js, Express, and MongoDB. Implemented JWT authentication, payment processing, and real-time inventory management.",
    longDescription:
      "This e-commerce platform leverages a microservices architecture to provide a highly scalable and maintainable solution. Each service is independently deployable and handles a specific business domain, such as user authentication, product catalog, order processing, and payment handling.",
    tags: ["Node.js", "Express", "MongoDB", "Docker", "Microservices"],
    icon: <Server className="w-6 h-6 text-white" />,
    iconName: "Server",
    features: [
      "Distributed transaction management across services",
      "Real-time inventory updates with WebSockets",
      "Secure payment processing with Stripe integration",
      "Comprehensive admin dashboard for inventory management",
      "Containerized deployment with Docker and Kubernetes",
    ],
    liveUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/username/ecommerce-microservices",
  },
  {
    title: "Real-time Analytics Dashboard",
    description:
      "Interactive dashboard for visualizing real-time data streams using React, D3.js, and WebSockets. Features customizable widgets, data filtering, and exportable reports.",
    longDescription:
      "This analytics dashboard provides real-time insights into business metrics and user behavior. It processes data streams and visualizes them through interactive charts and graphs, allowing users to make data-driven decisions quickly.",
    tags: ["React", "TypeScript", "D3.js", "WebSockets", "Redux"],
    icon: <Zap className="w-6 h-6 text-white" />,
    iconName: "Zap",
    features: [
      "Real-time data visualization with D3.js",
      "Customizable dashboard with drag-and-drop widgets",
      "Data filtering and advanced search capabilities",
      "Exportable reports in multiple formats (PDF, CSV, Excel)",
      "User-specific dashboard configurations and preferences",
    ],
    liveUrl: "https://analytics-demo.example.com",
    githubUrl: "https://github.com/username/analytics-dashboard",
  },
  {
    title: "AI-Powered Code Assistant",
    description:
      "Developed an AI-powered code assistant that provides intelligent code suggestions and autocompletions using machine learning models and static code analysis.",
    longDescription:
      "This AI-powered code assistant helps developers write better code faster by providing intelligent suggestions based on context. It combines machine learning with static code analysis to understand code patterns and offer relevant completions.",
    tags: ["Python", "TensorFlow", "NLP", "REST API", "VS Code Extension"],
    icon: <Cpu className="w-6 h-6 text-white" />,
    iconName: "Cpu",
    features: [
      "Context-aware code suggestions and completions",
      "Integration with popular IDEs through extensions",
      "Support for multiple programming languages",
      "Continuous learning from user feedback",
      "Privacy-focused design with local processing options",
    ],
    liveUrl: "https://code-assistant.example.com",
    githubUrl: "https://github.com/username/ai-code-assistant",
  },
  {
    title: "Blockchain Voting System",
    description:
      "Secure and transparent voting system built on blockchain technology. Implemented smart contracts for vote verification and result tabulation.",
    longDescription:
      "This blockchain-based voting system ensures transparency, security, and immutability in the electoral process. It uses smart contracts to automate vote counting and verification, eliminating the possibility of fraud or manipulation.",
    tags: ["Solidity", "Ethereum", "Web3.js", "React", "Node.js"],
    icon: <Layers className="w-6 h-6 text-white" />,
    iconName: "Layers",
    features: [
      "Immutable vote recording on Ethereum blockchain",
      "Transparent and verifiable election results",
      "Secure voter authentication with cryptographic proofs",
      "Real-time vote counting and result visualization",
      "Decentralized architecture resistant to tampering",
    ],
    liveUrl: "https://blockchain-voting.example.com",
    githubUrl: "https://github.com/username/blockchain-voting",
  },
  {
    title: "DevOps Automation Platform",
    description:
      "Comprehensive platform for automating CI/CD pipelines, infrastructure provisioning, and deployment processes across multiple cloud providers.",
    longDescription:
      "This DevOps automation platform streamlines the software delivery process by automating CI/CD pipelines, infrastructure provisioning, and deployment. It supports multiple cloud providers and offers a unified interface for managing the entire DevOps lifecycle.",
    tags: ["Go", "Kubernetes", "Terraform", "AWS", "GitHub Actions"],
    icon: <Globe className="w-6 h-6 text-white" />,
    iconName: "Globe",
    features: [
      "Multi-cloud infrastructure provisioning with Terraform",
      "Automated CI/CD pipeline configuration and execution",
      "Container orchestration with Kubernetes",
      "Infrastructure as Code (IaC) version control",
      "Comprehensive monitoring and alerting system",
    ],
    liveUrl: "https://devops-platform.example.com",
    githubUrl: "https://github.com/username/devops-automation",
  },
  {
    title: "Mobile Fitness Tracker",
    description:
      "Cross-platform mobile application for tracking fitness activities, nutrition, and health metrics with offline capabilities and data synchronization.",
    longDescription:
      "This mobile fitness tracker helps users monitor their health and fitness goals through comprehensive activity tracking, nutrition logging, and health metrics analysis. It works offline and synchronizes data when connectivity is restored.",
    tags: ["React Native", "Firebase", "Redux", "GraphQL", "TypeScript"],
    icon: <Zap className="w-6 h-6 text-white" />,
    iconName: "Zap",
    features: [
      "GPS tracking for outdoor activities",
      "Personalized workout and nutrition plans",
      "Health metrics visualization and trend analysis",
      "Social features for sharing achievements and challenges",
      "Integration with wearable devices and health platforms",
    ],
    liveUrl: "https://fitness-app.example.com",
    githubUrl: "https://github.com/username/fitness-tracker",
  },
];

export default ProjectsData;