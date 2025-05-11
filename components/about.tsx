"use client"

import { useEffect, useRef } from "react"
import { GraduationCap, Briefcase, Award } from "lucide-react"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

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
    <section id="about" ref={sectionRef} className="py-20 bg-[#0d1117] relative overflow-hidden">
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
            About Me
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#58a6ff]">
              <div className="absolute top-0 left-0 h-full w-1/3 bg-white animate-pulse"></div>
            </div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-on-scroll opacity-0">
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 h-full relative overflow-hidden group hover:border-[#58a6ff] transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#58a6ff]/5 via-transparent to-[#238636]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="flex items-center mb-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#0d1117] flex items-center justify-center mr-4 relative">
                  <GraduationCap className="h-6 w-6 text-[#58a6ff]" />
                  <div
                    className="absolute inset-0 rounded-full border border-[#58a6ff] animate-ping opacity-30"
                    style={{ animationDuration: "3s" }}
                  ></div>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-[#58a6ff] transition-colors duration-300">
                  Education
                </h3>
              </div>

              <div className="pl-16 relative z-10">
                <div className="mb-4 transform transition-transform duration-500 group-hover:translate-x-2">
                  <h4 className="text-[#58a6ff] font-medium">Bachelor of Computer Applications (BCA)</h4>
                  <p className="text-sm text-[#8b949e] group-hover:text-[#c9d1d9] transition-colors duration-300">
                    Shree Swaminarayan College of Computer Science, Bhavnagar
                  </p>
                  <div className="flex items-center mt-1">
                    <span className="text-xs px-2 py-1 rounded-full bg-[#0d1117] text-[#8b949e] group-hover:bg-[#30363d] group-hover:text-[#c9d1d9] transition-all duration-300">
                      2021 - 2024
                    </span>
                  </div>
                </div>
              </div>

              {/* Animated corner effect */}
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#58a6ff]/10 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </div>
          </div>

          <div className="animate-on-scroll opacity-0" style={{ animationDelay: "200ms" }}>
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 h-full relative overflow-hidden group hover:border-[#58a6ff] transition-colors duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#58a6ff]/5 via-transparent to-[#238636]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="flex items-center mb-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#0d1117] flex items-center justify-center mr-4 relative">
                  <Briefcase className="h-6 w-6 text-[#58a6ff]" />
                  <div
                    className="absolute inset-0 rounded-full border border-[#58a6ff] animate-ping opacity-30"
                    style={{ animationDuration: "3s" }}
                  ></div>
                </div>
                <h3 className="text-xl font-semibold group-hover:text-[#58a6ff] transition-colors duration-300">
                  Experience
                </h3>
              </div>

              <div className="pl-16 relative z-10">
                <div className="mb-4 transform transition-transform duration-500 group-hover:translate-x-2">
                  <h4 className="text-[#58a6ff] font-medium">MERN Stack Developer</h4>
                  <p className="text-sm text-[#8b949e] group-hover:text-[#c9d1d9] transition-colors duration-300">
                    1 Year of Experience
                  </p>
                  <ul className="list-disc list-inside text-xs text-[#8b949e] mt-2 space-y-1 group-hover:text-[#c9d1d9] transition-colors duration-300">
                    <li className="transform transition-all duration-300 hover:translate-x-1 hover:text-[#58a6ff]">
                      Developed responsive web applications
                    </li>
                    <li
                      className="transform transition-all duration-300 hover:translate-x-1 hover:text-[#58a6ff]"
                      style={{ transitionDelay: "50ms" }}
                    >
                      Implemented complex features and tasks
                    </li>
                    <li
                      className="transform transition-all duration-300 hover:translate-x-1 hover:text-[#58a6ff]"
                      style={{ transitionDelay: "100ms" }}
                    >
                      Integrated third-party services
                    </li>
                    <li
                      className="transform transition-all duration-300 hover:translate-x-1 hover:text-[#58a6ff]"
                      style={{ transitionDelay: "150ms" }}
                    >
                      Worked on full-stack development
                    </li>
                  </ul>
                </div>
              </div>

              {/* Animated corner effect */}
              <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#58a6ff]/10 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
            </div>
          </div>
        </div>

        <div
          className="mt-12 bg-[#161b22] border border-[#30363d] rounded-lg p-6 animate-on-scroll opacity-0 relative overflow-hidden group hover:border-[#58a6ff] transition-colors duration-300"
          style={{ animationDelay: "400ms" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#58a6ff]/5 via-transparent to-[#238636]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

          <div className="flex items-center mb-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-[#0d1117] flex items-center justify-center mr-4 relative">
              <Award className="h-6 w-6 text-[#58a6ff]" />
              <div
                className="absolute inset-0 rounded-full border border-[#58a6ff] animate-ping opacity-30"
                style={{ animationDuration: "3s" }}
              ></div>
            </div>
            <h3 className="text-xl font-semibold group-hover:text-[#58a6ff] transition-colors duration-300">
              About Me
            </h3>
          </div>

          <div className="pl-16 relative z-10">
            <p className="text-sm text-[#8b949e] mb-4 group-hover:text-[#c9d1d9] transition-colors duration-300 transform transition-transform duration-500 group-hover:translate-x-2">
              I am a passionate MERN Stack Developer with a strong foundation in building web applications. My journey
              in web development began during my BCA studies at Shree Swaminarayan College of Computer Science in
              Bhavnagar, where I developed a keen interest in creating interactive and user-friendly web experiences.
            </p>
            <p
              className="text-sm text-[#8b949e] group-hover:text-[#c9d1d9] transition-colors duration-300 transform transition-transform duration-500 group-hover:translate-x-2"
              style={{ transitionDelay: "100ms" }}
            >
              With 1 year of professional experience, I've had the opportunity to work on various projects, tackle
              complex tasks, and implement third-party integrations. I'm constantly learning and improving my skills to
              stay updated with the latest technologies and best practices in web development.
            </p>
          </div>

          {/* Animated corner effect */}
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-[#58a6ff]/10 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>

          {/* Code snippets floating in background */}
          <div className="absolute -bottom-2 -left-2 text-[8px] text-[#58a6ff] opacity-0 group-hover:opacity-10 transition-opacity duration-700">
            {`const developer = { name: 'Bharat', skills: ['React', 'Node', 'MongoDB'] }`}
          </div>
          <div className="absolute -top-2 -right-2 text-[8px] text-[#58a6ff] opacity-0 group-hover:opacity-10 transition-opacity duration-700">
            {`function createApp() { return new Promise(resolve => resolve('Success!')) }`}
          </div>
        </div>
      </div>
    </section>
  )
}
