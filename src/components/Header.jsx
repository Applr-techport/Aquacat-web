import { useState, useEffect } from 'react'
import styles from './Header.module.css'

const links = [
  { href: '#features', label: '기능' },
  { href: '#how', label: '사용법' },
  { href: '#screenshots', label: '캐릭터' },
  { href: '#faq', label: 'FAQ' },
  { href: '#download', label: '다운로드' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const ids = links.map(l => l.href.slice(1))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: '-64px 0px 0px 0px' }
    )

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const linkClass = (href) =>
    `${styles.link} ${active === href.slice(1) ? styles.linkActive : ''}`

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo} onClick={() => setActive('')}>
          <img src="/assets/cat1.svg" alt="냥냥워터" className={styles.logoImg} />
          냥냥워터
        </a>
        <nav>
          <ul className={styles.nav}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={linkClass(href)}>{label}</a>
              </li>
            ))}
          </ul>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="메뉴"
          >
            {menuOpen ? '\u2715' : '\u2630'}
          </button>
        </nav>
      </div>
      <ul className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ''}`}>
        {links.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className={linkClass(href)} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  )
}
