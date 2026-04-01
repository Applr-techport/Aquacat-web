import useInView from '../hooks/useInView'
import styles from './Features.module.css'

const features = [
  {
    title: '원터치 수분 기록',
    desc: '150·250·350·500ml 프리셋으로 터치 한 번에 기록. 물, 커피, 차, 주스 등 음료별 분류까지.',
    color: 'var(--color-primary)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    title: '맞춤 목표 설정',
    desc: '나이, 체중, 활동량을 기반으로 하루 권장 섭취량을 자동 계산해 드려요.',
    color: 'var(--color-success)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: '생활 패턴 알림',
    desc: '기상·식사·취침 시간에 맞춘 하루 5회 스마트 알림으로 놓치지 않아요.',
    color: 'var(--color-gold)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    title: '주간·월간 리포트',
    desc: '바 차트와 캘린더로 섭취 패턴을 한눈에. 연속 달성 스트릭도 확인하세요.',
    color: 'var(--color-danger)',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="12" width="4" height="9" rx="1" />
        <rect x="10" y="7" width="4" height="14" rx="1" />
        <rect x="17" y="3" width="4" height="18" rx="1" />
      </svg>
    ),
  },
]

export default function Features() {
  const [ref, isInView] = useInView()

  return (
    <div className={styles.wrapper} id="features">
      <section className={styles.section}>
        <h2 className={styles.title}>주요 기능</h2>
        <div
          ref={ref}
          className={`${styles.grid} ${isInView ? styles.gridVisible : ''}`}
        >
          {features.map((f, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.icon} style={{ color: f.color }}>{f.icon}</span>
              <h3 className={styles.cardTitle} style={{ color: f.color }}>{f.title}</h3>
              <p className={styles.desc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
