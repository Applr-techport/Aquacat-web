import useInView from '../hooks/useInView'
import styles from './Numbers.module.css'

const stats = [
  { value: '5', unit: '가지', label: '고양이 감정 상태' },
  { value: '7', unit: '개', label: '지원 언어' },
  { value: '5', unit: '회', label: '하루 스마트 알림' },
  { value: '5', unit: '종', label: '음료 카테고리' },
]

export default function Numbers() {
  const [ref, isInView] = useInView()

  return (
    <div className={styles.wrapper}>
      <section className={styles.section}>
        <h2 className={styles.title}>숫자로 보는 냥냥워터</h2>
        <div
          ref={ref}
          className={`${styles.grid} ${isInView ? styles.gridVisible : ''}`}
        >
          {stats.map((s, i) => (
            <div key={i} className={styles.card}>
              <p className={styles.value}>
                {s.value}<span className={styles.unit}>{s.unit}</span>
              </p>
              <p className={styles.label}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
