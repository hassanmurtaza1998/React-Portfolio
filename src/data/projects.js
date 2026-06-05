export const projects = [
    {
        id: 1,
        name: "Bud Bazzar",
        url: "https://budbazzar.com/",
        description:
            "A robust, multi-vendor e-commerce platform featuring inventory management, real-time order processing, and secure transaction workflows.",
        type: "Develop Backend Architecture & APIs (From Scratch)",
        tech: ["Node.js", "Express", "MongoDB", "Python", "React", "Tailwind CSS", "OpenAI", "Socket.IO", "AWS"],
        highlights: [
            "Developed backend architecture and APIs from scratch",
            "Integrated payment gateway for online transactions and subscription services",
            "Optimized website performance and SEO rankings using modern web development practices",
        ],
        metrics: {
            performance: "High",
            security: "RBAC",
            scalability: "High",
        },
    },
    {
        id: 2,
        name: "Brixone Spaces",
        url: "https://brixonespaces.com/AboutUs",
        description:
            "A luxury real estate portal featuring advanced multi-attribute property filtering, role-based access control (RBAC), and secure cloud storage.",
        type: "Backend Architect (From Scratch)",
        tech: ["React.js", "Node.js", "Express", "MongoDB", "AWS", "PM2"],
        metrics: { latency: "<150ms", reliability: "99.95%", security: "RBAC" },
        highlights: [
            "Designed scalable RESTful APIs from scratch",
            "Optimized database indexing for complex property filters",
            "Implemented reverse proxies and SSL encryption on AWS EC2",
        ],
    },
    {
        id: 3,
        name: "Moshlay Printing ERP",
        url: "https://erp.moshlayprinting.com/",
        description:
            "A comprehensive, full-stack ERP system designed to streamline internal operations, order management, and production tracking for printing business.",
        type: "Full-Stack Architect",
        tech: ["React.js", "Node.js", "Express", "MongoDB", "AWS"],
        metrics: { workflows: "Automated", accessControl: "Granular RBAC", reporting: "Real-time" },
        highlights: [
            "Architected full-stack ERP system from scratch",
            "Automated complex workflows from intake to final delivery",
            "Configured secure server environments and database backups",
        ],
    },
    {
        id: 4,
        name: "Plainfield Lumber",
        url: "https://plainfieldlumber.com/",
        description:
            "A B2B/B2C building materials e-commerce platform managing thousands of SKUs, complex hierarchies, and automated quote request routing.",
        type: "Lead Backend Engineer",
        tech: ["React.js", "FastAPI", "Python", "MongoDB", "Socket.IO", "AWS"],
        metrics: { items: "1000s+ SKUs", speed: "Optimized", process: "B2B/B2C" },
        highlights: [
            "Engineered comprehensive product catalog from scratch",
            "Developed multi-tier pricing logic workflows for contractors",
            "Optimized server response times for heavy traffic using PM2",
        ],
    },
    {
        id: 5,
        name: "Rankk",
        url: "https://www.rankk.app/",
        description:
            "An AI-powered SEO analytics platform featuring dynamic data visualization dashboards and asynchronous background workers for heavy data processing.",
        type: "Full-Stack Developer (From Scratch)",
        tech: ["React.js", "FastAPI", "Python", "Socket.IO", "AWS", "Nginx", "OpenAI"],
        metrics: { processing: "Asynchronous", dashboards: "Interactive", deployment: "Nginx+PM2" },
        highlights: [
            "Conceptualized and built the entire full-stack architecture",
            "Integrated OpenAI/Anthropic APIs with background workers",
            "Built interactive frontend dashboards for complex SEO metrics",
        ],
    },
    {
        id: 6,
        name: "Winco AI Admin Panel",
        url: "https://winco-ai-admin-panel.netlify.app/",
        description:
            "An enterprise multi-tenant EdTech SaaS administrative portal to centralize business operations and monitor AI system metrics with interactive charts.",
        type: "Enterprise Admin Portal Architect",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Azure OpenAI", "Socket.IO", "Azure"],
        metrics: { rendering: "Optimized", state: "Redux Toolkit", hierarchy: "Multi-Tier" },
        highlights: [
            "Architected high-performance secure administrative dashboard",
            "Integrated advanced data visualization charts for usage logs",
            "Handled deeply nested JSON payloads with optimized state workflows",
        ],
    },
    {
        id: 7,
        name: "BySim",
        url: "https://play.google.com/store/search?q=bysim&c=apps",
        description:
            "An eSIM management platform integrating global eSIM and Maya APIs for package management, QR-code-based activation, and admin tracking.",
        type: "Core Integration Specialist",
        tech: ["React.js", "FastAPI", "Python", "Socket.IO", "AWS", "eSIM APIs"],
        metrics: { provisioning: "Instant QR", tracking: "Admin-side", communication: "Real-time" },
        highlights: [
            "Integrated eSIM and Maya APIs seamlessly",
            "Developed package management and tracking workflows",
            "Implemented real-time features using Socket.IO",
        ],
    },
    {
        id: 8,
        name: "Medaibility",
        url: "https://medaibility.com/login",
        description:
            "A microservices-based medical education platform with modular backend services and scalable inter-service communication.",
        type: "Backend Contributor",
        tech: ["React.js", "Node.js", "Microservices", "AWS"],
        metrics: { architecture: "Microservices", deployment: "Independent", scalability: "High" },
        highlights: [
            "Contributed to microservices backend development",
            "Implemented modular services with inter-service communication",
            "Ensured scalable and independently deployable feature modules",
        ],
    },
    {
        id: 9,
        name: "Patterdale Peds Online",
        url: "https://patterdale-peds-online.netlify.app/onboard",
        description:
            "A digitally integrated dog's breed registry and pediatric management web application with responsive UI and secure booking flows.",
        type: "Frontend & Security Engineer",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Firebase", "JWT"],
        metrics: { speed: "Ultra-fast", loadTime: "Minimal", validation: "Strict" },
        highlights: [
            "Developed interactive scheduling flows and intake forms",
            "Optimized frontend assets for maximum Netlify performance",
            "Integrated secure RESTful APIs with JWT authentication",
        ],
    }
];