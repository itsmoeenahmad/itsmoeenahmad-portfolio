"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/mzzgqgnp", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      alert("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div>
          <label htmlFor="name" className="block text-white mb-2 text-sm sm:text-base">
            Your Name
          </label>
          <Input
            type="text"
            name="name"
            id="name"
            required
            className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-10 sm:h-12"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-white mb-2 text-sm sm:text-base">
            Your Email
          </label>
          <Input
            type="email"
            name="email"
            id="email"
            required
            className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-10 sm:h-12"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-white mb-2 text-sm sm:text-base">
            Your Message
          </label>
          <Textarea
            name="message"
            id="message"
            rows={5}
            required
            className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 resize-none min-h-[120px] sm:min-h-[150px]"
            placeholder="Your message..."
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-white text-[#0a0e27] hover:bg-gray-100 font-medium h-10 sm:h-12"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        {isSubmitted && (
          <div className="mt-6 text-center">
            <p className="text-green-400 text-base sm:text-lg font-medium">
              Thank you for your message! I'll get back to you soon.
            </p>
          </div>
        )}
      </form>
    </div>
  )
}
