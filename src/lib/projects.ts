export interface Project {
    id: string
    title: string
    slug: string
    category: string
    desc: string // Short description for the card
    overview: string // Detailed overview for the page
    problem: string
    solution: string
    features: string[]
    techStack: string[]
    link: string // GitHub link
    demoLink?: string // Live demo link
    color: string
    image?: string
}

export const projects: Project[] = [
    {
        id: "1",
        title: "AI Video Analyzer Agent",
        slug: "ai-video-analyzer-agent",
        category: "Generative AI",
        desc: "An intelligent agent that analyzes video content using Google Gemini and DuckDuckGo.",
        overview: "The AI Video Analyzer Agent is a cutting-edge tool designed to process and understand video content automatically. By leveraging the multimodal capabilities of Google Gemini 1.5 Pro and the search power of DuckDuckGo, this agent can extract insights, summarize events, and answer complex queries about video footage in real-time.",
        problem: "Manually reviewing and analyzing hours of video footage is time-consuming and prone to human error. Businesses and content creators often struggle to extract actionable intelligence from their video archives efficiently.",
        solution: "We developed an autonomous agentic workflow using the Phi framework. The agent accepts video files, processes them frame-by-frame using Gemini's vision capabilities, and correlates findings with web information via DuckDuckGo to provide context-aware insights.",
        features: [
            "Start/Stop processing control",
            "Real-time video summarization",
            "Q&A interface for video content",
            "Web-enhanced context retrieval",
            "Detailed analysis reports"
        ],
        techStack: ["Python", "Phi Framework", "Google Gemini 1.5 Pro", "DuckDuckGo API", "Streamlit", "OpenAI"],
        link: "https://github.com/venkatsai2004/Google-DuckDuckGo-Video-Agent",
        color: "from-emerald-500 to-teal-600",
        image: "/project-dashboard.png"
    },
    {
        id: "2",
        title: "Advanced Quantitative Analysis of Equity Price Dynamics",
        slug: "equity-price-dynamics-analysis",
        category: "Machine Learning",
        desc: "A comprehensive study of stock market behaviors using time-series analysis and ML models.",
        overview: "This project dives deep into the mathematical models governing stock price movements. It employs advanced statistical methods and machine learning algorithms to predict future price trends and volatility, providing a robust framework for algorithmic trading strategies.",
        problem: "Financial markets are notoriously volatile and non-linear, making traditional prediction models insufficient. Investors need more sophisticated tools to understand underlying patterns and manage risk effectively.",
        solution: "We implemented a hybrid approach combining classical time-series models (ARIMA, GARCH) with modern deep learning architectures (LSTM, GRU). The system processes historical minute-level data to forecast short-term price movements with improved accuracy.",
        features: [
            "Time-series forecasting with ARIMA & LSTM",
            "Volatility modeling using GARCH",
            "Sentiment analysis integration",
            "Backtesting engine for strategy validation",
            "Interactive data visualization dashboards"
        ],
        techStack: ["Python", "Pandas", "Scikit-learn", "TensorFlow/Keras", "Matplotlib", "Jupyter Notebooks"],
        link: "https://github.com/venkatsai2004/Advanced-Time-Series-Analysis-Machine-Learning-Models",
        color: "from-blue-600 to-cyan-500",
        image: "/time-series-banner.png"
    },
    {
        id: "3",
        title: "Enterprise Data Analytics Platform",
        slug: "enterprise-data-analytics-platform",
        category: "Data Science",
        desc: "Transforming Business Data into Strategic Decisions.",
        overview: "Insight AI is an enterprise-grade platform that aggregates data from multiple business verticals to generate strategic insights. It helps organizations unify their data silos and apply predictive analytics to drive growth.",
        problem: "Large enterprises suffer from data fragmentation, where valuable information is trapped in isolated systems. This leads to poor decision-making and missed opportunities for optimization.",
        solution: "The platform provides a unified data lake architecture coupled with a modular analytics engine. It supports automated ETL pipelines, customizable KPI dashboards, and AI-driven recommendations for business stakeholders.",
        features: [
            "Unified Data Ingestion Pipelines",
            "Predictive Sales Analytics",
            "Customer Churn Prediction",
            "Interactive Executive Dashboards",
            "Role-based Access Control"
        ],
        techStack: ["Python", "SQL", "Tableau", "Power BI", "AWS S3", "Scikit-learn"],
        link: "https://github.com/venkatsai2004/Enterprise-Data-Analytics-Strategic-Insights-Platform/tree/main/insight-ai-main",
        color: "from-amber-500 to-orange-600",
        image: "/enterprise-analytics-platform.png"
    },
    {
        id: "4",
        title: "Face Recognition System",
        slug: "face-recognition-system",
        category: "Computer Vision",
        desc: "High-accuracy biometric authentication system using deep learning.",
        overview: "A robust face recognition system capable of identifying individuals in real-time streams and static images. Designed for security and attendance applications, it handles varying lighting conditions and poses with high reliability.",
        problem: "Traditional access control systems like ID cards are easily lost or shared. Existing biometric solutions can be expensive or slow to process large groups of people.",
        solution: "We built a lightweight yet powerful face recognition pipeline using MTCNN for detection and FaceNet for embedding generation. The system matches faces against a known database using Euclidean distance, achieving high accuracy with low latency.",
        features: [
            "Real-time Face Detection & Recognition",
            "Multi-face processing support",
            "Anti-spoofing measures (Liveness detection)",
            "Attendance logging database",
            "Admin management portal"
        ],
        techStack: ["Python", "OpenCV", "TensorFlow", "Keras", "FaceNet", "PyTorch"],
        link: "https://github.com/venkatsai2004", // General profile link was in original, kept as is or update if specific repo known
        color: "from-purple-600 to-pink-500",
        image: "/face-recognition-system.png"
    },
]

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug)
}
