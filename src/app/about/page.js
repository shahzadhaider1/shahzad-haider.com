'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaArrowLeft, FaCode, FaRocket, FaLightbulb } from 'react-icons/fa'

export default function About() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <main className={styles.main}>
      <div className="container">
        <Link href="/" className={styles.backButton}>
          <FaArrowLeft /> Back to Home
        </Link>

        <section className={styles.aboutSection}>
          <h1 className={`${styles.title} gradient-text`}>About Me</h1>
          
          <div className={styles.content}>
            <div className={`glass-card ${styles.introCard}`}>
              <h2>Hello! {"I'm"} Shahzad Haider 👋</h2>
              <p>
                {"I'm"} a passionate software engineer specializing in backend development and microservices. 
                My journey in tech started with solving problems and evolved into building scalable systems 
                that power businesses.
              </p>
              <p>
                When {"I'm"} not crafting elegant code solutions, {"you'll"} find me strategizing in Call of Duty, 
                enjoying a thrilling game of cricket, or gazing at the stars, contemplating the vastness of 
                the universe and the endless possibilities in technology.
              </p>
            </div>

            <div className={styles.skillsGrid}>
              <div className={`glass-card ${styles.skillCard}`}>
                <FaCode className={styles.skillIcon} />
                <h3>Backend Development</h3>
                <p>Building robust, scalable server-side applications and APIs</p>
              </div>
              <div className={`glass-card ${styles.skillCard}`}>
                <FaRocket className={styles.skillIcon} />
                <h3>Microservices</h3>
                <p>Designing and implementing distributed systems architecture</p>
              </div>
              <div className={`glass-card ${styles.skillCard}`}>
                <FaLightbulb className={styles.skillIcon} />
                <h3>Innovation</h3>
                <p>Continuous learning and exploring cutting-edge technologies</p>
              </div>
            </div>

            <div className={`glass-card ${styles.aspirations}`}>
              <h2>My Vision 🚀</h2>
              <p>
                I believe in continuous learning and aspire to become an entrepreneur, using technology 
                to create impactful solutions that make a difference in {"people's"} lives. My goal is to 
                bridge the gap between complex technical solutions and real-world problems, making 
                technology accessible and beneficial for everyone.
              </p>
            </div>

            <div className={styles.connect}>
              <h2>{"Let's"} Connect!</h2>
              <div className="social-links">
                <a 
                  href="https://github.com/shahzadhaider1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <FaGithub size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/shahzadhaider7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
