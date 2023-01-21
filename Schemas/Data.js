import { BsGithub, BsLinkedin } from "react-icons/bs";

export const Data = {
  profile: {
    name: "Hieu Truong",
    occupation: "Software Engineer",
    location: "Ho Chi Minh, Vietnam",
    email: "hieutq1188@gmail.com",
    telephone: "+84 7784467",
    image: "images/me.jpeg",
  },
  aboutMe: {
    label: "About",
    description:
      // "I am a Software engineer who is always curious about everything and loves to research and develop applications using various technologies and programming languages, including needs identification and system design based on development models.",
      "I am a Software engineer who is always curious about everything and loves to research, develop and operate applications using various technologies and programming languages, including needs identification and system design.",
  },
  skills: {
    technicalLabel: "Technical Skills",
    softLabel: "Skills",
    technicalSkills: [
      "Javascript, Typescript - React, AngularJs, Nodejs",
      "Golang",
      "Git",
      "SQL",
      "NoSQL",
      "Docker",
      "Bitbucket Pipelines",
      "Github action (basic)",
      "Jenkins (basic)",
      "Ansible (basic)",
      "Terraform (basic)",
      "Monitoring - Prometheus, Elastic stack (basic)",
      "AWS (basic)",
      "GCP (basic)",
      "Kubernetes (basic)",
      "Proxy - Nginx",
      "DNS - Cloudflare",
    ],
    keySkills: [
      "Analysis",
      // "Suggest a solution",
      // "Critical thinking",
      "Working in group",
      "Research",
      "Fullstack developer",
      "Devops",
      "CI/CD",
      "IaC",
    ],
  },
  socialMedia: {
    label: "SOCIAL",
    social: [
      {
        label: "linkedin",
        name: "linkedin",
        url: "https://linkedin.com/in/hieu-truong-quang",
        className: "bxl-linkedin-square",
        icon: <BsLinkedin/>
      },
      {
        label: "github",
        name: "github",
        url: "https://github.com/quanhieu",
        className: "bxl-github",
        icon: <BsGithub/>
      }
    ],
  },
  activities: [
    {
      title: 'Seminal about IaC',
      description: 'Apply Terraform Ansible to deploy WordPress on AWS',
      at: 'We are Bloom',
      period: '2022'
    },
    {
      title: 'Contribute for open source project Domolo',
      description: 'A monitoring and logging solution for Docker hosts and containers with Prometheus, Grafana, Loki, cAdvisor, NodeExporter and alerting with AlertManager.',
      period: '2022'
    },
    {
      title: 'Join and contribute at Hacktoberfest',
      description: 'Contributions to open source at Hacktoberfest #9',
      award: 'https://holopin.io/@hieutruong',
      period: '2022'
    }
  ],
  workExperience: [
    {
      company: "We Are Bloom",
      period: "Nov. 2021 - Present",
      projects: [
        {
          project: 'VC-DID',
          period: 'July. 2022 - Jan. 2023',
          position: 'Fullstack developer, Devops',
          description: [
            'Client from the Australia. They want to research and build a decentralized identity is an identifier for any participant in the entity in the ecosystem',
            'System based on Microsoft Entra Verified ID to help users represent who they are in any context without referring back to centralized identity registries such as the email, password, phone, work experience, etc',
          ],
          summary: 'Build SaaS platform Verifiable Credentials and Decentralized Identifiers',
          teamSize: 4,
          technology: 'NextJS (Typescript), Redux toolkit, React hook-form, Nodejs - Moleculer, Postgresql, Docker, Redis, Redis pub/sub, SocketIO, Sendgrid, Azure Entra, Azure Bot, Microsoft Graph',
          responsibility: [
            'Build the architecture for microservice',
            'Research and implement new feature',
            'Implement features for frontend and backend',
            'Fixing bug',
            'Implement CI/CD',
            'Config Proxy, SSL, DNS',
            'Monitoring with Prometheus, Grafana, Alert manager, etc',
          ]
        },
        {
          project: 'Dolce Diet',
          period: 'March 2022 - Present',
          position: 'Fullstack developer, Devops',
          description: [
            'Client is from the USA. They want to rebuild a website for there diet program.',
            'Migrate old program and resource',
            'Schedule cronjob to auto-renew subscription',
            "Generate a professional plan. It contains the exact exercise plan and menu plan used for men and women, which is based on the user's input information weight, height, experience in exercise, etc",
          ],
          // summary: 'Application with more than 1000 active users',
          teamSize: 9,
          technology: 'NextJS (Typescript), Redux toolkit, React hook-form, Nodejs (NestJS), Python, MongoDB, SocketIO, Docker, Redis',
          responsibility: [
            'Rate solution and apply technologies',
            'Build the architecture for frontend',
            'Research and implement new feature',
            'Write Unit test for frontend by Cypress',
            'Write Unit test for backend by Jest',
            'Implement features for frontend and backend',
            'Maintain and optimize source code',
            'Fixing bug',
            'Implement CI/CD',
            'Monitoring with Elastic Stack',
          ]
        },
        {
          project: 'Continuum Cyber',
          period: 'Nov 2021 - Present',
          position: 'Fullstack developer, Devops',
          description: [
            'Build a SaaS platform cyber security',
            'Provide expert support to test and uncover issues and risks, with comprehensive guidance on remediation options and advice.',
            'Vulnerability assessments',
            "Mail emulator your organization's exposure to the phishing",
            'Vulnerability scan - Detect Sql Injection, SSL, XSS, Vulnerability, etc',
            'Provide monthly and yearly subscription packages through Stripe'
          ],
          // summary: 'Application with more than 1000 active users',
          teamSize: 5,
          technology: 'NextJS (Typescript), Redux toolkit, React hook-form, Nodejs (Strapi, ExpressJs), Golang, SocketIO, Postgresql, Docker, Nmap, GoPhish, RabbitMQ, Sendgrid, Sentry, Hotjar, Terraform, Google cloud platform (GCP), Google cloud storage (GCS)',
          responsibility: [
            'Rate solution and apply technologies',
            'Build the architecture for microservice',
            'Research and implement new feature',
            'Implement features for frontend and backend',
            'Maintain and optimize source code',
            'Fixing bug',
            'Implement CI/CD',
            'Config Proxy, SSL',
            "Config Let's encrypt SSL",
            "Config CertBot to auto renew Let's encrypt SSL",
            'Monitoring with Prometheus, UptimeRobot',
            'Apply Terraform create GCP and GCS resource',
          ]
        },
      ]
    },
    {
      company: 'Freelancer',
      projects: [
        {
          project: 'Smart Road',
          period: 'Oct. 2021 - Present',
          position: 'Fullstack developer',
          description: [
            'Smart Road provides an e-commerce platform that includes distributes vehicle spare parts and vehicle-related support services in Vietnam',
            'Build CMS',
            'Build mobile application',
          ],
          teamSize: 10,
          technology: 'NextJS (Typescript), Golang (Gin - Gorm), Postgresql, PWA, Firebase, SocketIO, Redis, Flutter, Docker, AWS, Terraform, Google analytics',
          responsibility: [
            'Implement features for FE and BE',
            'Maintain and optimize source code',
            'Fixing bug'
          ]
        },
        {
          project: 'Model Vinfast',
          period: 'Sep. 2021 - Oct. 2021',
          position: 'Fullstack developer, Devops',
          description: [
            'Implement a financial plan forecast model for VinFast car.',
            'Build CMS',
            'Read spreadsheet files and output the contents on Antd-table like excel'
          ],
          teamSize: 10,
          technology: 'NextJS (Typescript), Nodejs (NestJs), Postgresql, PWA, Firebase, SocketIO, Flutter, AWS, Docker',
          responsibility: [
            'Implement features for FE and BE',
            'Fixing bug'
          ]
        },
        {
          project: 'Migration Teamcenter',
          period: 'Aug. 2021 - Sep. 2021',
          position: 'Backend developer, Devops',
          description: [
            'Migrate data from LDAP system to Teamcenter',
          ],
          teamSize: 3,
          technology: 'Nodejs (ExpressJs), Docker',
          responsibility: [
            'Migrate data from LDAP system to Teamcenter, by the way, using multiple threads of Nodejs',
            'Schedule cronjob to auto migrate data',
            'Fixing bug'
          ]
        },
        {
          project: 'KIKO',
          period: 'June 2021 - Aug, 2021',
          position: 'Backend developer',
          description: [
            'Client is from the Australian, they want to create an application that connects restaurants, customers, and drivers similar to Foody.',
          ],
          teamSize: 20,
          technology: 'Nodejs (Fastify), MongoDB, Elasticsearch, Neo4j, Docker, Redis, ReactJs, React-native, SocketIO, Kafka, AWS',
          responsibility: [
            'Implement features for BE',
            'Fixing bug',
            'Implement CI/CD',
          ]
        },
        {
          project: 'STAY WELL',
          period: 'March, 2019 - Jan, 2021',
          position: 'Fullstack developer',
          description: [
            'Provide simple-rent house management solution.',
          ],
          teamSize: 3,
          technology: 'Nodejs (ExpressJs), MongoDB, ReactJs, Redux-Saga, Redis, Sendgrid, Docker',
          responsibility: [
            'Build the architecture',
            'Research and implement new feature',
            'Implement features FE for BE',
            'Fixing bug'
          ]
        },
      ]
    },
    {
      company: 'Save Money',
      projects: [
        {
          project: 'Insurance platform',
          period: 'June, 2020 - May, 2021',
          position: 'Fullstack developer',
          description: [
            'B2B2C service provider',
            'Building a digital insurance platform for Banks, e-wallets',
          ],
          // summary: 'Provides digital insurance platform solution',
          teamSize: 15,
          technology: 'React (UmiJs), Redux-thunk, Nodejs (ExpressJs), PostgreSQL, MongoDb, Redis, RabbitMQ, Kubernetes (K8s), Google cloud, Docker, Graphql, Kafka, Elasticsearch, ZooKeeper',
          responsibility: [
            'Research and implement new feature',
            'Implement features for frontend and backend',
            'Schedule cronjob to renew expired contracts',
            'Connect third-party API',
            'Communicate and create API for third-party to connect with system',
            'Maintain and optimize source code',
            'Fixing bug'
          ]
        }
      ]
    },
    {
      company: 'FPT Information System',
      period: 'Jan, 2020 - June, 2020',
      projects: [
        {
          project: 'Fis Anti Covid',
          period: 'May, 2020 - June, 2020',
          position: 'Front-end developer',
          description: [
            'Manage to circulate in the building and notify Covid issues',
          ],
          teamSize: 9,
          technology: 'React, React-native, Nodejs, NGINX, PM2',
          responsibility: [
            'Research and implement new feature',
            'Deploy application by PM2',
            'Fixing bug'
          ]
        },
        {
          project: 'Fis Insight',
          period: 'March, 2020 - May, 2020',
          position: 'Fullstack developer',
          description: [
            'Check-In, provide services in the building, notify, make an appointment',
          ],
          teamSize: 9,
          technology: 'React, React-native, Nodejs, NGINX, PM2',
          responsibility: [
            'Implement features for frontend and backend',
            'Implement features for mobile application',
            'Deploy application by PM2',
            'Fixing bug'
          ]
        },
        {
          project: 'FPT EID',
          period: 'Jan, 2020 - March, 2020',
          position: 'Mobile developer',
          description: [
            'Build mobile application for bank',
          ],
          teamSize: 9,
          technology: 'React, React-native, Nodejs, NGINX, PM2, CodePush',
          responsibility: [
            'Build eKYC ID',
            'Implement features for mobile application',
            'Fixing bug'
          ]
        }
      ]
    },
  ],
  experience: {
    works: [
      {
        title: "FULL-STACK DEVELOPER",
        period: "Oct. 2021 - Present",
        company: "Banco Ripley",
        description: [
          "Desarrollo y mejora continua de microservicios REST en Java y Node.js(JS/TS).",
          "Desarrollo y mejora continua de PWA en las tecnologías Angular, Ionic y Cordova.",
          "Canalización CI/CD con Bitbucket, Jenkins y AWS como infraestructura."
        ],
      },
      {
        title: "FULL-STACK DEVELOPER",
        period: "Oct. 2019 - Oct. 2021",
        company: "Altiuz",
        description: [
          "Desarrollo de Web Services REST en Java y Nodejs(JS/TS) acompañado de diferentes motores de BD como Mysql, Oracle, MariaDB, MongoDB e IBM API Connect y 3scale como API Gateway.",
          "Desarrollo de Frontend y Mobile con tecnologías como Angular, React, React Native, Ionic y Cordova.",
        ],
      },
    ],
    projects: [
      {
        name: "Onboarding Digital",
        company: "Banco de Chile",
        period: "Nov. 2019 - Ene. 2020",
        description: [
          "Control, desarrollo, securitización y despliegue de APIs en plataforma IBM API Connect.",
        ],
      },
      {
        name: "Captación Digital",
        company: "Banco Ripley",
        period: "Ene. 2020 - Feb. 2020",
        description: [
          "Control, desarrollo y securitización de APIs en plataforma IBM API Connect.",
          "Desarrollo frontend en Angular para el consumo de Web Services SOAP/REST apuntando a ambientes DEV/PRE-PROD/PROD como simulación.",
        ],
      },
      {
        name: "Agendamiento Remoto",
        company: "Gobierno de Chile",
        period: "Mar. 2020 - May. 2020",
        description: [
          "Desarrollo frontend y mobile con las tecnologias de Angular 6 e Ionic 4 para el agendamiento de horas en centros a lo largo de todo Chile.",
        ],
      },
      {
        name: "Altiuz Report Dynamic",
        company: "Altiuz",
        period: "Jun. 2020 - Jul. 2020",
        description: [
          "Desarrollo de servicio Java para la generación unitaria de documentos, sin la necesidad de tener almacenada la información del mismo en una fuente de datos.",
        ],
      },
      {
        name: "Desarrollos Tigo",
        company: "Computec S.A.S",
        period: "Ago. 2020 - Dic 2020",
        description: [
          "Desarrollo Java/Spring Boot de Web Service API REST para consulta y descarga de documentos almacenados en repositorios IBM CMOD.",
          "Desarrollo Java CRON para transferencia de documentos XML hacia servidor SFTP.",
          "Desarrollo Java CRON para carga de documentos PDFs hacia Azure Blob Storage.",
        ],
      },
    ],
    academic: [
      {
        career: "Bachelor of Science: Computing - Information Systems",
        date: "2019",
        institution: "FPT Education",
      },
    ],
    activity: {
      certificate: [
        {
          title: 'Web developer: Java',
          period: '10/2018',
          at: 'Nhat Nghe'
        }
      ],
      award: [
        'Best student in ...',
        'Best student in ...',
        'Best student in ...',
      ]
    },
  },
};
