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
  ArrowRight,
} from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import AnimatedBackground from "./components/animated-background"
import ContactForm from "./components/contact-form"
import PrivacyPolicyModal from "./components/privacy-policy-modal"
import TermsOfUseModal from "./components/terms-of-use-modal"
import Image from "next/image"

const projects = [
  {
    title: "Apaale User App",
    description:
      "An application that connects users who want to transport goods or documents with available drivers, enabling seamless city-to-city or point-to-point delivery.",
    tags: ["Mobile App Development", "API Integration", "Google Maps Integraion"],
    playStoreLink: "https://play.google.com/store/apps/details?id=app.logistics.user&pli=1",
    appStoreLink: "https://apps.apple.com/us/app/apaale/id6502597789",
    type: "store",
  },
  {
    title: "Apaale Driver App",
    description:
      "An application for drivers to receive delivery requests from users looking to transport goods or documents across different locations with ease.",
    tags: ["Mobile App Development", "API Integration", "Google Maps Integraion"],
    playStoreLink: "https://play.google.com/store/apps/details?id=app.logistics.driver&pli=1",
    appStoreLink: "https://apps.apple.com/us/app/logistic-supplier/id6502517359",
    type: "store",
  },
  {
    title: "M3KOM User App",
    description:
      "An application that connects users with consultants (experts like teachers, doctors, etc.) for guidance and support in various fields.",
    tags: ["Cross Platform Developemnt", "UI Design", "Error Solving"],
    appStoreLink: "https://apps.apple.com/pk/app/m3kom-user-app/id6460860855",
    type: "store",
  },
  {
    title: "M3KOM Consultant App",
    description:
      "An application for consultants—experts such as teachers, doctors, and more—to connect with users seeking guidance and professional advice.",
    tags: ["Cross Platform Developemnt", "API Integration", "Error Solving"],
    appStoreLink: "https://apps.apple.com/pk/app/m3kom/id6460889820",
    type: "store",
  },
  {
    title: "Ava Voice Assistant",
    description:
      "A voice assistant powered by Gemini, developed in Flutter using speech-to-text and text-to-speech technologies for seamless voice interaction.",
    tags: ["UI Design", "Agile", "Firebase"],
    githubLink: "https://github.com/itsmoeenahmad/Ava-Voice-Assistant",
    type: "github",
  },
  {
    title: "MamaMate AI",
    description:
      "An agentic AI-powered application designed to support women during pregnancy by offering timely guidance, health tips, and personalized assistance throughout the journey.",
    tags: ["Mobile App Development", "Agentic AI", "Rest API"],
    githubLink: "https://github.com/itsmoeenahmad/MamaMate-AI",
    type: "github",
  },
  {
    title: "Chat With PDFs AI",
    description:
      "AI-Powered chat system using LangChain, FAISS, and Gemini — upload multiple PDFs, embed content into vector DB, and interact through intelligent Q&A.",
    tags: ["Generative AI", "Langchain Framewor", "RAG System"],
    githubLink: "https://github.com/itsmoeenahmad/Chat-With-PDFs-AI",
    type: "github",
  },
  {
    title: "Face Shape Detector AI",
    description:
      "A Python-based facial analysis tool that uses computer vision and facial landmark detection to determine face shapes (Oval, Oblong, Heart, Square, Diamond) from images. Built with OpenCV and dlib face shape analysis.",
    tags: ["Python", "Machine Learning", "Rest API"],
    restApiLink: "https://legislative-cordey-moeenpersonal-dd30912f.koyeb.app/docs",
    type: "restapi",
  },
  {
    title: "Face Advisor AI",
    description:
      "A smart AI assistant that gives personalized beauty and style advice based on your face shape. Get suggestions for glasses, hairstyle, makeup, and more using just your face shape analysis.",
    tags: ["Python", "Prompt Engineering", "Rest API"],
    restApiLink: "https://face-advisor-ai.vercel.app/",
    type: "restapi",
  },
  {
    title: "Smart AI Resume Checker AI",
    description:
      "Streamlit app that checks resumes against job descriptions using Gemini Pro. Provides a match score, missing keywords, and improved profile summary.",
    tags: ["Python", "PyPDF", "Streamlit"],
    githubLink: "https://github.com/itsmoeenahmad/Smart-ATS-Resume-Checker-AI",
    type: "github",
  },
]

