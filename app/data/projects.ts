export type Project = {
  slug: string;
  title: string;
  year: string;
  description: string;
  image: string;
  tags: string[];
  links?: { demo?: string; repo?: string };
  role?: string;
  tools?: string[];
  methodology?: string;
  overview?: string;
  contributions?: string[];
  visuals?: string[];
  insights?: string[];
  outcomes?: string[];
};

export const projects: Project[] = [
  {
    slug: "velocity-cycles-bi",
    title: "Business Intelligence System for Velocity Cycles",
    year: "2025",
    description: "End-to-end BI solution (SQL Server + SSAS + MDX + Power BI) for sales, markets, and customer insights across NA/EU/APAC.",
    image: "/velocity-cycles.jpg",
    tags: ["SQL Server", "SSAS", "MDX", "Power BI", "CRISP-DM"],
    role: "Business Intelligence Consultant",
    tools: ["Microsoft SQL Server", "SSAS", "Visual Studio (SQL Data Tools)", "MDX", "Power BI"],
    methodology: "CRISP-DM",
    overview: "Designed and implemented a complete BI solution for a multinational bicycle manufacturer to analyze sales performance, market trends, and customer preferences, enabling strategy for expansion across North America, Europe, and Asia-Pacific.",
    contributions: [
      "Data Extraction: Retrieved and prepared datasets from SQL Server DW using SSMS queries and transformations.",
      "Data Modelling: Built multidimensional model (data sources, DSVs, cubes, dimensions, hierarchies) for OLAP.",
      "MDX Calculations: Implemented calculated measures & KPIs (total sales, growth, category performance)."
    ],
    visuals: [
      "Sales Overview (global vs. regional performance)",
      "Category-wise Sales Analysis",
      "Time-based Trends (monthly, quarterly, yearly)",
      "Top-Performing Products & Regions"
    ],
    insights: [
      "Identified high-growth regions and seasonal demand cycles.",
      "Surfaced underperforming categories for targeted promotions & assortment tuning.",
      "Informed inventory optimization and regional marketing."
    ],
    outcomes: [
      "Delivered a functional BI system supporting multi-perspective analysis.",
      "Provided actionable insights for expansion planning and operations.",
      "Produced an APA-styled methodology report aligned to CRISP-DM."
    ]
  },
  {
    slug: "phishing-detection",
    title: "Phishing Detection Model",
    year: "2025",
    description: "Supervised ML to classify phishing URLs using engineered features (length, domain structure, special chars).",
    image: "/phishing.jpg",
    tags: ["Python", "Pandas", "Scikit-learn", "NumPy"],
    role: "Machine Learning Developer",
    tools: ["Python", "Pandas", "Scikit-learn", "NumPy"],
    methodology: "Supervised Learning & Feature Engineering",
    overview: "Developed and deployed a model to classify URLs as phishing vs. legitimate using crafted features; designed for real-time classification.",
    contributions: [
      "Feature Engineering: Extracted URL attributes to improve model accuracy.",
      "Model Development: Trained Logistic Regression, Random Forest, Decision Tree; selected best on accuracy and recall.",
      "Performance Optimization: Tuned hyperparameters to reduce false positives while keeping high detection rates.",
      "Deployment-Ready: Packaged model for potential real-time integration."
    ],
    outcomes: [
      "Achieved high classification accuracy with optimized features and algorithms.",
      "Produced a reproducible workflow suitable for enterprise scaling."
    ]
  },
  {
    slug: "credit-risk-analysis",
    title: "Credit Risk Analysis",
    year: "2025",
    description: "Predictive modeling for loan default risk using Logistic Regression & Decision Trees.",
    image: "/credit.jpg",
    tags: ["R", "RStudio", "ggplot2", "caret"],
    role: "Data Analyst",
    tools: ["R", "RStudio", "ggplot2", "caret"],
    methodology: "Logistic Regression & Decision Tree Modeling",
    overview: "Analyzed loan applications to predict default probability; cleaned data, built models, and communicated insights.",
    contributions: [
      "Data Cleaning: Handled missing values and outliers via boxplots, tests, and imputation.",
      "Model Implementation: Built and compared logistic regression and decision tree models.",
      "Visualization: Used ggplot2 to explain risk patterns to stakeholders."
    ],
    outcomes: [
      "Delivered models with strong accuracy and interpretability.",
      "Enabled more data-driven loan approvals, lowering default risk."
    ]
  },
  {
    slug: "e-library-management",
    title: "E-Library Management System",
    year: "2024",
    description: "Relational database for books, members, and borrowing with integrity and performance in mind.",
    image: "/library.jpg",
    tags: ["SQL", "MySQL", "Database Design"],
    role: "Database Designer & Developer",
    tools: ["SQL", "MySQL"],
    methodology: "Relational Database Design",
    overview: "Designed an RDBMS to manage library entities and transactions with a focus on integrity, performance, and scalability.",
    contributions: [
      "Schema Design: Tables with PK/FK relationships for consistent joins.",
      "Data Integrity: Enforced referential integrity to avoid inconsistencies.",
      "Performance: Indexed key fields to accelerate frequent queries."
    ],
    outcomes: [
      "Delivered a structured, optimized SQL database ready for a front-end.",
      "Improved record-keeping accuracy and reduced redundancy."
    ]
  },
  {
    slug: "london-housing-analysis",
    title: "London Housing Data Analysis",
    year: "2025",
    description: "Cleaned, transformed, and visualized housing prices to reveal borough trends and market patterns.",
    image: "/london.jpg",
    tags: ["SQL", "Power BI", "Excel"],
    role: "Data Analyst",
    tools: ["SQL", "Power BI", "Excel"],
    methodology: "Data Cleaning & Visualization",
    overview: "Explored London housing data to surface regional differences, price dynamics, and affordability metrics.",
    contributions: [
      "SQL Prep: Standardized dates, handled nulls, and removed duplicates.",
      "Visualization: Built Power BI dashboards covering trends and comparisons.",
      "Insights: Flagged high-growth areas; recommendations for buyers and investors."
    ],
    outcomes: [
      "Interactive dashboard for stakeholders to explore housing data.",
      "Insights that guided market investment decisions."
    ]
  }
];
