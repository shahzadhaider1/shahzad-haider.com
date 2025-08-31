'use client'
import styles from './Header.module.css'
import Link from 'next/link'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            <span className="gradient-text">SH</span>
          </Link>
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>Home</Link>
            <Link href="/about" className={styles.navLink}>About</Link>
            <a href="https://github.com/shahzadhaider1" target="_blank" rel="noopener noreferrer" className={styles.navLink}>
              GitHub
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
