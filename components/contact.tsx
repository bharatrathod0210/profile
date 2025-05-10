"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

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
    <section id="contact" ref={sectionRef} className="py-20 bg-[#161b22] relative overflow-hidden">
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
            Get In Touch
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#58a6ff]">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-white animate-pulse"></div>
            </div>
          </h2>
          <p className="mt-6 text-sm text-[#8b949e] max-w-2xl mx-auto">
            Feel free to contact me for any work or suggestions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-on-scroll opacity-0">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 h-full relative overflow-hidden group hover:border-[#58a6ff] transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#58a6ff]/5 via-transparent to-[#238636]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <h3 className="text-xl font-semibold mb-6 group-hover:text-[#58a6ff] transition-colors duration-300 relative z-10">
                Contact Information
              </h3>

              <div className="space-y-6 relative z-10">
                <div className="flex items-start transform transition-transform duration-500 group-hover:translate-x-2">
                  <div className="w-10 h-10 rounded-full bg-[#161b22] flex items-center justify-center mr-4 relative">
                    <Mail className="h-5 w-5 text-[#58a6ff]" />
                    <div
                      className="absolute inset-0 rounded-full border border-[#58a6ff] animate-ping opacity-30"
                      style={{ animationDuration: "3s" }}
                    ></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium group-hover:text-[#58a6ff] transition-colors duration-300">
                      Email
                    </h4>
                    <p className="text-sm text-[#8b949e] group-hover:text-[#c9d1d9] transition-colors duration-300">
                      bharat.rathod0210@gmail.com
                    </p>
                  </div>
                </div>  

                <div
                  className="flex items-start transform transition-transform duration-500 group-hover:translate-x-2"
                  style={{ transitionDelay: "100ms" }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#161b22] flex items-center justify-center mr-4 relative">
                    <Phone className="h-5 w-5 text-[#58a6ff]" />
                    <div
                      className="absolute inset-0 rounded-full border border-[#58a6ff] animate-ping opacity-30"
                      style={{ animationDuration: "3s", animationDelay: "1s" }}
                    ></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium group-hover:text-[#58a6ff] transition-colors duration-300">
                      Phone
                    </h4>
                    <p className="text-sm text-[#8b949e] group-hover:text-[#c9d1d9] transition-colors duration-300">
                      +91 9898515206
                    </p>
                  </div>
                </div>

                <div
                  className="flex items-start transform transition-transform duration-500 group-hover:translate-x-2"
                  style={{ transitionDelay: "200ms" }}
                >
                  <div className="w-10 h-10 rounded-full bg-[#161b22] flex items-center justify-center mr-4 relative">
                    <MapPin className="h-5 w-5 text-[#58a6ff]" />
                    <div
                      className="absolute inset-0 rounded-full border border-[#58a6ff] animate-ping opacity-30"
                      style={{ animationDuration: "3s", animationDelay: "2s" }}
                    ></div>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium group-hover:text-[#58a6ff] transition-colors duration-300">
                      Location
                    </h4>
                    <p className="text-sm text-[#8b949e] group-hover:text-[#c9d1d9] transition-colors duration-300">
                      Bhavnagar, Gujarat, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 relative z-10">
                <h4 className="text-sm font-medium mb-4 group-hover:text-[#58a6ff] transition-colors duration-300">
                  Connect with me
                </h4>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-[#30363d] hover:bg-[#30363d] hover:text-[#58a6ff] relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-full h-full bg-[#58a6ff]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    <Github className="h-5 w-5 relative z-10" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-[#30363d] hover:bg-[#30363d] hover:text-[#58a6ff] relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-full h-full bg-[#58a6ff]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    <Linkedin className="h-5 w-5 relative z-10" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-[#30363d] hover:bg-[#30363d] hover:text-[#58a6ff] relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 w-full h-full bg-[#58a6ff]/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                    <Twitter className="h-5 w-5 relative z-10" />
                  </Button>
                </div>
              </div>

              {/* Animated corner effect */}
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#58a6ff]/10 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0" style={{ animationDelay: "200ms" }}>
            <div className="bg-[#0d1117] border border-[#30363d] rounded-lg p-6 relative overflow-hidden group hover:border-[#58a6ff] transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#58a6ff]/5 via-transparent to-[#238636]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <h3 className="text-xl font-semibold mb-6 group-hover:text-[#58a6ff] transition-colors duration-300 relative z-10">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="relative z-10">
                <div className="grid grid-cols-1 gap-4">
                  <div className="relative group">
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="bg-[#161b22] border-[#30363d] focus:border-[#58a6ff] focus:ring-[#58a6ff] transition-all duration-300 group-hover:border-[#58a6ff]/50"
                      required
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58a6ff] group-hover:w-full transition-all duration-500"></div>
                  </div>

                  <div className="relative group">
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="bg-[#161b22] border-[#30363d] focus:border-[#58a6ff] focus:ring-[#58a6ff] transition-all duration-300 group-hover:border-[#58a6ff]/50"
                      required
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58a6ff] group-hover:w-full transition-all duration-500"></div>
                  </div>

                  <div className="relative group">
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="bg-[#161b22] border-[#30363d] focus:border-[#58a6ff] focus:ring-[#58a6ff] transition-all duration-300 group-hover:border-[#58a6ff]/50"
                      required
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58a6ff] group-hover:w-full transition-all duration-500"></div>
                  </div>

                  <div className="relative group">
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="bg-[#161b22] border-[#30363d] focus:border-[#58a6ff] focus:ring-[#58a6ff] min-h-[120px] transition-all duration-300 group-hover:border-[#58a6ff]/50"
                      required
                    />
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#58a6ff] group-hover:w-full transition-all duration-500"></div>
                  </div>

                  <div>
                    <Button
                      type="submit"
                      className="w-full bg-[#238636] hover:bg-[#2ea043] relative overflow-hidden group"
                      disabled={isSubmitting || isSubmitted}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-5 w-5 border-2 border-t-white border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mr-2"></div>
                          Sending...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#238636] via-[#58a6ff] to-[#238636] animate-gradient-x"></span>
                          <span className="relative z-10">Message Sent!</span>
                        </>
                      ) : (
                        <>
                          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
                          <Send className="mr-2 h-4 w-4" /> Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </form>

              {/* Animated corner effect */}
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#58a6ff]/10 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
