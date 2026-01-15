"use client"

import { Button } from "@/components/ui/button"
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  Home,
  User,
  Briefcase,
  FolderOpen,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  Menu,
  X,
  Code2,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image" // Import Image component
import { useState, useEffect } from "react"
import AnimatedBackground from "./components/animated-background"
import ContactForm from "./components/contact-form"
import PrivacyPolicyModal from "./components/privacy-policy-modal"
import TermsOfUseModal from "./components/terms-of-use-modal"
import ProjectCard from "./components/project-card" // Import ProjectCard

const projects = [
  {
    title: "Bees App",
    description:
      "Connects users with nearby retail offers using NFC technology, rewarding in store visits through a smart mobile app.",
    tags: ["Flutter", "Localization", "CI/CD"],
    playStoreLink: "https://play.google.com/store/apps/details?id=com.cloudb.beesapp",
    appStoreLink: "https://apps.apple.com/sa/app/beesapp/id6754710186",
    type: "store",
    image: "/ava-voice-assistant.png", // Added placeholder image
  },
  {
    title: "Apaale User App",
    description:
      "An application that connects users who want to transport goods or documents with available drivers, enabling seamless city-to-city or point-to-point delivery.",
    tags: ["Mobile App Development", "API Integration", "Google Maps Integration"],
    playStoreLink: "https://play.google.com/store/apps/details?id=app.logistics.user&pli=1",
    appStoreLink: "https://apps.apple.com/us/app/apaale/id6502597789",
    type: "store",
    image: "/apaale-user-app.png", // Added placeholder image
  },
  {
    title: "Apaale Driver App",
    description:
      "An application for drivers to receive delivery requests from users looking to transport goods or documents across different locations with ease.",
    tags: ["Mobile App Development", "API Integration", "Google Maps Integration"],
    playStoreLink: "https://play.google.com/store/apps/details?id=app.logistics.driver&pli=1",
    appStoreLink: "https://apps.apple.com/us/app/logistic-supplier/id6502517359",
    type: "store",
    image: "/apaale-driver-app-screenshot.png", // Added placeholder image
  },
  {
    title: "M3KOM User App",
    description:
      "An application that connects users with consultants (experts like teachers, doctors, etc.) for guidance and support in various fields.",
    tags: ["Cross Platform Development", "UI Design", "Error Solving"],
    appStoreLink: "https://apps.apple.com/pk/app/m3kom-user-app/id6460860855",
    type: "store",
    image: "/m3kom-user-app.png", // Added placeholder image
  },
  {
    title: "M3KOM Consultant App",
    description:
      "An application for consultants—experts such as teachers, doctors, and more—to connect with users seeking guidance and professional advice.",
    tags: ["Cross Platform Development", "API Integration", "Error Solving"],
    appStoreLink: "https://apps.apple.com/pk/app/m3kom/id6460889820",
    type: "store",
    image: "/m3kom-consultant-app.png", // Added placeholder image
  },
  {
    title: "Flutter AI",
    description:
      "Agentic AI Flutter Development Assistant that helps developers with package suggestions, code issues, and debugging support. It answers Flutter-related questions quickly and accurately in a conversational manner.",
    tags: ["Agentic AI", "RAG", "DevOps"],
    websiteLink: "http://flutterai.app/",
    type: "website",
    image: "/ava-voice-assistant.png", // Added placeholder image
  },
  {
    title: "Ava Voice Assistant",
    description:
      "A voice assistant powered by Gemini, developed in Flutter using speech-to-text and text-to-speech technologies for seamless voice interaction.",
    tags: ["UI Design", "Agile", "Firebase"],
    githubLink: "https://github.com/itsmoeenahmad/Ava-Voice-Assistant",
    type: "github",
    image: "/ava-voice-assistant.png", // Added placeholder image
  },
  {
    title: "MamaMate AI",
    description:
      "An agentic AI-powered application designed to support women during pregnancy by offering timely guidance, health tips, and personalized assistance throughout the journey.",
    tags: ["Mobile App Development", "Agentic AI", "Rest API"],
    githubLink: "https://github.com/itsmoeenahmad/MamaMate-AI",
    type: "github",
    image: "/mamamate-ai-interface.png", // Added placeholder image
  },
  {
    title: "Face Shape Detector AI",
    description:
      "A Python-based facial analysis tool that uses computer vision and facial landmark detection to determine face shapes (Oval, Oblong, Heart, Square, Diamond) from images. Built with OpenCV and dlib face shape analysis.",
    tags: ["Python", "Machine Learning", "Rest API"],
    restApiLink: "https://legislative-cordey-moeenpersonal-dd30912f.koyeb.app/docs",
    type: "restapi",
    image: "/face-shape-detector-ai.png", // Added placeholder image
  },
  {
    title: "Gesture Volume Control",
    description:
      "A hand gesture volume controller using Python, OpenCV, and MediaPipe. It uses your webcam to track your hand in real-time and changes the macOS volume when you move your index finger up or down compared to your thumb. This tool works only on macOS using AppleScript to control the volume.",
    tags: ["Python", "MediaPipe", "OpenCV"],
    githubLink: "https://github.com/itsmoeenahmad/Gesture-Volume-Control",
    type: "github",
    image: "/face-advisor-ai-screenshot.png", // Added placeholder image
  },
  {
    title: "Smart AI Resume Checker AI",
    description:
      "Streamlit app that checks resumes against job descriptions using Gemini Pro. Provides a match score, missing keywords, and improved profile summary.",
    tags: ["Python", "PyPDF", "Streamlit"],
    githubLink: "https://github.com/itsmoeenahmad/Smart-ATS-Resume-Checker-AI",
    streamlitLink: "https://smart-ats-resume-checker-ai.streamlit.app/", // Added streamlit link
    type: "streamlit", // Changed type from github to streamlit
    image: "/ai-resume-checker-screenshot.png",
  },
  {
    title: "Supply Chain Management System",
    description:
      "A blockchain-based supply chain management system built on Ethereum using Solidity, enabling transparent product tracking from producer to retailer with secure, tamper-proof records.",
    tags: ["Blockchain", "Solidity", "Smart Contracts"],
    githubLink: "https://github.com/itsmoeenahmad/Supply-Chain-Management-System",
    type: "github",
    image: "/face-advisor-ai-screenshot.png", // Added placeholder image
  },
  {
    title: "Chat With PDFs AI",
    description:
      "AI-Powered chat system using LangChain, FAISS, and Gemini — upload multiple PDFs, embed content into vector DB, and interact through intelligent Q&A.",
    tags: ["Generative AI", "Langchain Framework", "RAG System"],
    githubLink: "https://github.com/itsmoeenahmad/Chat-With-PDFs-AI",
    type: "github",
    image: "/chat-with-pdfs-ai-interface.png", // Added placeholder image
  },
]

