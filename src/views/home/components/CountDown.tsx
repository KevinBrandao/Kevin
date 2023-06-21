import React, { useEffect, useMemo, useState } from 'react'
import {
  differenceInMonths,
  differenceInHours,
  differenceInWeeks,
  differenceInDays,
  differenceInMinutes,
  differenceInSeconds,
  subMonths,
  subWeeks,
  addHours
} from 'date-fns'
import { If } from '@common/If'
import { CounterHours, TimeToTarget } from './Counter'

const targetDate = new Date(2023, 8, 19, 11, 0, 0)
export function CountDown() {
  const [now, setNow] = useState(new Date())
  const timeToTarget: TimeToTarget = useMemo(() => {
    const nowIsAfter = now.getTime() > targetDate.getTime()
    const months = differenceInMonths(targetDate, now)
    const weeks = differenceInWeeks(subMonths(targetDate,months), now)
    const days = differenceInDays(targetDate, subWeeks(subMonths(now, months),weeks))
    const hours = differenceInHours(targetDate, now)
    const minutes = differenceInMinutes(targetDate, now)
    const seconds = differenceInSeconds(targetDate, now)

    return {
      months,
      days,
      weeks,
      hours,
      minutes,
      seconds,
      nowIsAfter
    }
  }, [now])
  let Counter = () => {
    if(timeToTarget.nowIsAfter){
      // TODO: code for first 23 hours
      return <CounterHours timeToTarget={timeToTarget} />
      // TODO: code for first 29 days
      // TODO: code for first 11 months
      // TODO: code for first 9 years

    } else{
      // TODO: code for last 6 weeks
      // TODO: code for last 10 days
      // TODO: code for last 24 hours
      // TODO: code for last hour
      return <CounterHours timeToTarget={timeToTarget} />
    }
  }


  useEffect(() => {
    const counter = setInterval(() => {
      setNow(new Date())
    }, 1000)
    return () => clearInterval(counter)
  }, [])
  return (
    <>
      <section>
        <If condition={now.getTime() < targetDate.getTime()}>
          <h3>Faltam</h3>
          <Counter />
        </If>
        <If condition={now.getTime() > addHours(targetDate, 1).getTime()}>
          <h3>Casados há</h3>
          <Counter />
        </If>
      </section>
    </>
  )
}
