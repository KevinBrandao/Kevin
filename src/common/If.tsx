import React, { ReactNode } from 'react'

export function If({
  condition,
  children,
}: {
  condition: boolean
  children: ReactNode
}) {
  if (condition) {
    return <>{children}</>
  }
  return <></>
}
