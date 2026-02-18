export const profile = {
  name: "Himanshu Paithane",
  title: "Data Scientist & Data Engineer",
  email: "hpaithan@stevens.edu",
  location: "New York City Metropolitan Area",
  summary:
    "Data scientist and data engineer focused on scalable ML systems, analytics reliability, and production-grade pipelines.",
  aboutLong:
    "I build data products that combine rigorous analytics with production-ready engineering. My work spans machine learning, NLP, and distributed data processing—usually at the intersection of model performance and data quality. I enjoy designing pipelines that are resilient, observable, and easy for cross-functional teams to use.\n\nI thrive in environments where I can take ambiguous problems, translate them into measurable outcomes, and ship solutions that last. My interests include recommender systems, entity resolution, and MLOps for continuous improvement. Outside of work, I like exploring new datasets, writing small tools to speed up analysis, and contributing to data community meetups.",
  photo: "/profile-placeholder.png",
  resumeUrl: "/resume.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/himanshu-paithane-125aa71b7/",
    github: "https://github.com/78himanshu"
  },
  highlights: [
    {
      title: "300,000+ names standardized",
      description: "Deployed an NLP + fuzzy matching pipeline to improve entity resolution reliability."
    },
    {
      title: "~$15k/month saved",
      description: "Replaced a third-party scoring solution with an internal ML model."
    },
    {
      title: "~20K DAUs pipeline",
      description: "Built Kafka-to-S3 ingestion with Airflow and Redshift for analytics."
    },
    {
      title: "F1 score to 90%",
      description: "Optimized ML models with feature engineering and tuning."
    }
  ],
  skills: {
    Languages: ["Python", "SQL", "Java", "JavaScript"],
    "Data/ML": ["PySpark", "Pandas", "scikit-learn", "PyTorch", "TensorFlow", "MLflow"],
    "Data Engineering": ["Airflow", "Kafka", "BigQuery", "Redshift", "MongoDB"],
    "Cloud/BI": ["GCP", "Azure", "Power BI", "Databricks"]
  },
  experience: [
    {
      company: "PANASONIC NORTH AMERICA",
      role: "Data Engineer",
      dates: "May 2025 – Present",
      bullets: [
        "Developed and deployed a Databricks (PySpark) pipeline to transform and standardize 300,000+ customer names using NLP + fuzzy matching, ranking candidate matches to improve downstream analytics reliability and reduce false matches.",
        "Built and deployed a scalable PySpark data validation framework to automate ETL reconciliation and migration QA (schema, completeness, metric parity), improving reporting trust and strengthening data-quality controls to support ongoing maintenance of downstream models and analytics.",
        "Automated GA4 ETL pipelines into GCP BigQuery for product engagement and lifecycle analytics, then integrated curated datasets into the Azure ecosystem (Microsoft Fabric/Power BI) to deliver dashboards that reduced reporting turnaround time and improved stakeholder decision-making."
      ]
    },
    {
      company: "JAR",
      role: "Data Scientist",
      dates: "Mar 2024 – Aug 2024",
      bullets: [
        "Developed and deployed an internal ML-based affluence scoring model (LightGBM/XGBoost) to classify new users at sign-up into spending-affinity tiers; validated on holdout data and operationalized deployment with MLflow, replacing a third-party solution and saving ~$15k/month.",
        "Developed a Kafka-to-AWS S3 ingestion pipeline for transactional SMS events from ~20K DAUs, orchestrated Airflow batch transforms and Redshift loads for analytics/modeling, and maintained operational datasets in MongoDB for downstream application use.",
        "Employed NLP techniques to process unstructured SMS data, converting it into structured formats for storage in MongoDB, enabling downstream analytics of user behavior and engagement."
      ]
    },
    {
      company: "SHARP",
      role: "Machine Learning Intern",
      dates: "Jan 2024 - Apr 2024",
      bullets: [
        "Worked with Microsoft Azure Vision Studio to prototype Vision AI workflows.",
        "Built ML models for spatial analysis and speech recognition using PyTorch.",
        "Explored M365 and Microsoft’s generative AI tooling for internal experimentation."
      ]
    },
    {
      company: "SYMPHONY AI",
      role: "Data Science Intern",
      dates: "May 2023 – Aug 2023",
      bullets: [
        "Built and optimized a neural network for motor health prediction using sensor-derived time-series features, improving accuracy by 23% through feature engineering and hyperparameter tuning, and delivering anomaly/risk scores to support maintenance decisions.",
        "Optimized production ML models (SVM, XGBoost, Neural Networks) through advanced feature engineering, statistical analysis, and hyperparameter tuning, boosting F1-score to 90% (confusion matrix/ROC-based evaluation) and enabling more reliable predictions at scale.",
        "Worked across end-to-end ML workflows including data preprocessing, feature engineering, model training, and validation across diverse model families (tree-based, classical ML, deep learning) to deliver reliable, production-oriented predictions."
      ]
    },
    {
      company: "SHARP",
      role: "Intern",
      dates: "Jun 2021 – Sept 2021",
      bullets: [
        "Built end-to-end machine learning frameworks using Python libraries (PyTorch, Scikit-Learn, TensorFlow, Keras); performed preprocessing, feature engineering, and hyperparameter tuning to deliver high-accuracy, production-ready models.",
        "Designed, executed, and analysed large scale A/B tests to evaluate business strategies and product features, applying statistical methods to generate actionable insights that directly guided product decisions and user engagement improvements.",
        "Optimized big data pipelines using Apache Spark & Hadoop to process large datasets, boosting efficiency by 4x and enabling scalable real-time analytics."
      ]
    }
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      school: "Stevens Institute of Technology",
      details: "(3.9/4) - 2026"
    },
    {
      degree: "B.Tech in Computers and Communication Engineering",
      school: "Manipal University Jaipur",
      details: "2024",
      subtext: "Specialization in Data Science"
    }
  ],
  projects: [
    {
      title: "Entity Resolution Pipeline",
      description:
        "Placeholder project: an end-to-end name matching system that blends fuzzy logic with learned embeddings for reliable identity resolution.",
      stack: ["PySpark", "Databricks", "NLP", "Azure"],
      github: "https://github.com/aarav-mehta/entity-resolution",
      demo: "https://example.com/entity-resolution"
    },
    {
      title: "Anomaly Detection for IoT Streams",
      description:
        "Placeholder project: streaming anomaly detection on sensor telemetry with adaptive thresholds and alert routing.",
      stack: ["Kafka", "Python", "Airflow", "Grafana"],
      github: "https://github.com/aarav-mehta/iot-anomaly",
      demo: "https://example.com/iot-anomaly"
    },
    {
      title: "Recommendation Engine",
      description:
        "Placeholder project: hybrid recommender combining collaborative filtering with content-based signals for personalization.",
      stack: ["Python", "scikit-learn", "Redis", "FastAPI"],
      github: "https://github.com/aarav-mehta/recommender",
      demo: "https://example.com/recommender"
    },
    {
      title: "Product Analytics Dashboard",
      description:
        "Placeholder project: curated product engagement metrics with automated ETL and BI-ready datasets.",
      stack: ["BigQuery", "dbt", "Power BI", "GA4"],
      github: "https://github.com/aarav-mehta/analytics-dashboard",
      demo: "https://example.com/analytics-dashboard"
    },
    {
      title: "Affluence Scoring Service",
      description:
        "Placeholder project: ML scoring API to classify user spending affinity for marketing workflows.",
      stack: ["LightGBM", "MLflow", "Docker", "AWS"],
      github: "https://github.com/aarav-mehta/affluence-scoring",
      demo: "https://example.com/affluence-scoring"
    }
  ]
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" }
];
