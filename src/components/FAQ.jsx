import { useState } from 'react'
import useInView from '../hooks/useInView'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: '냥냥워터는 무료인가요?',
    a: '네! 수분 기록, 알림, 통계, 캐릭터 등 모든 핵심 기능은 무료예요. 광고 제거는 ₩1,900 일회성 구매로 가능합니다.',
  },
  {
    q: '하루 목표량은 어떻게 정해지나요?',
    a: '나이대별 체중 계수(20대 37ml/kg ~ 50대 27ml/kg)에 활동량 보정을 더해 자동 계산돼요. 예를 들어 30대, 70kg, 보통 활동이면 하루 2,300ml이 목표로 설정됩니다.',
  },
  {
    q: '알림은 언제 오나요?',
    a: '기상 후, 아침·점심·저녁 식사 30분 후, 취침 2시간 전까지 하루 5회 알림이 와요. 기상/식사/취침 시간은 직접 설정할 수 있습니다.',
  },
  {
    q: '어떤 언어를 지원하나요?',
    a: '한국어, English, 日本語, 中文, Español, Tiếng Việt 총 7개 언어를 지원해요. 시스템 언어를 자동 감지하거나, 앱 설정에서 직접 변경할 수 있습니다. UI, 알림 메시지, 고양이 대사까지 모두 현지화되어 있어요.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [ref, isInView] = useInView()

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className={styles.wrapper}>
      <section className={styles.section} id="faq">
        <h2 className={styles.title}>자주 묻는 질문</h2>
        <div
          ref={ref}
          className={`${styles.list} ${isInView ? styles.listVisible : ''}`}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`${styles.item} ${openIndex === i ? styles.itemOpen : ''}`}
            >
              <button className={styles.question} onClick={() => toggle(i)}>
                <span>{faq.q}</span>
                <span className={styles.arrow}>{openIndex === i ? '\u2212' : '\u002B'}</span>
              </button>
              <div className={styles.answer}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
