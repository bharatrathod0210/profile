"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Github } from "lucide-react";

export default function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const textElement = textRef.current;
    if (!textElement) return;

    const text = "MERN Stack Developer";
    let index = 0;
    let direction = 1;
    let timer: NodeJS.Timeout;

    const typeText = () => {
      if (!textElement) return;

      if (direction === 1) {
        // Typing forward
        index++;
        textElement.textContent = text.substring(0, index);

        if (index >= text.length) {
          direction = 0;
          timer = setTimeout(typeText, 1500); // Pause at the end
          return;
        }
      } else {
        // Erasing
        index--;
        textElement.textContent = text.substring(0, index);

        if (index <= 0) {
          direction = 1;
          timer = setTimeout(typeText, 500); // Pause before retyping
          return;
        }
      }

      const speed = direction === 1 ? 100 : 50; // Type slower, erase faster
      timer = setTimeout(typeText, speed);
    };

    timer = setTimeout(typeText, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      container.style.transform = `perspective(1000px) rotateY(${
        x * 3
      }deg) rotateX(${y * -3}deg)`;
    };

    container.addEventListener("mousemove", handleMouseMove);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Create code particles
  useEffect(() => {
    // Create code particles container
    const particlesContainer = document.createElement("div");
    particlesContainer.className =
      "absolute inset-0 pointer-events-none z-1 overflow-hidden";

    const heroSection = document.getElementById("home");
    if (!heroSection) return;

    heroSection.appendChild(particlesContainer);

    // Code characters
    const codeChars = "<>{}[]()=/|&?!;:+-*#$%^".split("");

    // Create particles
    const particleCount = 30;
    const particles: HTMLElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      const size = Math.random() * 20 + 10;
      const char = codeChars[Math.floor(Math.random() * codeChars.length)];

      particle.textContent = char;
      particle.className = "absolute text-[#58a6ff] opacity-10 font-mono";
      particle.style.fontSize = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.transform = `rotate(${Math.random() * 360}deg)`;
      particle.style.animation = `float ${
        Math.random() * 10 + 15
      }s linear infinite`;
      particle.style.animationDelay = `${Math.random() * 5}s`;

      particlesContainer.appendChild(particle);
      particles.push(particle);
    }

    // Animation loop to change characters occasionally
    const interval = setInterval(() => {
      particles.forEach((particle) => {
        if (Math.random() > 0.95) {
          particle.textContent =
            codeChars[Math.floor(Math.random() * codeChars.length)];
        }
      });
    }, 2000);

    return () => {
      clearInterval(interval);
      if (particlesContainer.parentNode) {
        heroSection.removeChild(particlesContainer);
      }
    };
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d1117] via-[#161b22] to-[#0d1117] z-0"></div>
      <div className="absolute inset-0 bg-cyber-grid opacity-30 z-0"></div>

      <div className="absolute top-1/4 left-1/5 w-64 h-64 rounded-full bg-gradient-radial from-[#58a6ff]/40 to-transparent opacity-40 animate-pulse-slow"></div>
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-radial from-[#238636]/40 to-transparent opacity-40 animate-pulse-slow"
        style={{ animationDelay: "1.5s" }}
      ></div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center text-center">
          <div
            className={`inline-block mb-4 px-4 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs ${
              isVisible ? "animate-fadeIn" : "opacity-0"
            }`}
            style={{
              animationDuration: "1s",
              boxShadow: "0 0 10px rgba(88, 166, 255, 0.1)",
            }}
          >
            <span className="animate-code-glow">Welcome to my portfolio</span>
          </div>

          <h1
            className={`text-4xl md:text-6xl font-bold mb-4 ${
              isVisible ? "animate-fadeInUp" : "opacity-0"
            }`}
          >
            Hi, I'm{" "}
            <span className="text-[#58a6ff] relative">
              Bharat Rathod
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#58a6ff] via-[#58a6ff]/70 to-[#58a6ff] animate-gradient-x"></span>
            </span>
          </h1>

          <div className="relative h-8 mb-6">
            <h2
              ref={textRef}
              className="text-xl md:text-2xl text-[#8b949e] inline-block"
            ></h2>
            <span
              className="inline-block w-[2px] h-[1.2em] bg-[#58a6ff] ml-1 animate-pulse"
              style={{ animationDuration: "0.8s" }}
            ></span>
          </div>

          <p
            className={`max-w-2xl text-sm md:text-base mb-8 text-[#8b949e] ${
              isVisible ? "animate-fadeInUp animation-delay-200" : "opacity-0"
            }`}
          >
            I build responsive web applications with modern technologies. With 1
            year of experience in MERN stack development, I've worked on various
            projects and complex tasks including third-party integrations.
          </p>

          <div
            ref={containerRef}
            className={`flex flex-col sm:flex-row gap-4 ${
              isVisible ? "animate-fadeInUp animation-delay-300" : "opacity-0"
            } transition-transform duration-200 ease-out`}
          >
            <Button
              onClick={scrollToProjects}
              className="bg-[#238636] hover:bg-[#2ea043] text-white border-none relative overflow-hidden group neon-border"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
              View Projects{" "}
              <ArrowDown className="ml-2 h-4 w-4 animate-bounce" />
            </Button>

            <Button
              variant="outline"
              className="border-[#30363d] hover:bg-[#30363d] relative overflow-hidden group"
              asChild
            >
              <a
                href="https://github.com/bharatrathod0210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
                <Github className="mr-2 h-4 w-4" /> GitHub Profile
              </a>
            </Button>

            <Button
              variant="outline"
              className="border-[#30363d] hover:bg-[#30363d] relative overflow-hidden group"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/1_CMeQ72y5W9mJ3S-yJypK3E4bb8d8EgU/view?usp=drive_link"
                download="Bharat_Rathod_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
                <FileText className="mr-2 h-4 w-4" /> Download CV
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="p-2 rounded-full bg-[#161b22]/50 border border-[#30363d] animate-code-glow">
          <ArrowDown className="h-6 w-6 text-[#58a6ff]" />
        </div>
      </div>

      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#58a6ff]/30 to-[#58a6ff]/10 opacity-50 animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-[#238636]/30 to-[#238636]/10 opacity-50 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-gradient-to-br from-[#f0883e]/30 to-[#f0883e]/10 opacity-50 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
}
