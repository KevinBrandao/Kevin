import React, { ButtonHTMLAttributes } from 'react'
import { If } from "@common/If" 
import styles from "./styles.module.css"

type ButtonProps = {
  name: string
  children: React.ReactNode
  variant: "primary" | "secondary" | "danger"
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button(
  props: ButtonProps,
) {
  return (
    <button
      {...props}
      name={props.name}
      className={`${styles.buttonBase} ${styles[props.variant]}`}
      data-test={`button-${props.name}`}
    >
      <If condition={typeof props.children == "string"}>
        <span className={styles.buttonBaseSpan}>
          {props.children}
        </span>
      </If>
      <If condition={typeof props.children != "string"}>
        {props.children}
      </If>
    </button>
  )
}
