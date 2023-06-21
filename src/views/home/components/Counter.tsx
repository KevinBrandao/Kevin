import styles from './counter.styles.module.css'

export type TimeToTarget = {
  months: number
  days: number
  weeks: number
  hours: number
  minutes: number
  seconds: number
  nowIsAfter: boolean
}
export function NumberToFlip(props: { value: number; next: number }) {
  return (
    <>
      <div className={styles.nums}>
        <div
          className={styles.num}
          data-num={props.value}
          data-num-flip={props.next}
        ></div>
      </div>
    </>
  )
}
export function Number2CasesToFLip(props: {
  value: number
  turnOver: boolean
  isDown: boolean
}) {
  const multiplier = props.isDown ? -1 : 1
  if (props.value >= 10) {
    if (props.turnOver) {
      return (
        <div>
          <NumberToFlip value={Math.floor(props.value / 10)} next={0} />
          <NumberToFlip value={props.value % 10} next={0} />
        </div>
      )
    }
    return (
      <div>
        <NumberToFlip
          value={Math.floor(props.value / 10)}
          next={Math.floor(props.value / 10) + 1 * multiplier}
        />
        <NumberToFlip
          value={props.value % 10}
          next={(props.value % 10) + 1 * multiplier}
        />
      </div>
    )
  }
  return (
    <div>
      <NumberToFlip value={0} next={0} />
      <NumberToFlip value={props.value} next={props.value + 1 * multiplier} />
    </div>
  )
}
const monthsToCompleteYear = 12
export function CounterMonth({timeToTarget}: {timeToTarget: TimeToTarget}) {
  let turnOverNumber = 1
  if (timeToTarget.nowIsAfter) {
    turnOverNumber = monthsToCompleteYear - 1
  } 
  return (
    <>
      <Number2CasesToFLip
        value={timeToTarget.months}
        turnOver={timeToTarget.months == turnOverNumber}
        isDown={!timeToTarget.nowIsAfter}
      />
    </>
  )
}
const DaysToCompleteAMonth = 30
export function CounterDays({timeToTarget}: {timeToTarget: TimeToTarget}) {
  let turnOverNumber = 1
  if (timeToTarget.nowIsAfter) {
    turnOverNumber = DaysToCompleteAMonth - 1
  } 
  return (
    <>
      <Number2CasesToFLip
        value={timeToTarget.days}
        turnOver={timeToTarget.days == turnOverNumber}
        isDown={!timeToTarget.nowIsAfter}
      />
    </>
  )
}
const hoursToCompleteDay = 24
export function CounterHours({timeToTarget}: {timeToTarget: TimeToTarget}) {
  let turnOverNumber = 1
  if (timeToTarget.nowIsAfter) {
    turnOverNumber = hoursToCompleteDay - 1
  } else {
    turnOverNumber = 1
  }
  return (
    <>
      <Number2CasesToFLip
        value={timeToTarget.hours}
        turnOver={timeToTarget.hours == turnOverNumber}
        isDown={!timeToTarget.nowIsAfter}
      />
    </>
  )
}
const minutesToCompleteHour = 60
export function CounterMinutes({timeToTarget}: {timeToTarget: TimeToTarget}) {
  let turnOverNumber
  if (timeToTarget.nowIsAfter) {
    turnOverNumber = minutesToCompleteHour - 1
  } else {
    turnOverNumber = 1
  }
  return (
    <>
      <Number2CasesToFLip
        value={timeToTarget.minutes}
        turnOver={timeToTarget.minutes == turnOverNumber}
        isDown={!timeToTarget.nowIsAfter}
      />
    </>
  )
}