"use client"

import { useEffect, useRef } from "react"
import lottie from "lottie-web"

interface LottiePlayerProps {
  animationData: string
  className?: string
  height?: number
  width?: number
}

export default function LottiePlayer({ animationData, className, height = 200, width = 400 }: LottiePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<any>(null)

  useEffect(() => {
    if (containerRef.current) {
      fetch(animationData)
        .then((response) => response.json())
        .then((data) => {
          if (animationRef.current) {
            animationRef.current.destroy()
          }

          animationRef.current = lottie.loadAnimation({
            container: containerRef.current!,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: data,
          })
        })
        .catch((error) => {
          console.error("Error loading Lottie animation:", error)
        })
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy()
      }
    }
  }, [animationData])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: width,
        height: height,
        overflow: "hidden",
      }}
    />
  )
}
