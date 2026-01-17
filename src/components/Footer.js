import styles from './Footer.module.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Shahzad Haider. All Rights Reserved.
          </p>
          <div className={styles.socialLinks}>
            <a 
              href="https://github.com/shahzadhaider1" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/shahzadhaider7" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
