import useInView from '../hooks/useInView'
import styles from './Screenshots.module.css'

const catStates = [
  { src: '/assets/normal.svg', label: '보통', desc: '평소 상태의 고양이' },
  { src: '/assets/happy.svg', label: '행복', desc: '물을 잘 마셨을 때' },
  { src: '/assets/perfect.svg', label: '완벽', desc: '목표 달성!' },
  { src: '/assets/thirsty.svg', label: '목마름', desc: '물이 부족해요' },
  { src: '/assets/critical.svg', label: '위험', desc: '지금 당장 물을!' },
]

export default function Screenshots() {
  const [titleRef, titleInView] = useInView()
  const [gridRef, gridInView] = useInView()

  return (
    <section className={styles.section} id="screenshots">
      <h2
        ref={titleRef}
        className={`${styles.title} ${titleInView ? styles.titleVisible : ''}`}
      >
        고양이의 다양한 모습
      </h2>
      <div
        ref={gridRef}
        className={`${styles.grid} ${gridInView ? styles.gridVisible : ''}`}
      >
        {catStates.map((cat, i) => (
          <div key={i} className={styles.card}>
            <img src={cat.src} alt={cat.label} className={styles.image} />
            <p className={styles.label}>{cat.label}</p>
            <p className={styles.desc}>{cat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
