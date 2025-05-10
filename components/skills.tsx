"use client"

import { useEffect, useRef, useState } from "react"

interface TechLogo {
  name: string
  color: string
  icon: string
  rotation: number
  scale: number
}

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const logosContainerRef = useRef<HTMLDivElement>(null)
  const [logos, setLogos] = useState<TechLogo[]>([
    { name: "HTML5", icon: "/placeholder.svg?height=50&width=50", color: "#E34F26", rotation: 0, scale: 1 },
    { name: "CSS3", icon: "/placeholder.svg?height=50&width=50", color: "#1572B6", rotation: 0, scale: 1 },
    { name: "JavaScript", icon: "/placeholder.svg?height=50&width=50", color: "#F7DF1E", rotation: 0, scale: 1 },
    { name: "TypeScript", icon: "/placeholder.svg?height=50&width=50", color: "#3178C6", rotation: 0, scale: 1 },
    { name: "React", icon: "/placeholder.svg?height=50&width=50", color: "#61DAFB", rotation: 0, scale: 1 },
    { name: "Node.js", icon: "/placeholder.svg?height=50&width=50", color: "#339933", rotation: 0, scale: 1 },
    { name: "Express", icon: "/placeholder.svg?height=50&width=50", color: "#000000", rotation: 0, scale: 1 },
    { name: "MongoDB", icon: "/placeholder.svg?height=50&width=50", color: "#47A248", rotation: 0, scale: 1 },
    { name: "Redux", icon: "/placeholder.svg?height=50&width=50", color: "#764ABC", rotation: 0, scale: 1 },
    { name: "Next.js", icon: "/placeholder.svg?height=50&width=50", color: "#000000", rotation: 0, scale: 1 },
    { name: "Tailwind CSS", icon: "/placeholder.svg?height=50&width=50", color: "#06B6D4", rotation: 0, scale: 1 },
    { name: "Git", icon: "/placeholder.svg?height=50&width=50", color: "#F05032", rotation: 0, scale: 1 },
  ])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  useEffect(() => {
    // Animate logos
    const animateLogos = () => {
      setLogos((prevLogos) =>
        prevLogos.map((logo) => ({
          ...logo,
          rotation: Math.random() * 10 - 5,
          scale: 0.95 + Math.random() * 0.1,
        })),
      )
    }

    const interval = setInterval(animateLogos, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const container = logosContainerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      const logoElements = container.querySelectorAll(".logo-item")
      logoElements.forEach((el, index) => {
        const depth = 1 + (index % 3) * 0.2
        const translateX = x * 30 * depth
        const translateY = y * 30 * depth

        el.setAttribute("style", `transform: translate(${translateX}px, ${translateY}px)`)
      })
    }

    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-[#161b22] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div
            className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-[#58a6ff] animate-pulse"
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-[#238636] animate-pulse"
            style={{ animationDuration: "6s" }}
          ></div>
          <div
            className="absolute top-2/3 left-1/2 w-24 h-24 rounded-full bg-[#f0883e] animate-pulse"
            style={{ animationDuration: "5s" }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 relative inline-block">
            My Skills
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#58a6ff]">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-white animate-pulse"></div>
            </div>
          </h2>
          <p className="mt-6 text-sm text-[#8b949e] max-w-2xl mx-auto">
            Here are the technologies and tools I work with on a daily basis
          </p>
        </div>

        <div ref={logosContainerRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {logos.map((logo, index) => (
            <div
              key={logo.name}
              className="logo-item animate-on-scroll opacity-0 bg-[#0d1117] border border-[#30363d] rounded-lg p-4 flex flex-col items-center justify-center transition-all duration-500 hover:border-[#58a6ff] hover:shadow-lg hover:shadow-[#58a6ff]/10"
              style={{
                animationDelay: `${index * 100}ms`,
                transform: `rotate(${logo.rotation}deg) scale(${logo.scale})`,
                transition: "transform 2s ease-in-out, border-color 0.3s, box-shadow 0.3s",
              }}
            >
              <div
                className="w-16 h-16 mb-3 flex items-center justify-center rounded-lg relative overflow-hidden group"
                style={{ backgroundColor: `${logo.color}20` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#58a6ff]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="w-12 h-12 bg-[#0d1117] rounded-md flex items-center justify-center relative z-10">
                  <span
                    className="text-2xl font-bold transition-all duration-300 group-hover:scale-110"
                    style={{ color: logo.color }}
                  >
                    {logo.name.charAt(0)}
                  </span>
                </div>
                <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#58a6ff]/5 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              </div>
              <h3 className="text-xs font-medium">{logo.name}</h3>

              {/* Animated dots */}
              <div
                className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full bg-[#58a6ff] opacity-70 animate-ping"
                style={{ animationDuration: "3s", animationDelay: `${index * 0.2}s` }}
              ></div>
            </div>
          ))}
        </div>

        <div className="mt-16 animate-on-scroll opacity-0">
          <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 relative overflow-hidden group hover:border-[#58a6ff] transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#58a6ff]/5 via-transparent to-[#238636]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <h3 className="text-xl font-semibold mb-4 relative">
              Development Workflow
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58a6ff] group-hover:w-full transition-all duration-700"></span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              <div className="bg-[#161b22] rounded-lg p-4 border border-[#30363d] transform transition-transform duration-500 hover:scale-105 hover:border-[#58a6ff] hover:shadow-lg hover:shadow-[#58a6ff]/10">
                <div className="w-10 h-10 rounded-full bg-[#0d1117] flex items-center justify-center mb-3 relative">
                  <span className="text-[#58a6ff] font-bold relative z-10">1</span>
                  <div
                    className="absolute inset-0 rounded-full border border-[#58a6ff] animate-ping opacity-30"
                    style={{ animationDuration: "3s" }}
                  ></div>
                </div>
                <h4 className="text-sm font-medium mb-2">Planning & Design</h4>
                <p className="text-xs text-[#8b949e]">
                  Understanding requirements, creating wireframes, and planning the architecture
                </p>
              </div>

              <div className="bg-[#161b22] rounded-lg p-4 border border-[#30363d] transform transition-transform duration-500 hover:scale-105 hover:border-[#58a6ff] hover:shadow-lg hover:shadow-[#58a6ff]/10">
                <div className="w-10 h-10 rounded-full bg-[#0d1117] flex items-center justify-center mb-3 relative">
                  <span className="text-[#58a6ff] font-bold relative z-10">2</span>
                  <div
                    className="absolute inset-0 rounded-full border border-[#58a6ff] animate-ping opacity-30"
                    style={{ animationDuration: "3s", animationDelay: "1s" }}
                  ></div>
                </div>
                <h4 className="text-sm font-medium mb-2">Development</h4>
                <p className="text-xs text-[#8b949e]">
                  Writing clean, efficient, and maintainable code following best practices
                </p>
              </div>

              <div className="bg-[#161b22] rounded-lg p-4 border border-[#30363d] transform transition-transform duration-500 hover:scale-105 hover:border-[#58a6ff] hover:shadow-lg hover:shadow-[#58a6ff]/10">
                <div className="w-10 h-10 rounded-full bg-[#0d1117] flex items-center justify-center mb-3 relative">
                  <span className="text-[#58a6ff] font-bold relative z-10">3</span>
                  <div
                    className="absolute inset-0 rounded-full border border-[#58a6ff] animate-ping opacity-30"
                    style={{ animationDuration: "3s", animationDelay: "2s" }}
                  ></div>
                </div>
                <h4 className="text-sm font-medium mb-2">Testing & Deployment</h4>
                <p className="text-xs text-[#8b949e]">
                  Thorough testing, debugging, and deploying applications to production
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