const companies = [
  {
    company: "Cloud Business Co.",
    location: "Dammam, Eastern, Saudi Arabia • Remote",
    logo: "/images/cloud-business-co-logo.png",
    roles: [
      {
        position: "Senior Mobile App Developer",
        type: "Full-time",
        duration: "July 2025 - January 2026",
        description:
          "I’ve built real-world mobile apps for users in Saudi Arabia, delivering cross-platform Flutter solutions for Android and iOS with user-friendly UI, Arabic/English localization, and backend integration via REST APIs and WebSockets. I handled the full development lifecycle, mentored junior developers, managed CI/CD pipelines, code reviews, and Play/App Store deployments. I also oversaw testing with Firebase App Distribution and TestFlight, and implemented features like Face ID, biometrics, and device permissions for a secure, smooth user experience.",
        skills: ["Flutter", "Team Building", "Localization", "+15 skills"],
      },
    ],
  },
  {
    company: "Flutter Craft",
    location: "Peshawar, Pakistan • Hybrid",
    logo: "/images/flutter-craft-logo.png",
    roles: [
      {
        position: "Lead Software Engineer",
        type: "Part-time",
        duration: "September 2025 - January 2026 ",
        description:
          "I led a small team of developers and designers, guiding them to deliver high-quality, user-friendly software while managing communication with local and international clients. Alongside leadership, I contributed hands-on to Flutter apps and AI projects, combining strategic planning with engineering to build efficient, real-world solutions.",
        skills: ["AppDev", "LeaderShip", "Client Management", "+15 skills"],
      },
      {
        position: "Content Creator",
        type: "Part-time",
        duration: "June 2024 - October 2025 ",
        description:
          "I help Flutter developers grow by sharing practical tips, tutorials, and experiences through posts, videos, and stories, making workflows faster and smoother. I also run hands-on workshops, seminars, and webinars, helping developers apply Flutter concepts effectively in real projects.",
        skills: ["Content Creation", "Community Building", "Public Speaking", "+10 skills"],
      },
    ],
  },
  {
    company: "Giant Tech Solutions LLC",
    location: "Wyoming, US • Remote",
    logo: "/images/giant-tech-logo.png",
    roles: [
      {
        position: "Generative AI Engineer",
        type: "Full-time",
        duration: "Jan 2025 - June 2025",
        description:
          "I worked on building advanced AI Solutions by researching and developing RAG pipelines and Agentic AI workflows. This included creating AI Agents, Chatbots, and intelligent assistants using tools like LangChain, LangGraph, LangSmith, LangServe, and LlamaIndex.\n\nI designed and implemented RAG Systems with vector databases for intelligent retrieval and generation, while leveraging Python, FastAPI, and REST APIs to build scalable backend services that support real-time AI features.\n\nAdditionally, I contributed to DevOps pipelines, ensuring efficient deployment, monitoring, and performance tuning of AI Systems.",
        skills: ["LLMs", "AI Agents", "Vector DBs", "R&D", "+15 skills"],
      },
      {
        position: "Junior Mobile App Developer",
        type: "Full-time",
        duration: "July 2024 - June 2025",
        description:
          "I was responsible for end-to-end app development, covering UI design, logic implementation, state management, backend integration, and deployment. I oversaw projects from planning to execution, ensuring high-quality standards throughout the development cycle.\n\nMy work included developing AI-powered mobile solutions with seamless user interfaces, efficient state management using Provider or Getx or Bloc and integrating backend services and APIs for real-time data flow.",
        skills: ["Flutter", "UI Design", "APIs Integration", "Firebase", "+20 skills"],
      },
    ],
  },
  {
    company: "Iplexsoft",
    location: "Peshawar, Pakistan • Onsite",
    logo: "/images/iplexsoft-logo.png",
    roles: [
      {
        position: "Junior Mobile App Developer",
        type: "Full-time",
        duration: "Dec 2023 - May 2024",
        description:
          "I worked on developing and enhancing mobile applications with a strong focus on efficient APIs integration to ensure smooth communication between frontend and backend systems.\n\nMy responsibilities included UI Designing, implementing Google Maps Integration for real-time tracking and optimized route management, integrating APIs to support operational features, payment-gateway integration and applying state management techniques to improve performance, reliability, and maintainability. ",
        skills: ["Flutter", "APIs", "Responsiveness", "Payment Gateway", "AppStore", "+10 skills"],
      },
    ],
  },
]

