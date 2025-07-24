import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content:
      "John delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made our project a huge success.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Michael Chen",
    role: "Product Manager, InnovateCorp",
    content:
      "Working with John was a pleasure. He understood our requirements perfectly and delivered a scalable solution on time. Highly recommended!",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, CreativeStudio",
    content:
      "John's full-stack development skills are outstanding. He built our entire web application from scratch and it's been running flawlessly for months.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "David Thompson",
    role: "CTO, DataFlow Solutions",
    content:
      "Exceptional developer with great communication skills. John transformed our complex requirements into an elegant, user-friendly application.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Lisa Wang",
    role: "Marketing Director, GrowthLab",
    content:
      "John's expertise in React and Next.js helped us launch our platform ahead of schedule. His code quality and documentation are top-notch.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    name: "Alex Kumar",
    role: "Startup Founder, AppVenture",
    content:
      "From concept to deployment, John guided us through every step. His technical insights and problem-solving abilities are remarkable.",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export default function ReviewsSection() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review, index) => (
        <Card key={index} className="h-full">
          <CardContent className="p-6 flex flex-col h-full">
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-muted-foreground mb-4 flex-grow">"{review.content}"</p>
            <div className="flex items-center gap-3">
              <img
                src={review.avatar || "/placeholder.svg"}
                alt={review.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-sm">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
