"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code, Star, GitFork } from "lucide-react"

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const [filter, setFilter] = useState("all")
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Sample projects - you can replace these with your actual projects
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with user authentication, product management, cart functionality, and payment integration.",
      image: "/placeholder.svg?height=200&width=400",
      category: "fullstack",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux"],
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A task management application with drag-and-drop functionality, user roles, and real-time updates.",
      image: "/placeholder.svg?height=200&width=400",
      category: "frontend",
      technologies: ["React", "Redux", "Socket.io", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Blog Platform",
      description: "A blog platform with markdown support, user authentication, and comment system.",
      image: "/placeholder.svg?height=200&width=400",
      category: "fullstack",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      id: 4,
      title: "API Service",
      description: "A RESTful API service for data management with authentication and authorization.",
      image: "/placeholder.svg?height=200&width=400",
      category: "backend",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      github: "#",
      demo: "#",
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current and forecasted weather data from multiple sources.",
      image: "/placeholder.svg?height=200&width=400",
      category: "frontend",
      technologies: ["React", "Chart.js", "API Integration"],
      github: "#",
      demo: "#",
    },
    {
      id: 6,
      title: "Chat Application",
      description: "A real-time chat application with private messaging and group chat functionality.",
      image: "/placeholder.svg?height=200&width=400",
      category: "fullstack",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      github: "#",
      demo: "#",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

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

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-[#0d1117] relative overflow-hidden">
      {/* Background code patterns */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <pre className="text-[8px] text-[#58a6ff] whitespace-pre-wrap opacity-20">
            {`
              import React, { useState, useEffect } from 'react';
              import { useRouter } from 'next/router';
              
              function ProjectCard({ title, description, image, technologies }) {
                const [isHovered, setIsHovered] = useState(false);
                
                return (
                  <div 
                    className="card" 
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <img src={image || "/placeholder.svg"} alt={title} />
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="technologies">
                      {technologies.map(tech => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    {isHovered && (
                      <div className="overlay">
                        <button>View Project</button>
                      </div>
                    )}
                  </div>
                );
              }
              
              export default function Projects() {
                const [projects, setProjects] = useState([]);
                
                useEffect(() => {
                  // Fetch projects data
                  async function fetchProjects() {
                    const res = await fetch('/api/projects');
                    const data = await res.json();
                    setProjects(data);
                  }
                  
                  fetchProjects();
                }, []);
                
                return (
                  <section className="projects-section">
                    <h2>My Projects</h2>
                    <div className="projects-grid">
                      {projects.map(project => (
                        <ProjectCard key={project.id} {...project} />
                      ))}
                    </div>
                  </section>
                );
              }
            `}
          </pre>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 relative inline-block">
            My Projects
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#58a6ff]">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-white animate-pulse"></div>
            </div>
          </h2>
          <p className="mt-6 text-sm text-[#8b949e] max-w-2xl mx-auto">
            Here are some of the projects I've worked on. You can filter them by category.
          </p>
        </div>

        <div className="flex justify-center mb-8 animate-on-scroll opacity-0">
          <div className="inline-flex p-1 bg-[#161b22] rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#58a6ff]/10 via-transparent to-[#58a6ff]/10 animate-gradient-x"></div>

            <Button
              variant={filter === "all" ? "default" : "ghost"}
              onClick={() => setFilter("all")}
              className={
                filter === "all" ? "bg-[#238636] hover:bg-[#2ea043] relative z-10" : "hover:bg-[#30363d] relative z-10"
              }
              size="sm"
            >
              All
            </Button>
            <Button
              variant={filter === "frontend" ? "default" : "ghost"}
              onClick={() => setFilter("frontend")}
              className={
                filter === "frontend"
                  ? "bg-[#238636] hover:bg-[#2ea043] relative z-10"
                  : "hover:bg-[#30363d] relative z-10"
              }
              size="sm"
            >
              Frontend
            </Button>
            <Button
              variant={filter === "backend" ? "default" : "ghost"}
              onClick={() => setFilter("backend")}
              className={
                filter === "backend"
                  ? "bg-[#238636] hover:bg-[#2ea043] relative z-10"
                  : "hover:bg-[#30363d] relative z-10"
              }
              size="sm"
            >
              Backend
            </Button>
            <Button
              variant={filter === "fullstack" ? "default" : "ghost"}
              onClick={() => setFilter("fullstack")}
              className={
                filter === "fullstack"
                  ? "bg-[#238636] hover:bg-[#2ea043] relative z-10"
                  : "hover:bg-[#30363d] relative z-10"
              }
              size="sm"
            >
              Full Stack
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="animate-on-scroll opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <Card className="bg-[#161b22] border-[#30363d] overflow-hidden h-full flex flex-col hover:border-[#58a6ff] transition-all duration-500 hover:shadow-lg hover:shadow-[#58a6ff]/10 group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#58a6ff]/5 via-transparent to-[#238636]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative h-48 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] to-transparent"></div>

                  {/* Animated overlay on hover */}
                  <div className="absolute inset-0 bg-[#58a6ff]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-[#0d1117]/80 border-[#58a6ff] text-[#58a6ff] hover:bg-[#58a6ff] hover:text-[#0d1117] transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" /> View Project
                      </Button>
                    </div>
                  </div>
                </div>

                <CardHeader className="pb-2 relative z-10">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-[#58a6ff] group-hover:text-[#58a6ff] transition-colors duration-300">
                      {project.title}
                      <span className="block w-0 h-0.5 bg-[#58a6ff] group-hover:w-full transition-all duration-500"></span>
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center text-xs text-[#8b949e] group-hover:text-[#58a6ff] transition-colors duration-300">
                        <Star className={`h-3 w-3 mr-1 ${hoveredCard === project.id ? "animate-pulse" : ""}`} />
                        <span>24</span>
                      </div>
                      <div className="flex items-center text-xs text-[#8b949e] group-hover:text-[#58a6ff] transition-colors duration-300">
                        <GitFork className={`h-3 w-3 mr-1 ${hoveredCard === project.id ? "animate-pulse" : ""}`} />
                        <span>8</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-xs text-[#8b949e] group-hover:text-[#c9d1d9] transition-colors duration-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-2 flex-grow relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded-full bg-[#0d1117] text-[#8b949e] group-hover:bg-[#30363d] group-hover:text-[#c9d1d9] transition-all duration-300 transform hover:scale-105"
                        style={{ transitionDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-2 border-t border-[#30363d] relative z-10">
                  <div className="flex justify-between w-full">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs hover:bg-[#30363d] group-hover:text-[#58a6ff] transition-colors duration-300"
                    >
                      <Github className="h-3 w-3 mr-1" /> Code
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs hover:bg-[#30363d] group-hover:text-[#58a6ff] transition-colors duration-300"
                    >
                      <ExternalLink className="h-3 w-3 mr-1" /> Demo
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-xs hover:bg-[#30363d] group-hover:text-[#58a6ff] transition-colors duration-300"
                    >
                      <Code className="h-3 w-3 mr-1" /> Details
                    </Button>
                  </div>
                </CardFooter>

                {/* Animated corner effect */}
                <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#58a6ff]/10 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
              </Card>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll opacity-0">
          <Button className="bg-[#238636] hover:bg-[#2ea043] relative overflow-hidden group" asChild>
            <a href="https://github.com/bharatrathod0210" target="_blank" rel="noopener noreferrer">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
              <Github className="mr-2 h-4 w-4" /> View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
