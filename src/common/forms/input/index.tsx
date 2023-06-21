import React, { InputHTMLAttributes } from 'react'
import { Controller, FieldErrors, FieldValues, useFormContext } from 'react-hook-form'

type InputProps = {
  name: string
  label: string
  default?: string
  hide?: boolean
  mask?: string
}

export function Input(
  props: InputProps & InputHTMLAttributes<HTMLInputElement>,
) {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const propertyNames = props.name.split('.');

  let errorMessage: any = errors;
  for (let i = 0; i < propertyNames.length; i++) {
    const propertyName = propertyNames[i];
    if (errorMessage?.hasOwnProperty(propertyName)) {
      errorMessage = errorMessage[propertyName];
    } else {
      errorMessage = undefined;
      break;
    }
  }
  if(props.name.includes("nomes"))
    console.log("nomes", props.name.replace(/(\w+)\.(\d+)(\.\w+)/g,"$1[$2]$3"), errors[props.name.replace(/(\w+)\.(\d+)(\.\w+)/g,"$1[$2]$3")]?.message)
  return (
    <section className="form_wrapper">
      <Controller
        name={props.name}
        control={control}
        defaultValue={!!props.default ? props.default : ''}
        render={({ field }) => (
          <div
            className="form_group"
            style={{ display: props.hide ? 'none' : '' }}
          >
            <label className="form_label" htmlFor={props.name}>
              {props.label}
            </label>
              <input
                className="form_field"
                {...props}
                placeholder={props.placeholder || props.label}
                {...field}
                data-test={`input-${props.name}`}
              />
          </div>
        )}
      />
      <p className="form_error">{errorMessage?.message as string}</p>
    </section>
  )
}
