"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-10">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Hero Section */}
        <section className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Sathishkumar B
          </motion.h1>
          <p className="text-xl text-neutral-400 max-w-3xl">
            Artificial Intelligence & Data Science | Research • Healthcare AI • Machine Learning
          </p>
          <div className="flex gap-6 text-neutral-300">
            <a href="mailto:sathishkumar.balaji06@gmail.com"><Mail /></a>
            <a href="https://linkedin.com/in/sathishkumarb06" target="_blank"><Linkedin /></a>
            <a href="#" target="_blank"><Github /></a>
          </div>
        </section>

        {/* About */}
        <section>
          <h2 className="text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-neutral-300 leading-relaxed max-w-4xl">
            AI and Data Science professional with strong experience in healthcare-focused AI systems, applied machine learning, and research-driven innovation. Seeking to contribute to high-impact, real-world problem solving by building scalable, ethical, and data-driven solutions within a collaborative, global technology environment.
          </p>
        </section>

        {/* Research */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Research & Academic Contributions</h2>
          <Card>
            <CardContent className="p-6 space-y-2">
              <h3 className="text-xl font-medium">CircuitNAS – ICEAI 2025</h3>
              <p className="text-neutral-400">
                Oral presenter at the 3rd International Conference on Evolutionary Artificial Intelligence (ICEAI 2025). The paper titled <strong>“CircuitNAS: Architecture Search for Emergent Mechanistic Interpretability via Circuit Optimization”</strong> is scheduled for publication in the Springer <em>Algorithms for Intelligent Systems</em> book series.
              </p>
            </CardContent>
          </Card>
          <p className="mt-4 text-neutral-400">Invited Reviewer – IEEE Contemporary Computing Innovations Conference (CCIC) 2026</p>
        </section>

        {/* International Program */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">International Innovation Program</h2>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-medium">UK–India ALxcelerate Program (2025–26)</h3>
              <p className="text-neutral-400 mt-2">
                Final-stage participant in a competitive UK–India international innovation initiative supported by Infosys and The Dialogue (UK-based policy think tank). Collaborated with a cross-disciplinary international team to develop an AI-driven Infant Gut Health Analysis solution, integrating medical expertise with data-driven AI approaches.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Professional Experience</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium">Artificial Intelligence Intern</h3>
                <p className="text-neutral-400 text-sm">DigitalTrack Solutions Pvt Ltd | June – July 2025</p>
                <p className="mt-2 text-neutral-300">
                  Designed and implemented a real-time object detection and face recognition system using YOLOv8. Developed a Flask-based web application for live image and video processing with optimized inference using ONNX and embedding storage.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium">Data Analyst Intern</h3>
                <p className="text-neutral-400 text-sm">Monolith Technologies Pvt Ltd | July – August 2024</p>
                <p className="mt-2 text-neutral-300">
                  Analyzed electric vehicle adoption trends, charging infrastructure growth, and market dynamics using Python-based data analytics and visualization techniques.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6 space-y-2">
                <h3 className="font-medium text-lg">MedLex</h3>
                <p className="text-neutral-400">AI-powered hospital administration and medico-legal management system enabling secure authentication, structured medical data handling, analytics dashboards, and optimized clinical workflows.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 space-y-2">
                <h3 className="font-medium text-lg">CareIntelli</h3>
                <p className="text-neutral-400">Next-generation AI voice assistant for healthcare that automates patient workflows, prescription digitization, and clinical documentation using NLP, OCR, and speech recognition.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Technical Skills</h2>
          <p className="text-neutral-300 max-w-4xl">
            <strong>Programming:</strong> Python, C, C++, R <br />
            <strong>AI & Data:</strong> Pandas, NumPy, scikit-learn, Matplotlib <br />
            <strong>Web & Backend:</strong> Flask, FastAPI, HTML, CSS <br />
            <strong>Databases:</strong> MySQL, PostgreSQL <br />
            <strong>Tools:</strong> Power BI, VS Code, MS Office, Google Workspace
          </p>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Certifications</h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2">
            <li>Managerial Skills for Interpersonal Dynamics – IIT Roorkee (NPTEL, 2025)</li>
            <li>Data Analytics with Python & Deep Learning – IIT Ropar (NPTEL, 2025)</li>
            <li>Database Management Systems – NPTEL (2024)</li>
            <li>Introduction to IoT – NPTEL (2024)</li>
            <li>Programming in Python – SWAYAM (2023)</li>
            <li>Certified Hindi Pandit (DBHPS) – Mentored students for Hindi examinations for 3+ years</li>
          </ul>
        </section>

        {/* Awards */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Awards & Honors</h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2">
            <li>Runner-Up – Navayugam 24-Hour Hackathon, IEEE TechX Madras 2025</li>
            <li>Winner – Cyber Carnival Hackathon (2024)</li>
            <li>Multiple prizes at national-level technical symposia including Infovista, Futura, Neuronex, and Convergence</li>
            <li>Best CSI Event Organizer (2023) | Event Head (2024–25)</li>
          </ul>
        </section>

        {/* Volunteering */}
        <section>
          <h2 className="text-3xl font-semibold mb-6">Volunteer & Leadership Experience</h2>
          <ul className="list-disc list-inside text-neutral-300 space-y-2">
            <li>Organized rural health camps through NSS demonstrating leadership and community engagement</li>
            <li>Volunteer – Times of India Green Chennai Tree Plantation Drive</li>
            <li>Coordinator – Able Aura event supporting differently-abled professionals</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="pt-10 border-t border-neutral-800 text-neutral-500 text-sm">
          © 2026 Sathishkumar B · AI & Data Science Portfolio
        </footer>
      </div>
    </div>
  );
}
