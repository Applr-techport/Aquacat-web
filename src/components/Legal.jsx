import { useEffect } from 'react'
import styles from './Legal.module.css'
import { privacyContent, termsContent } from './legalData'

export default function Legal({ type, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const content = type === 'privacy' ? privacyContent : termsContent

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.page} onClick={(e) => e.stopPropagation()}>
        <header className={styles.header}>
          <h1 className={styles.title}>{content.title}</h1>
          <button className={styles.close} onClick={onClose} aria-label="닫기">
            &#x2715;
          </button>
        </header>
        <div className={styles.body}>
          <p className={styles.date}>시행일: 2026년 4월 1일</p>
          {content.sections.map((sec, i) => (
            <section key={i}>
              <h2 className={styles.sectionTitle}>{sec.heading}</h2>
              {sec.paragraphs.map((p, j) => (
                <p key={j} className={styles.paragraph}>{p}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
