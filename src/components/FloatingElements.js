'use client'
import { useEffect, useState, useRef } from 'react'
import styles from './FloatingElements.module.css'

export default function FloatingElements() {
  const [elements, setElements] = useState([])
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)
  
  const symbols = [
    '</>', '{...}', '[ ]', '#!/bin/sh', 
    'func()', 'import', 'go run', 'npm run',
    'const', '++', 'git push',
    'docker run', 'kubectl', 'SELECT *', 'async',
    'go mod tidy', 'go build', 'chan <-',
  ]

  useEffect(() => {
    const newElements = symbols.map((symbol, index) => ({
      id: index,
      symbol,
      left: Math.random() * 90,
      top: Math.random() * 90,
      size: Math.random() * 15 + 12,
      duration: Math.random() * 30 + 20,
      delay: Math.random() * 5
    }))
    setElements(newElements)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className={styles.floatingContainer}>
      {elements.map(element => (
        <div
          key={element.id}
          className={styles.floatingElement}
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            fontSize: `${element.size}px`,
            animationDuration: `${element.duration}s`,
            animationDelay: `${element.delay}s`,
            transform: `translate(
              ${(mousePos.x - 50) * 0.02 * (element.id % 3)}px,
              ${(mousePos.y - 50) * 0.02 * (element.id % 3)}px
            )`
          }}
        >
          {element.symbol}
        </div>
      ))}
    </div>
  )
}
