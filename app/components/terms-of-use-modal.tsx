"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useEffect } from "react"

interface TermsOfUseModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function TermsOfUseModal({ isOpen, onClose }: TermsOfUseModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-[#0a0e27] border border-white/20 rounded-lg w-full max-w-2xl max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/20">
          <h2 className="text-xl font-semibold text-white">Terms of Use</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)] text-gray-300 space-y-4">
          <p className="text-sm text-gray-400">Last Updated: July 5, 2025</p>

          <p>
            Welcome to itsmoeenahmad.online. By accessing and using this website, you agree to the following terms and
            conditions.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">1. Purpose of This Site</h3>
            <p className="mb-2">This website is Moeen Ahmad's personal portfolio showcasing his:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Background</li>
              <li>Technical skills</li>
              <li>Projects</li>
              <li>Work experience</li>
            </ul>
            <p className="mt-2">All content is for informational purposes only.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">2. Intellectual Property</h3>
            <p className="mb-2">
              All content on this site, including text, graphics, projects, and logos, is the intellectual property of
              Moeen Ahmad unless otherwise stated.
            </p>
            <p>You may not reproduce, distribute, or modify any content without prior permission.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">3. Acceptable Use</h3>
            <p className="mb-2">By using this site, you agree not to:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Use it for illegal or unauthorized purposes</li>
              <li>Attempt to harm, hack, or disrupt the functionality of the website</li>
              <li>Misuse any contact forms or links for spam or harmful content</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">4. External Links</h3>
            <p>
              This site may link to external sites (e.g., GitHub, LinkedIn, third-party project pages). We are not
              responsible for the content or accuracy of those sites.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">5. No Warranties</h3>
            <p>
              The content is provided "as is" without any warranties or guarantees. While we strive to ensure accuracy,
              we make no promises about completeness or reliability.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">6. Limitation of Liability</h3>
            <p>We are not liable for any damages resulting from your use of or inability to use this website.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">7. Changes to Terms</h3>
            <p>
              These terms may be updated at any time without prior notice. Continued use of the website after changes
              constitutes acceptance of the updated terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