const experiences = [
  {
    company: "Cloud Business Co.",
    location: "Dammam, Saudi Arabia • Remote",
    logo: "/images/cloud-bus-co.png",
    roles: [
      {
        position: "Software Engineer",
        type: "Full-time",
        duration: "July 2024 - Present ",
        description:
          "Responsible for developing mobile applications from scratch and integrating custom RESTful APIs. Also build generative AI solutions, managing both APIs integration, DevOps tasks and collaborate with the development teams.",
        skills: ["Flutter", "Generative AI", "DevOps", "+15 skills"],
      },
    ],
  },
  {
    company: "Giant Tech Solutions LLC",
    location: "Wyoming, US • Remote",
    logo: "/images/giant-tech-logo.png",
    roles: [
      {
        position: "Flutter Mobile App Developer",
        type: "Full-time",
        duration: "July 2024 - January 2025 ",
        description:
          "Developed AI-related mobile applications using Flutter, integrating Firebase for backend services and real-time data management.",
        skills: ["Flutter", "UI Design", "APIs Integration", "Firebase", "+20 skills"],
      },
      {
       position: "Gen AI Engineer",
        type: "Full-time",
        duration: "January 2024 - June 2025",
        description:
          "Worked as a Generative AI Engineer, building and integrating AI systems into mobile apps. Key tasks included creating RAG pipelines, AI agents, FastAPI backends, and automations with n8n, all integrated using Flutter.",
        skills: ["LLMs", "AI Agents", "Vector DBs", "R&D", "+15 skills"],
      
      }
    ],
  },
  {
    company: "Flutter Craft",
    location: "Peshawar, Pakistan • Hybrid",
    logo: "/images/flutter-craft-logo.png",
    roles: [
      {
        position: "Creator and Tech Speaker",
        type: "Full-time",
        duration: "June 2024 - Present ",
        description:
          "Created and shared informative content about Flutter across social media platforms, collaborated with both local and international clients, engaged in public speaking through seminars, workshops, and webinars.",
        skills: ["Creativity", "Public Speaking", "Agile", "+15 skills"],
      },
    ],
  },
  {
    company: "Iplexsoft",
    location: "Peshawar, Pakistan • Onsite",
    logo: "/images/iplexsoft-logo.png",
    roles: [
      {
        position: "Junior Flutter App Developer",
        type: "Full-time",
        duration: "March 2024 - May 2024",
        description:
          "Worked with App Store deployment and updation processes, Tap payment gateway, Google Maps APIs, and integrated REST APIs to enhance app functionality and user experience.",
        skills: ["App Store", "APIs", "Postman", "Payment Gateway", "+10 skills"],
      },
      {
        position: "Flutter App Development Intern",
        type: "Full-time",
        duration: "December 2023 - February 2024",
        description:
          "Collaborated with a team of five professional app developers to design and implement responsive user interfaces for cross-platform mobile applications on Android and iOS.",
        skills: ["Flutter", "Dart", "OOPs", "UI Design", "Responsive Design", "+5 skills"],
      },
    ],
  },
]

