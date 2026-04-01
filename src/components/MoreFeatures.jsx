import useInView from '../hooks/useInView'
import styles from './MoreFeatures.module.css'

const items = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: '홈 위젯',
    desc: '앱을 열지 않아도 홈 화면에서 실시간 섭취량을 확인하세요.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2" /><path d="M12 20v2" />
        <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
        <path d="M2 12h2" /><path d="M20 12h2" />
        <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
      </svg>
    ),
    title: '다크모드',
    desc: '시스템 설정 연동 또는 수동 전환으로 눈의 피로를 줄여줘요.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 15l-3-3h6l-3 3z" fill="currentColor" stroke="none" />
        <path d="M20 21v-2a4 4 0 0 0-3-3.87" /><path d="M4 21v-2a4 4 0 0 1 3-3.87" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: '맞춤 목표 공식',
    desc: '나이대별 체중 계수 + 활동량 보정으로 과학적 목표를 제안해요.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
        <circle cx="12" cy="8" r="7" />
      </svg>
    ),
    title: '업적 시스템',
    desc: '연속 달성 스트릭과 잠금 해제 배지로 꾸준한 습관을 만들어요.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: '시간대별 인사',
    desc: '새벽부터 저녁까지 6단계로 달라지는 고양이의 맞춤 인사말.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4" /><path d="M8 2v4" /><path d="M3 10h18" />
        <circle cx="8" cy="16" r="1" fill="currentColor" stroke="none" />
        <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
        <circle cx="16" cy="16" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
    title: '월간 캘린더',
    desc: '달성률에 따라 색상이 바뀌는 캘린더로 한 달을 한눈에.',
  },
]

export default function MoreFeatures() {
  const [ref, isInView] = useInView()

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>이런 기능도 있어요</h2>
      <div
        ref={ref}
        className={`${styles.grid} ${isInView ? styles.gridVisible : ''}`}
      >
        {items.map((item, i) => (
          <div key={i} className={styles.card}>
            <span className={styles.icon}>{item.icon}</span>
            <div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
