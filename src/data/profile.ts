export type Project = {
  title: string;
  description: string;
  highlights?: string[];
  stack: string[];
  github?: string;
};

export const profile = {
  name: "Himanshu Paithane",
  title: "Data Scientist & Data Engineer",
  email: "hpaithan@stevens.edu",
  location: "New York City Metropolitan Area",
  summary:
    "Data scientist and data engineer focused on scalable ML systems, analytics reliability, and production-grade pipelines.",
    aboutLong:
    "I build end-to-end data products that combine strong analytics with production-ready engineering. My work spans ML/NLP, information retrieval (RAG), and scalable data pipelines—usually focused on turning messy, high-volume data into systems that are reliable, measurable, and easy for teams to trust.\n\nI like taking ambiguous problems, defining the right metrics, and shipping solutions that hold up in real use: robust validation, clear logging, and pragmatic automation. Recently I’ve been working on document parsing and vector search workflows, real-time computer vision projects, and full-stack applications that bring data-driven features to users.\n\nI’m especially interested in retrieval systems, entity resolution, and MLOps practices that improve models continuously as data changes. Outside of work, I enjoy exploring new datasets, building small tools that speed up analysis, and learning by shipping projects end-to-end.",
  photo: "/profile-placeholder.png",
  resumeUrl: "/resume.pdf",
  socials: {
    linkedin: "https://www.linkedin.com/in/himanshu-paithane-125aa71b7/",
    github: "https://github.com/78himanshu"
  },
  highlights: [
    {
      title: "300,000+ customer names standardized",
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
      title: "Automated PySpark data validation framework ",
      description: "Automated ETL reconciliation and migration"
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
        "Prototyped end-to-end computer vision workflows in Microsoft Azure Vision Studio, evaluating detection/classification/OCR pipelines and iterating on data preprocessing and configuration to improve accuracy and robustness for real-world inputs.",
        "Developed and trained PyTorch-based models for spatial analysis and speech recognition, performing dataset preparation, feature engineering, and hyperparameter tuning, and reporting performance using standard validation metrics to ensure reliable model behavior.",
        "Conducted internal experimentation with Microsoft 365 and Microsoft’s generative AI tooling to explore multimodal use cases (vision + text), documenting findings and recommendations to accelerate downstream prototyping and stakeholder adoption."
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
      title: "VectorSearch RAG (MongoDB)",
      description:
        "Built an end-to-end RAG retrieval pipeline: chunked PDFs, generated local sentence-transformer embeddings, stored vectors + metadata in MongoDB Atlas, and queried top-k matches via MongoDB Vector Search.",
      highlights: [
        "Built an end-to-end RAG retrieval pipeline by chunking PDFs, generating local sentence-transformer embeddings, and storing vectors + metadata in MongoDB Atlas.",
        "Implemented MongoDB Vector Search indexing and $vectorSearch queries to retrieve top-k semantically similar chunks with tuned candidate limits.",
        "Automated ingestion + retrieval in a reproducible Python/uv workflow with env-based secrets management, enabling retrieval-grounded (RAG) responses and secure, repeatable experimentation."
      ],
      stack: [
        "Python",
        "MongoDB Atlas",
        "Vector Search",
        "LangChain",
        "Sentence-Transformers",
        "PyMongo"
      ],
      github: "https://github.com/<YOUR_GITHUB_USERNAME>/vectorsearch-rag-mongodb"
    },
    {
      title: "Multimodal Document Parsing Pipeline",
      description:
        "Built an LLM-based PDF table extraction pipeline using the OpenAI Responses API (vision) to produce structured records with JSON schema + Pydantic validation and export clean CSVs with repeatability checks.",
      highlights: [
        "Built an LLM-based document extraction pipeline using the OpenAI Responses API (vision) to convert PDF tables into structured records and export clean CSVs for downstream analytics.",
        "Iterated prompt + schema design (JSON schema + Pydantic validation) to improve extraction accuracy and consistency for classification tasks.",
        "Added repeatability and error-checking via multi-run consistency tests (hash comparisons) to reduce variance and surface edge cases for targeted fixes."
      ],
      stack: ["Python", "OpenAI Responses API", "Vision", "PyMuPDF", "Pydantic"],
      github:
        "https://github.com/<YOUR_GITHUB_USERNAME>/multimodal-document-parsing-pipeline"
    },
    {
      title: "AlertVision (Drowsiness Detection)",
      description:
        "Fine-tuned YOLO for high-accuracy face/eye/head-position detection and used OpenCV for real-time video inference to identify drowsiness in safety-critical scenarios.",
      highlights: [
        "Fine-tuned YOLO for high-accuracy detection of face, eyes, and head position to identify drowsiness.",
        "Leveraged OpenCV (cv2) for real-time video input, image capture, and preprocessing for the detection model.",
        "Trained and deployed a deep learning model (YOLO, PyTorch) on captured images for real-time drowsiness detection; applied reinforcement-learning techniques to improve decision-making accuracy in safety-critical use cases."
      ],
      stack: ["YOLO", "PyTorch", "OpenCV", "Computer Vision"],
      github: "https://github.com/<YOUR_GITHUB_USERNAME>/alertvision"
    },
    {
      title: "FindMySquad (Full-Stack Platform)",
      description:
        "Developed a full-stack web platform for hosting/joining games, finding gym buddies, and esports tournaments with real-time chat, reminders, maps, and engagement systems (karma, achievements, ratings).",
      highlights: [
        "Developed and deployed a full-stack web platform (Node.js, Express.js, MongoDB, Handlebars, CSS, JavaScript) for hosting/joining games, finding gym buddies, and organizing esports tournaments.",
        "Integrated real-time chat (WebSockets), email reminders (Nodemailer + Cron), and interactive maps (Leaflet.js) to enhance collaboration and event coordination.",
        "Designed user engagement systems (profiles, ratings, karma leaderboard, achievements) to boost retention and fair play."
      ],
      stack: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Handlebars",
        "WebSockets",
        "Leaflet.js",
        "Nodemailer",
        "Cron"
      ],
      github: "https://github.com/<YOUR_GITHUB_USERNAME>/findmysquad"
    },
    {
      title: "YOLO + OpenCV Road Signs Detection",
      description:
        "Built a real-time road sign detection pipeline using YOLOv5 + OpenCV with a custom Pascal VOC → YOLO dataset workflow, reproducible training config, and deployed best weights for live inference.",
      highlights: [
        "Built an end-to-end real-time road sign detection pipeline using YOLOv5 (PyTorch) + OpenCV, running inference on live video streams and rendering labeled bounding boxes for 4 classes (traffic light, speed limit, crosswalk, stop).",
        "Created and operationalized a custom Pascal VOC dataset workflow: curated labels, defined the class map, and converted VOC XML annotations into YOLO-format labels, generating the dataset config (customVOC.yaml) for reproducible training.",
        "Implemented a preprocessing/training data engine (preprocessingRoadSigns.py) that performs image resizing and augmentations, then splits data into train/val sets; enforced consistent input size (img=320) for training/inference parity.",
        "Fine-tuned YOLOv5 using transfer learning (pretrained weights) and managed the full training loop configuration (batch=16, epochs=50), tracking detection quality via mAP and loss curves; deployed the \"best.pt\" weights for inference."
      ],
      stack: ["YOLOv5", "PyTorch", "OpenCV", "Computer Vision", "Pascal VOC"],
      github:
        "https://github.com/<YOUR_GITHUB_USERNAME>/yolo-opencv-road-signs-detection-model"
    },
    {
      title: "CNN Human Activity Recognition (UCI HAR)",
      description:
        "Built a 1D-CNN time-series classifier for smartphone accelerometer/gyroscope windows across 6 activities; implemented full preprocessing and achieved 93.7% test accuracy with robust evaluation.",
      highlights: [
        "Developed a CNN-based Human Activity Recognition system using the UCI HAR smartphone dataset (accelerometer + gyroscope), converting raw multivariate sensor streams into fixed-length time windows across 6 activity classes.",
        "Built a 1D-CNN time-series architecture (Conv1D + max-pooling + dropout + dense + softmax) to learn motion features directly from sensor signals and outperform traditional baselines (e.g., SVM/KNN).",
        "Implemented a full preprocessing pipeline: normalized channels, segmented continuous readings into uniform intervals, and reshaped inputs into 3D tensors (samples x timesteps x channels) for CNN training.",
        "Trained and tuned the model using categorical cross-entropy with Adam; evaluated with confusion matrix + precision/recall/F1; achieved 93.7% test accuracy."
      ],
      stack: ["Python", "Deep Learning", "1D-CNN", "Time Series", "UCI HAR"],
      github:
        "https://github.com/<YOUR_GITHUB_USERNAME>/cnn-human-activity-recognition-uci-har"
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
