"use client"

import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useEffect } from "react"

interface PrivacyPolicyModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
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
          <h2 className="text-xl font-semibold text-white">Privacy Policy</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(80vh-120px)] text-gray-300 space-y-4">
          <p className="text-sm text-gray-400">Last Updated: July 6, 2025</p>

          <p>
            Thank you for visiting itsmoeenahmad.online. This Privacy Policy outlines how we handle your data when you
            visit this website.
          </p>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">1. Information We Collect</h3>
            <p className="mb-2">
              This website does not collect any personally identifiable information (PII) such as your name, email, or
              phone number.
            </p>
            <p className="mb-2">However, we may collect non-personal information such as:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Your IP address</li>
              <li>Browser type</li>
              <li>Pages visited</li>
              <li>Time spent on the site</li>
            </ul>
            <p className="mt-2">
              This data is collected anonymously using standard web analytics tools (e.g., Google Analytics) to
              understand how visitors interact with the website.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">2. Cookies</h3>
            <p className="mb-2">
              We may use cookies to enhance your browsing experience. Cookies are small files stored on your device that
              help us analyze website traffic or remember your preferences.
            </p>
            <p>You can choose to disable cookies through your browser settings.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">3. Third-Party Links</h3>
            <p>
              This website may contain links to third-party websites (e.g., GitHub, LinkedIn, project links). Once you
              leave this website, we are not responsible for the privacy practices of those sites.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">4. Security</h3>
            <p>
              While we do not collect sensitive information, we take reasonable measures to ensure the site is secure
              and up to date.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">5. Changes to This Policy</h3>
            <p>
              This Privacy Policy may be updated from time to time. Any changes will be posted on this page with the
              revised date.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-2">6. Contact</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact:{" "}
              <a href="mailto:itsmoeenahmad@gmail.com" className="text-blue-400 hover:text-blue-300 underline">
                itsmoeenahmad@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