const techStack = {
  Flutter: [
    "Dart Programming",
    "Android Apps Development",
    "iOS Apps Development",
    "Kotlin-Native Development",
    "Responsive UI-Design",
    "State Management",
    "APIs Integration",
    "Backend as a Service",
    "Localization",
    "Testing",
    "Deployment",
    "CI/CD",
  ],
  GenerativeAI: [
    "Python",
    "LLMs",
    "PromptEngineering",
    "LangChain",
    "LangSmith",
    "LangServe",
    "LlamaIndex",
    "RAGSystems",
    "VectorDatabases",
    "AIAgents",
    "Automations",
    "MCP Servers",
    "Hugging Face",
    "LLMOPS",
  ],
  Backend: ["Python", "FastAPI Framework", "Rest APIs", "Postman", "Firebase", "Supabase", "MongoDB"],
  CloudDevOps: [
    "Docker",
    "Git",
    "Github Actions",
    "Code Magic",
    "Google Cloud Platform",
    "Amazon Web Services",
    "Railway",
    "Koyeb",
  ],
}

export default function Page() {
  const [currentSection, setCurrentSection] = useState("home")
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false)
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false)
  const [projectsPerPage, setProjectsPerPage] = useState(3)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "techstack", "contact"]
      const scrollPosition = window.scrollY + window.innerHeight / 2

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setCurrentSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false) // Close mobile menu after navigation
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const nextProjects = () => {
    setCurrentProjectIndex((prev) => Math.min(prev + 1, projects.length - projectsPerPage))
  }

  const prevProjects = () => {
    setCurrentProjectIndex((prev) => Math.max(prev - 1, 0))
  }

  const getCurrentProjects = () => {
    return projects.slice(currentProjectIndex, currentProjectIndex + projectsPerPage)
  }

  const getProjectsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1 // Mobile: 1 project
      if (window.innerWidth < 1024) return 2 // Tablet: 2 projects
      return 3 // Desktop: 3 projects
    }
    return 3
  }

  useEffect(() => {
    const handleResize = () => {
      setProjectsPerPage(getProjectsPerPage())
    }

    handleResize() // Set initial value
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Max index for the first project in the visible window
  const maxProjectIndex = Math.max(0, projects.length - projectsPerPage)

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white relative overflow-x-hidden">
      <AnimatedBackground />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-between">
            <div className="flex items-center space-x-8">
              {[
                { id: "home", icon: Home, label: "Home" },
                { id: "about", icon: User, label: "About" },
                { id: "experience", icon: Briefcase, label: "Experience" },
                { id: "projects", icon: FolderOpen, label: "Projects" },
                { id: "techstack", icon: Code2, label: "Tech Stack" },
                { id: "contact", icon: MessageCircle, label: "Contact" },
              ].map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-2 text-sm transition-colors ${
                    currentSection === id ? "text-white" : "text-gray-400 hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <Link href="https://www.fiverr.com/s/zW4l2Yz" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/20 text-gray-400 bg-transparent hover:border-white hover:text-white hover:bg-transparent transition-colors"
                >
                  Hire Me
                </Button>
              </Link>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <nav className="md:hidden flex items-center justify-between">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            <Link href="https://www.fiverr.com/s/zW4l2Yz" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="border-white/20 text-gray-400 bg-transparent hover:border-white hover:text-white hover:bg-transparent transition-colors text-xs px-3 py-1"
              >
                Hire Me
              </Button>
            </Link>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0e27]/95 backdrop-blur-sm border-b border-white/10">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {[
                  { id: "home", icon: Home, label: "Home" },
                  { id: "about", icon: User, label: "About" },
                  { id: "experience", icon: Briefcase, label: "Experience" },
                  { id: "projects", icon: FolderOpen, label: "Projects" },
                  { id: "techstack", icon: Code2, label: "Tech Stack" },
                  { id: "contact", icon: MessageCircle, label: "Contact" },
                ].map(({ id, icon: Icon, label }) => (
                  <button
                    key={id}
                    onClick={() => scrollToSection(id)}
                    className={`flex items-center space-x-3 text-left py-3 px-4 rounded-lg transition-colors ${
                      currentSection === id
                        ? "text-white bg-white/10"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-4 sm:px-6">
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="space-y-3">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight">
              Moeen Ahmad
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300">Senior Mobile App Engineer</p>
          </div>

          <div className="flex items-center justify-center space-x-6">
            {[
              { href: "https://github.com/itsmoeenahmad", icon: Github },
              { href: "https://www.linkedin.com/in/itsmoeenahmad", icon: Linkedin },
              { href: "https://www.instagram.com/itsmoeenahmad", icon: Instagram },
              { href: "mailto:itsmoeenahmad@gmail.com", icon: Mail },
            ].map(({ href, icon: Icon }, index) => (
              <Link
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white transition-colors"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center relative z-10 py-20 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">About Me</h2>

          <div className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed space-y-6">
            <p>
              I'm a <strong className="text-white font-semibold">Senior Mobile App Engineer</strong> who loves building
              apps that actually work and are easy to maintain 🤤
            </p>

            <p>
              I specialize in <strong className="text-white font-semibold">Flutter & Dart</strong>, writing clean,
              scalable code with Clean Architecture, MVVM, and feature-based structures. I focus on UI design,
              responsiveness, localization, APIs integration, state management, performance, and stability 🤓
            </p>

            <p>
              On the backend, I mainly use Firebase (Auth,
              Firestore, Storage, Notifications) and sometimes Supabase based on project need. I handle the full app lifecycle:
              development, testing, deployment, CI/CD, versioning, and long-term maintenance 🙃
            </p>

            <p>
              I also work with <strong className="text-white font-semibold">Generative AI</strong> in Python, building
              chatbots, RAG systems, and automation tools, plus DevOps and cloud setups using Docker, GitHub Actions,
              AWS, GCP, Railway, and Koyeb 😎
            </p>

            <p>Outside work, I speak at tech events and share knowledge with the community.</p>

            <p className="pt-4">
              <strong className="text-white font-semibold">Still learning. Still building.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 lg:space-y-12">
            {companies.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/40 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 border border-white/20"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 lg:mb-6">
                  <div className="flex items-center gap-3 mb-1 sm:mb-0">
                    <Image
                      src={exp.logo || "/placeholder.svg"}
                      alt={`${exp.company} logo`}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white">{exp.company}</h3>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-100 bg-slate-700/60 px-2 sm:px-3 py-1 rounded-full w-fit">
                    {exp.location}
                  </span>
                </div>
                {exp.roles.map((role, roleIndex) => (
                  <div
                    key={roleIndex}
                    className={`${roleIndex > 0 ? "border-t border-white/20 pt-6 sm:pt-8 mt-6 sm:mt-8" : ""}`}
                  >
                    <h4 className="text-base sm:text-lg font-medium text-white mb-1">{role.position}</h4>
                    <p className="text-gray-300 text-xs sm:text-sm mb-1">{role.type}</p>
                    <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">{role.duration}</p>
                    <p className="text-gray-100 text-sm sm:text-base mb-3 sm:mb-4 whitespace-pre-line">
                      {role.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {role.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 sm:px-3 py-1 bg-slate-700/60 rounded-full text-xs sm:text-sm text-gray-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">Projects</h2>
          <div className="max-w-6xl mx-auto">
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
              {getCurrentProjects().map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image} // Pass the image prop
                  tags={project.tags}
                  type={project.type}
                  githubLink={project.githubLink}
                  restApiLink={project.restApiLink}
                  playStoreLink={project.playStoreLink}
                  appStoreLink={project.appStoreLink}
                  streamlitLink={project.streamlitLink} // Added streamlitLink prop
                  websiteLink={project.websiteLink} // Added websiteLink prop
                />
              ))}
            </div>

            {/* Mobile Navigation (visible only on mobile) */}
            <div className="md:hidden space-y-4">
              {/* Navigation Buttons - Centered and stacked */}
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={prevProjects}
                  disabled={currentProjectIndex === 0}
                  className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-white/5 backdrop-blur-sm"
                >
                  <ChevronLeft className="h-5 w-5" />
                  <span className="text-base font-medium">Previous</span>
                </button>

                <button
                  onClick={nextProjects}
                  disabled={currentProjectIndex >= maxProjectIndex}
                  className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed bg-white/5 backdrop-blur-sm"
                >
                  <span className="text-base font-medium">Next</span>
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Desktop/Tablet Navigation (hidden on mobile) */}
            <div className="hidden md:flex items-center justify-center gap-6">
              <button
                onClick={prevProjects}
                disabled={currentProjectIndex === 0}
                className="p-3 rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Progress Bar */}
              <div className="flex items-center gap-2">
                {Array.from({ length: Math.max(1, projects.length - projectsPerPage + 1) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProjectIndex(index)}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentProjectIndex ? "w-8 bg-white" : "w-4 bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextProjects}
                disabled={currentProjectIndex >= maxProjectIndex}
                className="p-3 rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="techstack"
        className="min-h-screen flex items-center justify-center relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">Tech Stack</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {Object.entries(techStack).map(([category, skills]) => (
              <div
                key={category}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 lg:p-8 border border-white/10"
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-3 sm:mb-4 lg:mb-6">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/10 text-gray-300 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center relative z-10 py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center">Contact Me</h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-transparent relative z-10">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs sm:text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Moeen Ahmad. All rights reserved.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <button
                onClick={() => setIsTermsModalOpen(true)}
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Terms of Service
              </button>
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={scrollToTop}
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 p-2 rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </footer>

      {/* Modals */}
      <PrivacyPolicyModal isOpen={isPrivacyModalOpen} onClose={() => setIsPrivacyModalOpen(false)} />
      <TermsOfUseModal isOpen={isTermsModalOpen} onClose={() => setIsTermsModalOpen(false)} />
    </div>
  )
}
