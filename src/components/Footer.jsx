import styles from './Footer.module.css'

export default function Footer({ onLegal }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <button className={styles.link} onClick={() => onLegal('privacy')}>
          개인정보처리방침
        </button>
        <button className={styles.link} onClick={() => onLegal('terms')}>
          이용약관
        </button>
      </div>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} 냥냥워터 (AquaCat). All rights reserved.
      </p>
    </footer>
  )
}
