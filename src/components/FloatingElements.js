'use client'
import { useEffect, useState } from 'react'
import styles from './FloatingElements.module.css'

export default function FloatingElements() {
  const [elements, setElements] = useState([])
  
  const symbols = [
    '</>', '{...}', '[ ]', '#!/bin/sh', 
    'func()', 'import', 'go run', 'npm run',
    'const', '===', '++', 'git push'
  ]

  useEffect(() => {
    const newElements = symbols.map((symbol, index) => ({
      id: index,
      symbol,
      left: Math.random() * 90,
      top: Math.random() * 90,
      size: Math.random() * 15 + 12,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5
    }))
    setElements(newElements)
  }, [])

  return (
    <div className={styles.floatingContainer}>
      {elements.map(element => (
        <div
          key={element.id}
          className={styles.floatingElement}
          style={{
            left: `${element.left}%`,
            top: `${element.top}%`,
            fontSize: `${element.size}px`,
            animationDuration: `${element.duration}s`,
            animationDelay: `${element.delay}s`
          }}
        >
          {element.symbol}
        </div>
      ))}
    </div>
  )
}
