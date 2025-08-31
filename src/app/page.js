'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.css'
import Header from '@/components/Header'
import TypeWriter from '@/components/TypeWriter'
import FloatingElements from '@/components/FloatingElements'
import { FaGamepad, FaStar, FaCamera, FaCode } from 'react-icons/fa'
import { MdSportsCricket, MdSportsSoccer } from 'react-icons/md'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const funFacts = [
    { icon: <FaGamepad />, text: "Shahzad loves playing Call of Duty and exploring new game strategies." },
    { icon: <FaStar />, text: "He's fascinated by the universe and enjoys stargazing!" },
    { icon: <MdSportsCricket />, text: "Cricket and Football are not just sports to him; they're a passion." },
    { icon: <FaCamera />, text: "Photography helps him capture the beauty he sees around." },
    { icon: <FaCode />, text: "Backend development and microservices are his specialties." },
  ]

  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.hero}>
          <FloatingElements />
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              <TypeWriter text="Welcome to Shahzad Haider's Portfolio" />
            </h1>
            <p className={styles.tagline}>
              Backend Engineer | Microservices Expert | Tech Entrepreneur
            </p>
            <div className={styles.cta}>
              <a href="/about" className="btn-primary">
                Explore My Journey
              </a>
              <a href="https://github.com/shahzadhaider1" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                View GitHub
              </a>
            </div>
          </div>
        </section>

        <section className={styles.funFacts}>
          <div className="container">
            <h2 className={`${styles.sectionTitle} gradient-text`}>Did You Know?</h2>
            <div className={styles.factsGrid}>
              {mounted && funFacts.map((fact, index) => (
                <div 
                  key={index} 
                  className={`glass-card ${styles.factCard}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.factIcon}>{fact.icon}</div>
                  <p>{fact.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
