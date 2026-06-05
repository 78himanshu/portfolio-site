export type Project = {
  title: string;
  description: string;
  highlights?: string[];
  stack: string[];
  github?: string;
  image?: string;
};
export const profile = {
  name: "Himanshu Paithane",
  title: "Data Scientist & Data Engineer",
  email: "paithanehimanshu@gmail.com",
  location: "New York City Metropolitan Area",
  summary:
  "I build data and AI systems that turn messy, high-volume information into reliable pipelines, measurable insights, and retrieval-powered applications.",

  aboutLong:
  "I build end-to-end data and AI systems that combine production-ready data engineering with applied machine learning, retrieval, and LLM-powered workflows. My work spans PySpark pipelines, data validation frameworks, NLP-driven entity resolution, RAG systems, vector search, agentic AI, MCP tools, and financial document intelligence.\n\nI like taking ambiguous problems, defining the right metrics, and shipping systems that are reliable, measurable, and easy for teams to trust. Recently, I’ve been focused on agentic RAG workflows, OpenAI function calling, ChromaDB/LangChain retrieval pipelines, Kaiko market data agents, local LLM document extraction, and scalable analytics workflows across Databricks, BigQuery, and Power BI.\n\nI’m especially interested in building AI/data systems that connect reliable data infrastructure with intelligent applications — systems that can retrieve, reason, validate, and support real decision-making. Outside of work, I enjoy kayaking on the Hudson, playing tennis when the weather is nice, and joining amateur soccer tournaments.",
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
    Languages: ["Python", "SQL", "R", "Java", "JavaScript", "C++"],
    "AI/LLM": [
      "RAG",
      "Agentic AI",
      "OpenAI",
      "LangChain",
      "ChromaDB",
      "MCP",
      "Hugging Face",
      "Vector Search",
      "Prompt Engineering"
    ],
    "Data/ML": [
      "scikit-learn",
      "XGBoost",
      "LightGBM",
      "PyTorch",
      "TensorFlow",
      "NLP",
      "Time Series",
      "Model Evaluation"
    ],
    "Data Engineering": [
      "PySpark",
      "Databricks",
      "Kafka",
      "Airflow",
      "BigQuery",
      "MongoDB",
      "Data Validation",
      "ETL/ELT"
    ],
    "Cloud/BI": ["AWS S3", "GCP", "Microsoft Fabric", "Power BI", "Tableau"]
  },
  experience: [
    {
      company: "PANASONIC NORTH AMERICA",
      logo: "/company-logos/panasonic-placeholder.png",
      role: "Data Engineer - ML",
      dates: "May 2025 – Present",
      bullets: [
        "Developed and deployed a Databricks (PySpark) pipeline to transform and standardize 300,000+ customer names using NLP + fuzzy matching, ranking candidate matches to improve downstream analytics reliability and reduce false matches.",
        "Built and deployed a scalable PySpark data validation framework to automate ETL reconciliation and migration QA (schema, completeness, metric parity), improving reporting trust and strengthening data-quality controls to support ongoing maintenance of downstream models and analytics.",
        "Automated GA4 ETL pipelines into GCP BigQuery for product engagement and lifecycle analytics, then integrated curated datasets into the Azure ecosystem (Microsoft Fabric/Power BI) to deliver dashboards that reduced reporting turnaround time and improved stakeholder decision-making."
      ]
    },
    {
      company: "JAR",
      logo: "/company-logos/jar-placeholder.png",
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
      logo: "/company-logos/sharp-placeholder.png",
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
      logo: "/company-logos/symphonyai-placeholder.png",
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
      logo: "/company-logos/sharp-placeholder.png",
      role: "Data Science Intern",
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
      logo: "/education-logos/stevens-placeholder.png",
      details: "(3.9/4) - 2026"
    },
    {
      degree: "B.Tech in Computers and Communication Engineering",
      school: "Manipal University Jaipur",
      logo: "/education-logos/manipal-placeholder.png",
      details: "2024",
      subtext: "Specialization in Data Science"
    }
  ],
  projects: [
    {
      title: "AgenticRAG",
      image: "/project-images/agentic-rag.png",
      description:
        "Built an agentic RAG system using OpenAI function calling, local vector retrieval, and multiple retrieval tools to answer Python programming questions with grounded context.",
      highlights: [
        "Implemented an agentic workflow where the model selects retrieval tools before generating a final answer.",
        "Built a local vector knowledge base from Python documentation using token-based chunking and OpenAI embeddings.",
        "Designed multi-tool retrieval logic combining semantic search, documentation lookup, and context-focused retrieval."
      ],
      stack: ["Python", "OpenAI Function Calling", "RAG", "Vector Search", "Embeddings", "Tiktoken"],
      github: "https://github.com/78himanshu/AgenticRAG.git"
    },
    {
      title: "TicketSense-AI",
      image: "/project-images/ticketsense-ai.png",
      description:
        "Built a LangChain + ChromaDB ticket classification system comparing OpenAI embeddings and Hugging Face EmbeddingGemma-300M across zero-shot, KNN, and few-shot strategies.",
      highlights: [
        "Created parallel Chroma vector stores using OpenAI embeddings and local Hugging Face EmbeddingGemma-300M embeddings.",
        "Implemented zero-shot, KNN, and few-shot classification workflows for support ticket categorization.",
        "Evaluated classification performance using precision, recall, F1-score, and classification reports."
      ],
      stack: ["Python", "LangChain", "ChromaDB", "Hugging Face", "OpenAI", "Scikit-learn"],
      github: "https://github.com/78himanshu/TicketSense-AI.git"
    },
    {
      title: "KaikoData-Agent",
      image: "/project-images/kaiko-data-agent.png",
      description:
        "Built an agentic market data downloader that converts natural-language trading data requests into Kaiko Market Data API CSV/JSON downloads.",
      highlights: [
        "Used OpenAI function calling to convert natural-language market data requests into structured API parameters.",
        "Integrated Kaiko Market Data API endpoints for OHLCV aggregation data and tick-level trade data.",
        "Exported downloaded market data into JSON and CSV files for quantitative analysis workflows."
      ],
      stack: ["Python", "OpenAI Function Calling", "Kaiko API", "Requests", "CSV", "JSON"],
      github: "https://github.com/78himanshu/KaikoData-Agent.git"
    },
    {
      title: "MarketMCP-Agent",
      image: "/project-images/market-mcp-agent.png",
      description:
        "Implemented an MCP-powered financial data assistant using FastMCP and Kaiko Reference Data APIs to answer questions about exchanges, instruments, and market data availability.",
      highlights: [
        "Built a FastMCP server that exposes Kaiko Reference Data API endpoints as agent-usable tools.",
        "Implemented an AI agent that queries MCP tools to answer natural-language financial data availability questions.",
        "Designed the workflow for autonomous trading data discovery and market metadata lookup."
      ],
      stack: ["Python", "FastMCP", "MCP", "OpenAI", "Kaiko API", "Requests"],
      github: "https://github.com/78himanshu/MarketMCP-Agent.git"
    },
    {
      title: "DocRouteAI",
      image: "/project-images/docroute-ai.png",
      description:
        "Built an LLM-powered file routing pipeline that classifies PDFs, CSVs, text files, and Python scripts, then routes them to extraction, summarization, copying, or execution workflows.",
      highlights: [
        "Used OpenAI tool calling to classify incoming files and select the correct processing action.",
        "Implemented PDF table extraction, LSEG document summarization, CSV copying, and Python script execution logging.",
        "Designed deterministic validation checks around LLM routing decisions for safer document automation."
      ],
      stack: ["Python", "OpenAI Tool Calling", "PyMuPDF", "PyPDF2", "Document AI", "CSV"],
      github: "https://github.com/78himanshu/DocRouteAI.git"
    },
    {
      title: "LocalDocForge",
      image: "/project-images/localdocforge.png",
      description:
        "Built a local LLM document extraction pipeline using an OpenAI-compatible inference server to convert I/B/E/S PDF tables into structured CSV outputs.",
      highlights: [
        "Used local inference through an OpenAI-compatible API endpoint without relying on the OpenAI Python SDK.",
        "Extracted PDF table text with PyMuPDF and converted financial documentation layouts into structured CSV records.",
        "Designed a privacy-conscious local AI workflow for financial document intelligence and schema extraction."
      ],
      stack: ["Python", "Local LLM", "OpenAI-Compatible API", "PyMuPDF", "Requests", "CSV"],
      github: "https://github.com/78himanshu/LocalDocForge.git"
    },
    {
      title: "StructuraAI",
      image: "/project-images/structuraai.png",
      description:
        "Built a document intelligence pipeline that extracts structured metadata and schema definitions from large I/B/E/S financial documentation PDFs.",
      highlights: [
        "Parsed large financial documentation PDFs and extracted table layouts, field names, formats, and metadata.",
        "Generated structured JSON schema outputs for downstream analytics and data engineering workflows.",
        "Automated document-to-data conversion for financial reference documentation."
      ],
      stack: ["Python", "OpenAI API", "PyMuPDF", "JSON Schema", "Document Intelligence"],
      github: "https://github.com/78himanshu/StructuraAI_5.git"
    },
    {
      title: "ProtocolMind-RAG",
      image: "/project-images/protocolmind-rag.png",
      description:
        "Built a RAG-ready knowledge base from networking RFC documents using semantic chunking, token-aware processing, and OpenAI embeddings.",
      highlights: [
        "Downloaded and processed official networking RFC documents including WebSocket, TLS, and HTTP specifications.",
        "Implemented token-aware chunking and embedding generation to create a local retrieval-ready knowledge base.",
        "Stored chunks, metadata, and vector embeddings for downstream semantic search and RAG workflows."
      ],
      stack: ["Python", "OpenAI Embeddings", "RAG", "Vector Search", "Tiktoken", "NumPy"],
      github: "https://github.com/78himanshu/ProtocolMind-RAG.git"
    },
    {
      title: "PyTutor-RAG",
      image: "/project-images/pytutor-rag.png",
      description:
        "Built a Python documentation RAG system that retrieves relevant chunks from official Python docs and answers questions using semantic similarity search.",
      highlights: [
        "Downloaded official Python tutorial pages and extracted clean text using BeautifulSoup.",
        "Implemented token-based chunking, OpenAI embeddings, and local vector storage using NumPy.",
        "Built semantic retrieval logic to send grounded context into the OpenAI Responses API."
      ],
      stack: ["Python", "OpenAI API", "BeautifulSoup", "RAG", "Embeddings", "NumPy"],
      github: "https://github.com/78himanshu/PyTutor-RAG.git"
    },
    {
      title: "VectorSearch RAG (MongoDB)",
      image: "/project-images/vectorsearch-rag-mongodb.png",
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
      github: "https://github.com/78himanshu/RAG-pipeline-with-MongoDB-vector-search.git"
    },
    {
      title: "Multimodal Document Parsing Pipeline",
      image: "/project-images/multimodal-document-parsing.png",
      description:
        "Built an LLM-based PDF table extraction pipeline using the OpenAI Responses API (vision) to produce structured records with JSON schema + Pydantic validation and export clean CSVs with repeatability checks.",
      highlights: [
        "Built an LLM-based document extraction pipeline using the OpenAI Responses API (vision) to convert PDF tables into structured records and export clean CSVs for downstream analytics.",
        "Iterated prompt + schema design (JSON schema + Pydantic validation) to improve extraction accuracy and consistency for classification tasks.",
        "Added repeatability and error-checking via multi-run consistency tests (hash comparisons) to reduce variance and surface edge cases for targeted fixes."
      ],
      stack: ["Python", "OpenAI Responses API", "Vision", "PyMuPDF", "Pydantic"],
      github:
        "https://github.com/78himanshu/Multimodal-Document-Parsing-Pipeline.git"
    },
    {
      title: "AlertVision (Drowsiness Detection)",
      image: "/project-images/alertvision.png",
      description:
        "Fine-tuned YOLO for high-accuracy face/eye/head-position detection and used OpenCV for real-time video inference to identify drowsiness in safety-critical scenarios.",
      highlights: [
        "Fine-tuned YOLO for high-accuracy detection of face, eyes, and head position to identify drowsiness.",
        "Leveraged OpenCV (cv2) for real-time video input, image capture, and preprocessing for the detection model.",
        "Trained and deployed a deep learning model (YOLO, PyTorch) on captured images for real-time drowsiness detection; applied reinforcement-learning techniques to improve decision-making accuracy in safety-critical use cases."
      ],
      stack: ["YOLO", "PyTorch", "OpenCV", "Computer Vision"],
      github: "https://github.com/78himanshu/Wake-Bot.git"
    },
    {
      title: "FindMySquad (Full-Stack Platform)",
      image: "/project-images/findmysquad.png",
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
      github: "https://github.com/78himanshu/FindMySquad.git"
    },
    {
      title: "YOLO + OpenCV Road Signs Detection",
      image: "/project-images/road-signs-detection.png",
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
        "https://github.com/78himanshu/YOLO-plus-OpenCV-Road-Signs-Detection-Model.git"
    },
    {
      title: "CNN Human Activity Recognition (UCI HAR)",
      image: "/project-images/cnn-human-activity-recognition.png",
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
        "https://github.com/78himanshu/CNN-for-Human-Activity-Recognition-using-Mobile-Phone-Sensors.git"
    }
  ]
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Education", href: "/education" },
  { label: "Contact", href: "/contact" }
];
