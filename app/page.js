"use client";

import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Award, 
  Terminal, 
  Database, 
  Cpu, 
  Globe,
  BookOpen,
  FileCheck,
  Mic
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skills = [
  "Python", "C++", "R", "TensorFlow", "PyTorch", "OpenCV", "YOLOv8", 
  "NLP", "Flask", "FastAPI", "React", "PostgreSQL", "Power BI"
];

const certifications = [
  {
    name: "Managerial Skills for Interpersonal Dynamics",
    issuer: "IIT Roorkee (NPTEL)",
    year: "2025",
    link: "https://internalapp.nptel.ac.in/NOC/NOC25/SEM2/Ecertificates/110/noc25-mg91/Course/NPTEL25MG91S55390427310828126.pdf"
  },
  {
    name: "Data Analytics with Python",
    issuer: "IIT Ropar (NPTEL)",
    year: "2025",
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs17/Course/NPTEL25CS17S74320522904291480.pdf"
  },
  {
    name: "Deep Learning",
    issuer: "IIT Ropar (NPTEL)",
    year: "2025",
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/106/noc25-cs21/Course/NPTEL25CS21S94320722604291480.pdf"
  },
  {
    name: "Introduction to IoT",
    issuer: "NPTEL",
    year: "2024",
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs35/Course/NPTEL24CS35S55340052430699333.pdf"
  },
  {
    name: "Database Management Systems",
    issuer: "NPTEL",
    year: "2024",
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM2/Ecertificates/106/noc24-cs75/Course/NPTEL24CS75S13310439802742881.pdf"
  },
  {
    name: "Programming in Python",
    issuer: "SWAYAM",
    year: "2023",
    link: "https://drive.google.com/file/d/1HKGCC0S3w0Q1XWYkZFw0T79_R5yfU1uD/view?usp=drive_link"
  },
  {
    name: "Certified Hindi Pandit",
    issuer: "DBHPS",
    year: "Mentorship",
    link: "https://drive.google.com/file/d/1d40Sx_GmM5QTFteprw1LeS6eRZr343XO/view?usp=sharing"
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-cyan-500/30">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        className="max-w-6xl mx-auto px-6 py-20 relative z-10 space-y-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        
        <motion.section variants={itemVariants} className="space-y-6">
          <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-cyan-400 uppercase bg-cyan-400/10 rounded-full border border-cyan-400/20">
            Portfolio 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
            Sathishkumar B
          </h1>
          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl leading-relaxed">
            Artificial Intelligence & Data Science | Research • Healthcare AI • Machine Learning
          </p>
          
          <div className="flex gap-4 pt-4">
            {[
              { icon: Mail, href: "mailto:sathishkumar.balaji06@gmail.com" },
              { icon: Linkedin, href: "https://linkedin.com/in/sathishkumarb06" },
              { icon: Github, href: "#" }
            ].map((social, idx) => (
              <a 
                key={idx}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:scale-105 transition-all duration-200 text-neutral-300 hover:text-white"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Terminal className="text-cyan-400" size={24} /> About Me
            </h2>
            <p className="text-neutral-400 leading-relaxed text-lg">
              AI and Data Science professional with strong experience in healthcare-focused AI systems, applied machine learning, and research-driven innovation. Seeking to contribute to high-impact, real-world problem solving by building scalable, ethical, and data-driven solutions within a collaborative, global technology environment.
            </p>
          </div>
          
          <div className="space-y-4">
             <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Cpu className="text-cyan-400" size={24} /> Technical Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 text-sm bg-neutral-900 border border-neutral-800 rounded-md text-neutral-300 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="space-y-8">
           <h2 className="text-3xl font-semibold border-l-4 border-cyan-500 pl-4">Research & Innovation</h2>
           <div className="grid md:grid-cols-2 gap-6">
              
              <a 
                href="https://drive.google.com/file/d/1s5xU5Wk2GM3hWft5YRPUQlsP2gjx-5gz/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="block h-full group"
              >
                <Card className="h-full bg-neutral-900/50 border-neutral-800 group-hover:bg-neutral-800/60 group-hover:border-neutral-700 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-medium text-cyan-100 group-hover:text-cyan-400 transition-colors">CircuitNAS – ICEAI 2025</h3>
                      <BookOpen size={20} className="text-cyan-500" />
                    </div>
                    <div className="text-neutral-400 space-y-4">
                      <p>
                        Oral presenter for <strong>"CircuitNAS: Architecture Search for Emergent Mechanistic Interpretability"</strong>. Scheduled for publication in Springer <em>Algorithms for Intelligent Systems</em>.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </a>

              <a 
                href="https://drive.google.com/file/d/1wxr9hSnziCJI6qknJeOtMQJbf6dVMRaO/view?usp=drive_link"
                target="_blank"
                rel="noreferrer"
                className="block h-full group"
              >
                <Card className="h-full bg-neutral-900/50 border-neutral-800 group-hover:bg-neutral-800/60 group-hover:border-neutral-700 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-medium text-cyan-100 group-hover:text-cyan-400 transition-colors">Paper Presentation – ICIITCEE 2026</h3>
                      <Mic size={20} className="text-purple-500" />
                    </div>
                    <p className="text-neutral-400">
                      Presented research paper at the <strong>4th IEEE International Conference on Intelligent and Innovative Technologies in Computing, Electrical and Electronics</strong>.
                    </p>
                    <p className="text-neutral-500 text-sm mt-3">
                      BNMIT Bengaluru | 22 & 23 January 2026
                    </p>
                  </CardContent>
                </Card>
              </a>

              <Card className="bg-neutral-900/50 border-neutral-800 hover:border-cyan-500/30 transition-all duration-300 group md:col-span-2">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-medium text-cyan-100 mb-1">UK–India ALXcelerate Program</h3>
                      <p className="text-cyan-400 text-sm font-medium">Final Stage Participant | Health Group 3</p>
                    </div>
                    <Globe size={24} className="text-blue-500" />
                  </div>
                  
                  <div className="text-neutral-300 space-y-4">
                    <p className="leading-relaxed">
                      Selected as a final-stage participant in this prestigious innovation initiative, working under Health Group 3 on an <strong>AI-powered Infant Gut Health Analysis</strong> project. Our solution progressed through competitive reviews and was shortlisted for the <strong>AI Impact Summit of India 2026 (New Delhi)</strong>.
                    </p>
                    <div className="bg-neutral-950/50 p-4 rounded-lg border border-neutral-800">
                      <p className="text-sm text-neutral-400 font-semibold mb-2">Key Contributions:</p>
                      <ul className="grid md:grid-cols-2 gap-2 text-sm text-neutral-400">
                        <li className="flex gap-2"><span className="text-cyan-500">▹</span> Developed AI-driven analytical models for gut health assessment.</li>
                        <li className="flex gap-2"><span className="text-cyan-500">▹</span> Collaborated across clinical, data, and AI perspectives.</li>
                        <li className="flex gap-2"><span className="text-cyan-500">▹</span> Integrated responsible AI and interpretability principles.</li>
                        <li className="flex gap-2"><span className="text-cyan-500">▹</span> Presented to policymakers and industry leaders at the Summit.</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-neutral-900/50 border-neutral-800 hover:border-cyan-500/30 transition-all duration-300 group md:col-span-2">
                <CardContent className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
                  <div className="p-3 bg-cyan-500/10 rounded-lg">
                    <FileCheck size={28} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-cyan-100 mb-2">Invited Peer Reviewer</h3>
                    <div className="space-y-2 text-neutral-300">
                      <p>
                        <span className="text-neutral-400">Completed reviews for 2 IEEE papers:</span><br/>
                        <strong>IEEE Contemporary Computing Innovations Conference (CCIC) 2026</strong>
                      </p>
                      <p>
                        <span className="text-neutral-400">Completed reviews for 7 IEEE papers:</span><br/>
                        <strong>IEEE International Conference on AI Engineering and Innovation</strong>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

           </div>
        </motion.section>

        <motion.section variants={itemVariants} className="space-y-8">
          <h2 className="text-3xl font-semibold border-l-4 border-purple-500 pl-4">Experience & Projects</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-neutral-300 flex items-center gap-2">
                <Database size={20} /> Professional Roles
              </h3>
              
              <div className="relative border-l border-neutral-800 ml-3 pl-8 space-y-8 pb-2">
                <div className="relative">
                  <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-cyan-500 border-4 border-neutral-950" />
                  <h4 className="text-lg font-bold text-white">Artificial Intelligence Intern</h4>
                  <p className="text-sm text-cyan-400">DigitalTrack Solutions Pvt Ltd | June – July 2025</p>
                  <p className="text-neutral-400 mt-2 text-sm">
                    Implemented real-time object detection/face recognition (YOLOv8). Built Flask web apps for live processing with ONNX optimization.
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full bg-neutral-700 border-4 border-neutral-950" />
                  <h4 className="text-lg font-bold text-white">Data Analyst Intern</h4>
                  <p className="text-sm text-neutral-400">Monolith Technologies Pvt Ltd | July – Aug 2024</p>
                  <p className="text-neutral-400 mt-2 text-sm">
                    Analyzed electric vehicle adoption trends, charging infrastructure growth, and market dynamics using Python.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium text-neutral-300 flex items-center gap-2">
                <Terminal size={20} /> Featured Projects
              </h3>
              
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="text-lg font-bold text-white mb-1">MedLex</h4>
                  <p className="text-neutral-400 text-sm">
                    AI-powered hospital administration and medico-legal management system enabling secure authentication, structured medical data handling, and analytics.
                  </p>
                </div>
                
                <div className="p-5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                  <h4 className="text-lg font-bold text-white mb-1">CareIntelli</h4>
                  <p className="text-neutral-400 text-sm">
                    Next-generation AI voice assistant for healthcare that automates patient workflows, prescription digitization, and clinical documentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="space-y-8">
          <h2 className="text-3xl font-semibold border-l-4 border-green-500 pl-4">Certifications</h2>
          <p className="text-neutral-500 -mt-6">Click on a card to view the official credential.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <a 
                key={index}
                href={cert.link || "#"}
                target={cert.link ? "_blank" : "_self"}
                rel={cert.link ? "noopener noreferrer" : ""}
                className={`block group h-full ${!cert.link ? "cursor-default" : "cursor-pointer"}`}
              >
                <Card className="h-full bg-neutral-900/40 border-neutral-800 group-hover:bg-neutral-800/60 group-hover:border-neutral-700 transition-all duration-300">
                  <CardContent className="p-5 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <Award className="text-neutral-500 group-hover:text-cyan-400 transition-colors" size={24} />
                        {cert.link && <ExternalLink className="text-neutral-600 group-hover:text-white transition-colors" size={16} />}
                      </div>
                      <h3 className="font-semibold text-neutral-200 group-hover:text-white leading-tight mb-2">
                        {cert.name}
                      </h3>
                    </div>
                    <div className="mt-4 pt-4 border-t border-neutral-800 flex justify-between items-center text-xs text-neutral-500">
                      <span>{cert.issuer}</span>
                      <span>{cert.year}</span>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
             <h3 className="text-xl font-medium text-white">Awards & Honors</h3>
             <ul className="space-y-3 text-neutral-400 text-sm">
               <li className="flex gap-3 items-start">
                 <span className="text-yellow-500 mt-1">★</span>
                 Runner-Up – Navayugam 24-Hour Hackathon, IEEE TechX Madras 2025
               </li>
               <li className="flex gap-3 items-start">
                 <span className="text-yellow-500 mt-1">★</span>
                 Winner – Cyber Carnival Hackathon (2024)
               </li>
               <li className="flex gap-3 items-start">
                 <span className="text-yellow-500 mt-1">★</span>
                 Multiple prizes at national-level technical symposia (Infovista, Futura, Neuronex)
               </li>
               <li className="flex gap-3 items-start">
                 <span className="text-yellow-500 mt-1">★</span>
                 Best CSI Event Organizer (2023) | Event Head (2024–25)
               </li>
             </ul>
          </div>

          <div className="space-y-4">
             <h3 className="text-xl font-medium text-white">Volunteering</h3>
             <ul className="space-y-3 text-neutral-400 text-sm">
               <li className="flex gap-3 items-start">
                 <span className="text-green-500 mt-1">♥</span>
                 Organized rural health camps through NSS
               </li>
               <li className="flex gap-3 items-start">
                 <span className="text-green-500 mt-1">♥</span>
                 Volunteer – Times of India Green Chennai Tree Plantation Drive
               </li>
               <li className="flex gap-3 items-start">
                 <span className="text-green-500 mt-1">♥</span>
                 Coordinator – Able Aura event supporting differently-abled professionals
               </li>
             </ul>
          </div>
        </motion.section>

        <footer className="pt-12 border-t border-neutral-800 text-center text-neutral-600 text-sm">
          <p>© 2026 Sathishkumar B · AI & Data Science Portfolio</p>
        </footer>

      </motion.div>
    </div>
  );
}
