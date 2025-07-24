"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation variables
    let animationId: number
    let time = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      time += 0.01

      // Set line style
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 1

      // Draw animated curved lines
      const numLines = 30
      const spacing = canvas.width / numLines

      for (let i = 0; i < numLines; i++) {
        ctx.beginPath()

        const startX = i * spacing + Math.sin(time + i * 0.1) * 50
        const startY = canvas.height * 0.8 + Math.sin(time + i * 0.2) * 100

        const controlX1 = startX + 200 + Math.cos(time + i * 0.15) * 100
        const controlY1 = startY - 300 + Math.sin(time + i * 0.25) * 50

        const controlX2 = startX + 400 + Math.sin(time + i * 0.3) * 80
        const controlY2 = startY - 600 + Math.cos(time + i * 0.35) * 60

        const endX = startX + 600 + Math.cos(time + i * 0.4) * 120
        const endY = startY - 800 + Math.sin(time + i * 0.45) * 80

        ctx.moveTo(startX, startY)
        ctx.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY)
        ctx.stroke()
      }

      // Draw additional diagonal lines
      for (let i = 0; i < 20; i++) {
        ctx.beginPath()
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.05 + Math.sin(time + i * 0.1) * 0.03})`

        const x1 = -200 + i * 80 + Math.sin(time + i * 0.2) * 30
        const y1 = canvas.height + Math.cos(time + i * 0.15) * 50
        const x2 = x1 + 400 + Math.sin(time + i * 0.3) * 100
        const y2 = y1 - 600 + Math.cos(time + i * 0.25) * 80

        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.stroke()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ background: "transparent" }} />
  )
}
