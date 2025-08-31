'use client'
import { useState, useEffect } from 'react'
import styles from './TypeWriter.module.css'

export default function TypeWriter({ text, speed = 100 }) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className={styles.typewriter}>
      {displayText}
      <span className={`${styles.cursor} ${showCursor ? styles.visible : ''}`}>|</span>
    </span>
  )
}
