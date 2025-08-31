'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Header from '@/components/Header'
import TypeWriter from '@/components/TypeWriter'
import FloatingElements from '@/components/FloatingElements'
import { FaServer, FaDocker, FaGitAlt, FaDatabase, FaCloud, FaCode } from 'react-icons/fa'
import { SiGo, SiKubernetes, SiPostgresql, SiRedis } from 'react-icons/si'
import Link from 'next/link'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const techStack = [
    { icon: <SiGo />, name: "Go", category: "Language" },
    { icon: <FaServer />, name: "Microservices", category: "Architecture" },
    { icon: <FaDocker />, name: "Docker", category: "DevOps" },
    { icon: <SiKubernetes />, name: "Kubernetes", category: "Orchestration" },
    { icon: <SiPostgresql />, name: "PostgreSQL", category: "Database" },
    { icon: <SiRedis />, name: "Redis", category: "Cache" },
    { icon: <FaGitAlt />, name: "Git", category: "Version Control" },
    { icon: <FaCloud />, name: "Cloud Native", category: "Infrastructure" },
  ]

  const projects = [
    {
      title: "Distributed Task Queue",
      description: "High-performance task queue system built with Go and Redis for handling millions of background jobs",
      tech: ["Go", "Redis", "Docker"],
      icon: <FaServer />
    },
    {
      title: "Microservices API Gateway",
      description: "Custom API gateway with rate limiting, authentication, and request routing for microservices",
      tech: ["Go", "gRPC", "JWT"],
      icon: <FaCloud />
    },
    {
      title: "Real-time Analytics Pipeline",
      description: "Event-driven data pipeline processing real-time user analytics with sub-second latency",
      tech: ["Kafka", "PostgreSQL", "Go"],
      icon: <FaDatabase />
    }
  ]

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <FloatingElements />
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              <TypeWriter text="Hi, I'm Shahzad Haider" />
            </h1>
            <p className={styles.tagline}>
              Backend Engineer | Building Scalable Systems | Go Enthusiast
            </p>
            <p className={styles.description}>
              I craft robust backend solutions and microservices that power modern applications.
              Passionate about distributed systems, clean code, and turning complex problems into elegant solutions.
            </p>
            <div className={styles.cta}>
              <Link href="/about" className="btn-primary">
                Learn More About Me
              </Link>
              <a href="https://github.com/shahzadhaider1" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                View My Code
              </a>
            </div>
          </div>
        </section>

        <section className={styles.techSection}>
          <div className="container">
            <h2 className={`${styles.sectionTitle} gradient-text`}>Tech Stack</h2>
            <p className={styles.sectionSubtitle}>Technologies I work with daily</p>
            <div className={styles.techGrid}>
              {mounted && techStack.map((tech, index) => (
                <div 
                  key={index} 
                  className={`glass-card ${styles.techCard}`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className={styles.techIcon}>{tech.icon}</div>
                  <h3>{tech.name}</h3>
                  <span className={styles.techCategory}>{tech.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.projectsSection}>
          <div className="container">
            <h2 className={`${styles.sectionTitle} gradient-text`}>Featured Projects</h2>
            <p className={styles.sectionSubtitle}>Some things {"I've"} built</p>
            <div className={styles.projectsGrid}>
              {mounted && projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`glass-card ${styles.projectCard}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.projectIcon}>{project.icon}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className={styles.projectTech}>
                    {project.tech.map((tech, i) => (
                      <span key={i} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.quickAbout}>
          <div className="container">
            <div className={`glass-card ${styles.aboutCard}`}>
              <h2 className="gradient-text">Quick Facts</h2>
              <div className={styles.factsGrid}>
                <div className={styles.fact}>
                  <FaCode className={styles.factIcon} />
                  <div>
                    <h4>Problem Solver</h4>
                    <p>Love tackling complex backend challenges and optimizing system performance</p>
                  </div>
                </div>
                <div className={styles.fact}>
                  <FaServer className={styles.factIcon} />
                  <div>
                    <h4>System Designer</h4>
                    <p>Experienced in designing scalable microservices and distributed systems</p>
                  </div>
                </div>
                <div className={styles.fact}>
                  <FaCloud className={styles.factIcon} />
                  <div>
                    <h4>Cloud Native</h4>
                    <p>Building containerized applications ready for modern cloud infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
