export type BadgeColor = "blue" | "green" | "amber" | "purple";

export interface ProjectStat {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  badge: string;
  badgeColor: BadgeColor;
  title: string;
  summary: string;
  stack: string[];
  impact: string;
  stats: ProjectStat[];
  points: string[];
  company: string;
}

export const projects: Project[] = [
  {
    id: "ams-concierge",
    badge: "AI / GenAI",
    badgeColor: "blue",
    title: "AMS Concierge — AI-Powered Support Assistant",
    summary:
      "Multi-agent AI platform for Altea backend operations at Singapore Airlines. Handles PNR retrieval, e-ticket processing and incident resolution with hierarchical agent delegation.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript 5",
      "Tailwind CSS 4",
      "Azure AD (OAuth2/OIDC)",
      "AWS DynamoDB",
      "AWS Secrets Manager",
      "Claude SDK",
      "Jenkins CI/CD",
      "Jest",
      "SonarQube",
    ],
    impact: "40–60% less engineering effort · 2–3× faster capability scaling",
    stats: [
      { value: "40–60%", label: "Engineering effort reduced" },
      { value: "2–3×", label: "Faster capability scaling" },
    ],
    points: [
      "Architected multi-agent orchestration with hierarchical delegation for PNR retrieval, e-ticket processing and incident resolution",
      "Designed production-grade prompt frameworks with prompt injection resistance, social engineering detection and system authority enforcement",
      "Built full-stack app with Next.js 16, React 19, TypeScript 5, Tailwind CSS 4 and Microsoft Entra ID (Azure AD) OAuth2/OIDC authentication",
      "Implemented On-Behalf-Of (OBO) token flows for secure API access to ASL booking systems",
      "Integrated AWS DynamoDB for session and settings persistence, AWS Secrets Manager for credential management",
      "Achieved comprehensive Jest test coverage with React Testing Library and SonarQube quality gates via Jenkins CI/CD",
    ],
    company: "Singapore Airlines · Lead Engineer · July 2022–Present",
  },
  {
    id: "devops-agent",
    badge: "AI / DevOps",
    badgeColor: "blue",
    title: "AI DevOps Automation Agent",
    summary:
      "Claude SDK + GitHub Copilot Agent Mode pipeline for automated end-to-end OSS vulnerability remediation across 90+ microservices running in OpenShift clusters.",
    stack: [
      "Claude SDK",
      "GitHub Copilot Agent Mode",
      "OpenShift",
      "Jenkins CI/CD",
      "JIRA MCP Server",
      "Git",
      "Bitbucket",
    ],
    impact: "80% reduction in manual remediation effort",
    stats: [
      { value: "80%", label: "Manual effort reduced" },
      { value: "90+", label: "Microservices covered" },
      { value: "50+", label: "NL command patterns" },
    ],
    points: [
      "Designed and built an AI agent using Claude SDK and GitHub Copilot Agent Mode for automated OSS vulnerability remediation",
      "Automated the full remediation pipeline: vulnerability analysis → Git branch management → Jenkins CI/CD monitoring → JIRA deployment ticketing",
      "Architected 50+ natural language command patterns for robust, prompt-engineered agent specifications",
      "Integrated MCP (Model Context Protocol) server for seamless JIRA/Atlassian workflow automation",
      "Demonstrated advanced GenAI tool orchestration and LLM agent design at enterprise scale",
    ],
    company: "Singapore Airlines · Lead Engineer · 2023–Present",
  },
  {
    id: "kiosk",
    badge: "Full Stack",
    badgeColor: "amber",
    title: "Self-Service Check-in Kiosk & OSKAR",
    summary:
      "Airport kiosk system for Singapore Airlines (SQ) and Scoot. Passengers self-check-in, print boarding passes and bag tags — eliminating long counter queues.",
    stack: [
      "Spring Boot 2.0",
      "React JS",
      "Next JS",
      "TypeScript",
      "Node.js",
      "CUSS 1.2",
      "AWS Lambda",
      "AWS RDS",
      "AWS SNS",
      "AWS SQS",
      "AWS EC2",
      "Affinidi SDK",
      "SGHealth SDK",
    ],
    impact: "60% reduction in airport check-in counter load",
    stats: [{ value: "60%", label: "Counter load reduced" }],
    points: [
      "Designed and developed the full kiosk application for SQ and Scoot airlines including passport scanning, boarding pass and bag tag printing",
      "Built OSKAR — companion app for airport agents to remotely manage kiosk operations",
      "Developed CUSS 1.2 applet components to interface with kiosk hardware: passport scanner, barcode reader, boarding pass and bag tag printers",
      "Integrated health document verification for vaccine certificates and COVID-19 pre-departure tests using Affinidi and SGHealth SDK",
      "Implemented Timatic checks for passenger travel entry requirements via dedicated AWS Lambda microservices",
      "Deployed and supported periodic cutover of application across SQ global network stations",
    ],
    company: "Singapore Airlines · Full Stack Lead · Jan 2020–Present",
  },
  {
    id: "pods",
    badge: "Cloud / Infra",
    badgeColor: "green",
    title: "PODS Re-platform — Microservices Migration",
    summary:
      "Architectural lead for migrating the Passenger Operation Data Distribution System (PODS) from Tibco Business Workflow to modern Java microservices orchestrated on OpenShift.",
    stack: [
      "Java 17",
      "Spring Boot 3.0",
      "OpenShift",
      "Kubernetes",
      "Microservices",
      "Tibco Business Workflow",
    ],
    impact: "Modernising mission-critical airline operational data pipeline",
    stats: [],
    points: [
      "Leading migration strategy for PODS — a mission-critical system distributing passenger operational data across SQ's network",
      "Designing the target architecture and framework for multiple data loaders in the new OpenShift-orchestrated environment",
      "Transitioning from Tibco Business Workflow to scalable, independently deployable Java microservices",
      "Coordinating with cross-functional airline operations teams to validate data integrity throughout the migration",
    ],
    company: "Singapore Airlines · Lead Architect · July 2022–Present",
  },
  {
    id: "pngo",
    badge: "Cloud / Infra",
    badgeColor: "green",
    title: "Print-n-Go (PNGO)",
    summary:
      "Scalable Chrome-based print application built on microservices architecture. Containerised with Docker and orchestrated on AWS EKS for high availability across global SQ stations.",
    stack: [
      "Node.js",
      "Docker",
      "AWS EKS",
      "Kubernetes",
      "Microservices",
      "Chrome App",
    ],
    impact: "High availability print service deployed across SQ global network",
    stats: [],
    points: [
      "Designed and developed PNGO — a scalable Chrome-based application enabling streamlined boarding pass and document printing",
      "Built on microservices architecture for independent scaling and fault isolation",
      "Containerised with Docker and orchestrated via AWS EKS for efficient resource utilisation and high availability",
      "Deployed and managed periodic cutovers across SQ network stations worldwide",
    ],
    company: "Singapore Airlines · Full Stack Engineer · Jan 2020–Jun 2022",
  },
  {
    id: "xbags",
    badge: "Integration",
    badgeColor: "purple",
    title: "XBags & Enterprise Integration (Boomi)",
    summary:
      "Real-time baggage allowance integration for Scoot bookings built on the Boomi Integration Platform — Kafka connectors, HTTP adapters and CSV/XML/JSON transformation pipelines.",
    stack: [
      "Boomi Integration Platform",
      "Apache Camel",
      "Kafka Connector",
      "HTTP Connector",
      "REST APIs",
      "XML",
      "JSON",
      "CSV",
    ],
    impact: "Real-time baggage sync across airline booking systems",
    stats: [],
    points: [
      "Developed XBags integration flow on Boomi Platform to sync baggage allowance updates to Scoot bookings in real time",
      "Configured Boomi HTTP and Kafka connectors with end-to-end data transformation: CSV → XML → JSON",
      "Built flow controls and mapping configurations for reliable message routing across booking systems",
      "Applied Apache Camel enterprise integration patterns for inter-system communication",
    ],
    company: "Singapore Airlines · Integration Engineer · 2022",
  },
];
