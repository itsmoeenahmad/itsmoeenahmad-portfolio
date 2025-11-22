import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image?: string // Keep for compatibility but won't use
  tags: string[]
  type: "github" | "restapi" | "secret" | "store" | "streamlit" | "website" // Added website type
  githubLink?: string
  restApiLink?: string
  playStoreLink?: string
  appStoreLink?: string
  streamlitLink?: string
  websiteLink?: string // Added websiteLink prop
}

export default function ProjectCard({
  title,
  description,
  tags,
  type,
  githubLink,
  restApiLink,
  playStoreLink,
  appStoreLink,
  streamlitLink,
  websiteLink, // Added websiteLink parameter
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-[500px] sm:h-[550px] lg:h-[600px] bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col">
      <CardContent className="p-0 flex flex-col h-full">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 leading-tight">{title}</h3>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-grow">{description}</p>

        <div className="mb-4 sm:mb-6">
          <h4 className="text-gray-300 font-semibold text-xs uppercase tracking-wider mb-2 sm:mb-3">TECHNOLOGIES</h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="px-2 sm:px-3 py-1 sm:py-1.5 bg-white/10 text-gray-300 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <h4 className="text-gray-300 font-semibold text-xs uppercase tracking-wider mb-2 sm:mb-3">AVAILABLE ON</h4>
          <div className="space-y-1.5 sm:space-y-2">
            {type === "streamlit" && streamlitLink ? (
              <Link
                href={streamlitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-2.5 sm:p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-200 group touch-manipulation"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700/50 rounded-xl flex items-center justify-center">
                    <Image
                      src="/images/streamlit-logo.png"
                      alt="Streamlit"
                      width={16}
                      height={16}
                      className="sm:w-5 sm:h-5 object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-white font-semibold text-sm sm:text-base">Streamlit App</span>
                    <p className="text-gray-400 text-xs">View Online</p>
                  </div>
                </div>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
              </Link>
            ) : null}

            {type === "github" && githubLink ? (
              <Link
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-2.5 sm:p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-200 group touch-manipulation"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700/50 rounded-xl flex items-center justify-center">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white font-semibold text-sm sm:text-base">GitHub</span>
                    <p className="text-gray-400 text-xs">View Source Code</p>
                  </div>
                </div>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
              </Link>
            ) : null}

            {type === "restapi" && restApiLink ? (
              <Link
                href={restApiLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-2.5 sm:p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-200 group touch-manipulation"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700/50 rounded-xl flex items-center justify-center">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white font-semibold text-sm sm:text-base">REST API</span>
                    <p className="text-gray-400 text-xs">Swagger Documentation</p>
                  </div>
                </div>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
              </Link>
            ) : null}

            {type === "secret" ? (
              <div className="flex items-center justify-center w-full p-2.5 sm:p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg">
                <span className="text-gray-300 font-medium text-center text-xs sm:text-sm">
                  Source code is confidential - Company project
                </span>
              </div>
            ) : null}

            {type === "store" ? (
              <>
                {playStoreLink && (
                  <Link
                    href={playStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-2.5 sm:p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-200 group touch-manipulation"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700/50 rounded-xl flex items-center justify-center p-1">
                        <Image
                          src="/icons/playstore.png"
                          alt="Google Play Store"
                          width={16}
                          height={16}
                          className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                        />
                      </div>
                      <div>
                        <span className="text-white font-semibold text-sm sm:text-base">Google Play Store</span>
                        <p className="text-gray-400 text-xs">Download for Android</p>
                      </div>
                    </div>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
                  </Link>
                )}

                {appStoreLink && (
                  <Link
                    href={appStoreLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full p-2.5 sm:p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-200 group touch-manipulation"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700/50 rounded-xl flex items-center justify-center p-1">
                        <Image
                          src="/icons/appstore-new.png"
                          alt="Apple App Store"
                          width={16}
                          height={16}
                          className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                        />
                      </div>
                      <div>
                        <span className="text-white font-semibold text-sm sm:text-base">Apple App Store</span>
                        <p className="text-gray-400 text-xs">Download for iOS</p>
                      </div>
                    </div>
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
                  </Link>
                )}
              </>
            ) : null}

            {type === "website" && websiteLink ? (
              <Link
                href={websiteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between w-full p-2.5 sm:p-3 bg-gray-800/50 border border-gray-700/50 rounded-lg hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-200 group touch-manipulation"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700/50 rounded-xl flex items-center justify-center p-1">
                    <Image
                      src="/icons/website-icon.png"
                      alt="Website"
                      width={16}
                      height={16}
                      className="w-4 h-4 sm:w-5 sm:h-5 object-contain brightness-0 invert"
                    />
                  </div>
                  <div>
                    <span className="text-white font-semibold text-sm sm:text-base">View Online</span>
                    <p className="text-gray-400 text-xs">Open Website</p>
                  </div>
                </div>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
              </Link>
            ) : null}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
