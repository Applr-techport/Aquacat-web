import useInView from '../hooks/useInView'
import styles from './HowItWorks.module.css'

const steps = [
  { num: '1', title: '프로필을 입력하세요', desc: '나이, 체중, 활동량만 입력하면 나에게 맞는 하루 목표량이 자동으로 설정돼요.' },
  { num: '2', title: '알림 시간을 정하세요', desc: '기상·식사·취침 시간을 설정하면 하루 5회 최적 타이밍에 알림을 보내드려요.' },
  { num: '3', title: '터치 한 번으로 기록하세요', desc: '프리셋 버튼 하나로 기록 끝. 고양이가 행복해지고, 통계가 쌓여요.' },
]

export default function HowItWorks() {
  const [ref, isInView] = useInView()

  return (
    <section className={styles.section} id="how">
      <h2 className={styles.title}>이렇게 사용해요</h2>
      <div
        ref={ref}
        className={`${styles.grid} ${isInView ? styles.gridVisible : ''}`}
      >
        {steps.map((s, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.num}>{s.num}</span>
            <h3 className={styles.cardTitle}>{s.title}</h3>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
