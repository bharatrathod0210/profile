"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, FileText, Github } from "lucide-react";

export default function Hero() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center text-center">
          <div
            className="inline-block mb-4 px-4 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs animate-pulse"
            style={{ animationDuration: "3s" }}
          >
            Welcome to my portfolio
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">
            Hi, I'm{" "}
            <span className="text-[#58a6ff] relative">
              Bharat Rathod
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#58a6ff] animate-pulse"></span>
            </span>
          </h1>

          <h2
            ref={textRef}
            className="text-xl md:text-2xl mb-6 h-8 text-[#8b949e]"
          ></h2>

          <p className="max-w-2xl text-sm md:text-base mb-8 text-[#8b949e] animate-fadeInUp animation-delay-200">
            I build responsive web applications with modern technologies. With 1
            year of experience in MERN stack development, I've worked on various
            projects and complex tasks including third-party integrations.
          </p>

          <div
            ref={containerRef}
            className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-300 transition-transform duration-200 ease-out"
          >
            <Button
              onClick={scrollToProjects}
              className="bg-[#238636] hover:bg-[#2ea043] text-white border-none relative overflow-hidden group"
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
        <ArrowDown className="h-6 w-6 text-[#58a6ff]" />
      </div>

      {/* Animated shapes */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-[#58a6ff] opacity-5 animate-pulse"></div>
      <div
        className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-[#238636] opacity-5 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-/3 right-1/4 w-16 h-16 rounded-full bg-[#f0883e] opacity-5 animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
}