const techStack = {
  "Mobile App Development": [
    "Dart Programming",
    "Flutter Framework",
    "Cross Platform Development",
    "UI Design",
    "Responsiveness",
    "APIs Integration",
    "Backend as a Service",
    "CI/CD",
    "Deployment",
  ],
  "Generative AI": [
    "Python",
    "LLMs",
    "Prompt Engineering",
    "LangChain",
    "LangSmith",
    "LangServe",
    "LlamaIndex",
    "RAG Systems",
    "Vector Databases",
    "AI Agents",
    "Automations",
    "MCP Servers",
    "Hugging Face",
    "LLM OPS",
  ],
  "BackEnd": [
    "Python",
    "FastAPI Framework",
    "Rest APIs",
    "Firebase",
    "MongoDB"
  ],
  "Cloud & DevOps": [
  "Docker", 
  "Git", 
  "Github Actions",
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

  const projectsPerPage = 2
  const totalPages = Math.ceil(projects.length / projectsPerPage)

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
    setCurrentProjectIndex((prev) => (prev + 1) % totalPages)
  }

  const prevProjects = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const getCurrentProjects = () => {
    const startIndex = currentProjectIndex * projectsPerPage
    return projects.slice(startIndex, startIndex + projectsPerPage)
  }

  return (
    <div className="min-h-screen bg-[#0a0e27] text-white relative overflow-x-hidden">
      <AnimatedBackground />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className={`flex items-center space-x-2 text-sm transition-colors ${
                  currentSection === "home" ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <Home className="h-4 w-4" />
                <span>Home</span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={`flex items-center space-x-2 text-sm transition-colors ${
                  currentSection === "about" ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <User className="h-4 w-4" />
                <span>About</span>
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className={`flex items-center space-x-2 text-sm transition-colors ${
                  currentSection === "experience" ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <Briefcase className="h-4 w-4" />
                <span>Experience</span>
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className={`flex items-center space-x-2 text-sm transition-colors ${
                  currentSection === "projects" ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <FolderOpen className="h-4 w-4" />
                <span>Projects</span>
              </button>
              <button
                onClick={() => scrollToSection("techstack")}
                className={`flex items-center space-x-2 text-sm transition-colors ${
                  currentSection === "techstack" ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <Code2 className="h-4 w-4" />
                <span>Tech Stack</span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`flex items-center space-x-2 text-sm transition-colors ${
                  currentSection === "contact" ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                <MessageCircle className="h-4 w-4" />
                <span>Contact</span>
              </button>
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
                <button
                  onClick={() => scrollToSection("home")}
                  className={`flex items-center space-x-3 text-left py-3 px-4 rounded-lg transition-colors ${
                    currentSection === "home"
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Home className="h-5 w-5" />
                  <span>Home</span>
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className={`flex items-center space-x-3 text-left py-3 px-4 rounded-lg transition-colors ${
                    currentSection === "about"
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <User className="h-5 w-5" />
                  <span>About</span>
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className={`flex items-center space-x-3 text-left py-3 px-4 rounded-lg transition-colors ${
                    currentSection === "experience"
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Briefcase className="h-5 w-5" />
                  <span>Experience</span>
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className={`flex items-center space-x-3 text-left py-3 px-4 rounded-lg transition-colors ${
                    currentSection === "projects"
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <FolderOpen className="h-5 w-5" />
                  <span>Projects</span>
                </button>
                <button
                  onClick={() => scrollToSection("techstack")}
                  className={`flex items-center space-x-3 text-left py-3 px-4 rounded-lg transition-colors ${
                    currentSection === "techstack"
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Code2 className="h-5 w-5" />
                  <span>Tech Stack</span>
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`flex items-center space-x-3 text-left py-3 px-4 rounded-lg transition-colors ${
                    currentSection === "contact"
                      ? "text-white bg-white/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Contact</span>
                </button>
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
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300">Full Stack Engineer (AI + Flutter)</p>
          </div>

          <div className="flex items-center justify-center space-x-4 sm:space-x-6">
            <Link
              href="https://github.com/itsmoeenahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white transition-colors"
            >
              <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/itsmoeenahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white transition-colors"
            >
              <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="https://www.instagram.com/itsmoeenahmad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white transition-colors"
            >
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="mailto:itsmoeenahmad@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-3 rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white transition-colors"
            >
              <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center relative z-10 py-20 px-4 sm:px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8">About Me</h2>
      
          <div className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed space-y-8">
          <p>
  I'm a Generative AI Engineer and Mobile App Developer with over two years of experience building practical solutions that combine usability with intelligence. I started out in mobile development using Flutter, working on projects like logistics apps, online consultation apps and many more platforms. Over time, my focus shifted toward integrating AI into the products I build, aiming to create smarter, more adaptive systems.
</p>

<p>
My work now spans a variety of AI-driven tools and services, focusing on making applications smarter and more responsive to user needs. On the backend, I work with RAG pipelines, Chatbots, AI Agents, and scalable systems using DevOps practices, LLMOps, and cloud platforms like AWS, GCP and another serverless platforms. I enjoy designing solutions that are both technically solid and user-focused.
</p>

<p>
  Some of my recent projects include a Medical AI agent, a Flutter AI tool, and several automated workflows to enhance system performance. I take pride in building things that are not just functional but genuinely useful.
</p>

<p>
  Outside of development, I'm an active tech speaker and community contributor. I enjoy sharing ideas, learning from others, and staying involved in the fast-moving world of AI and App Development.
</p>

          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex items-center justify-center relative z-10 py-20 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12 sm:mb-24 text-center">
            Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/10">
                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img
                      src={exp.logo || "/placeholder.svg"}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                      style={{ maxWidth: "100%", maxHeight: "100%" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-white">{exp.company}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{exp.location}</p>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className={`${roleIndex > 0 ? "border-t border-white/10 pt-4 sm:pt-6" : ""}`}>
                      <h4 className="text-base sm:text-lg font-medium text-white mb-1">{role.position}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm mb-1">{role.type}</p>
                      <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{role.duration}</p>
                      <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">{role.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-2 sm:px-3 py-1 bg-white/10 rounded-full text-xs sm:text-sm text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center relative z-10 py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12 sm:mb-24 text-center">
            Projects
          </h2>
          <div className="max-w-6xl mx-auto">
            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
              {getCurrentProjects().map((project, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 transition-all duration-300"
                >
                  {/* Project Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-base sm:text-lg leading-relaxed">{project.description}</p>
                  </div>

                  {/* Skills/Tags */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 sm:px-4 py-1 sm:py-2 bg-white/10 rounded-full text-xs sm:text-sm text-gray-300 hover:bg-white/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Store Links */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Available On</h4>
                    {project.type === "github" && project.githubLink ? (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full p-4 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-200 group/link"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                            <Github className="h-4 w-4 text-gray-400" />
                          </div>
                          <div>
                            <span className="text-white font-medium">View Source Code</span>
                            <p className="text-xs text-gray-400">Available on GitHub</p>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover/link:translate-x-1 group-hover/link:text-white transition-all" />
                      </Link>
                    ) : project.type === "restapi" && project.restApiLink ? (
                      <Link
                        href={project.restApiLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full p-4 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-200 group/link"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                            <Code2 className="h-4 w-4 text-gray-400" />
                          </div>
                          <div>
                            <span className="text-white font-medium">View its REST API</span>
                            <p className="text-xs text-gray-400">Swagger UI</p>
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover/link:translate-x-1 group-hover/link:text-white transition-all" />
                      </Link>
                    ) : project.type === "secret" ? (
                      <div className="flex items-center justify-center w-full p-4 bg-white/5 border border-white/20 rounded-lg">
                        <span className="text-white font-medium">
                          The source code is confidential and not publicly shared, as it is part of a company project.
                          No live link to the app is being provided.
                        </span>
                      </div>
                    ) : (
                      <>
                        {/* Play Store Link */}
                        {project.playStoreLink && (
                          <Link
                            href={project.playStoreLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full p-4 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-200 group/link"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                                <Image
                                  src="/icons/playstore.png"
                                  alt="Play Store"
                                  width={18}
                                  height={18}
                                  className="rounded-sm"
                                />
                              </div>
                              <div>
                                <span className="text-white font-medium">Google Play Store</span>
                                <p className="text-xs text-gray-400">Download for Android</p>
                              </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-gray-400 group-hover/link:translate-x-1 group-hover/link:text-white transition-all" />
                          </Link>
                        )}

                        {/* App Store Link */}
                        {project.appStoreLink && (
                          <Link
                            href={project.appStoreLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full p-4 bg-white/5 border border-white/20 rounded-lg hover:bg-white/10 hover:border-white/30 transition-all duration-200 group/link"
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                                <Image
                                  src="/icons/appstore.png"
                                  alt="App Store"
                                  width={18}
                                  height={18}
                                  className="rounded-sm"
                                />
                              </div>
                              <div>
                                <span className="text-white font-medium">Apple App Store</span>
                                <p className="text-xs text-gray-400">Download for iOS</p>
                              </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-gray-400 group-hover/link:translate-x-1 group-hover/link:text-white transition-all" />
                          </Link>
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={prevProjects}
                disabled={currentProjectIndex === 0}
                className="p-3 rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Progress Bar */}
              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      index === currentProjectIndex ? "w-8 bg-white" : "w-4 bg-white/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextProjects}
                disabled={currentProjectIndex === totalPages - 1}
                className="p-3 rounded-full border border-white/20 text-gray-400 hover:text-white hover:border-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
        className="min-h-screen flex items-center justify-center relative z-10 py-20 px-4 sm:px-6"
      >
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12 sm:mb-24 text-center">
            Tech Stack
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {Object.entries(techStack).map(([category, skills]) => (
              <div key={category} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-white/10">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">{category}</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 sm:px-4 py-1 sm:py-2 bg-white/10 rounded-full text-xs sm:text-sm text-gray-300 hover:bg-white/20 transition-colors"
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
      <section id="contact" className="min-h-screen flex items-center justify-center relative z-10 py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-12 sm:mb-24 text-center">
            Get in Touch
          </h2>
          <ContactForm />
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
