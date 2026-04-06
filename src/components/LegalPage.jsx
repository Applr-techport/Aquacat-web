import styles from './LegalPage.module.css'

// Legal.jsx에서 콘텐츠 데이터를 재사용
import { privacyContent, termsContent } from './legalData'

export default function LegalPage({ type }) {
  const content = type === 'privacy' ? privacyContent : termsContent

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>{content.title}</h1>
          <p className={styles.appName}>냥냥워터</p>
        </header>
        <main className={styles.body}>
          <p className={styles.date}>시행일: 2026년 4월 1일</p>
          {content.sections.map((sec, i) => (
            <section key={i}>
              <h2 className={styles.sectionTitle}>{sec.heading}</h2>
              {sec.paragraphs.map((p, j) => (
                <p key={j} className={styles.paragraph}>{p}</p>
              ))}
            </section>
          ))}
        </main>
        <footer className={styles.footer}>
          <a href="/" className={styles.backLink}>← 홈으로 돌아가기</a>
        </footer>
      </div>
    </div>
  )
}
