import React, { ReactNode } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";

export function InputContext({
  children,
  defaultValues,
  schema
}: {
  defaultValues: any
  children: ReactNode
  schema: any
}) {
  const methods = useForm({
    defaultValues: defaultValues,
    mode:"onBlur",
    resolver: zodResolver(schema),
  })

  return <FormProvider {...methods}>{children}</FormProvider>
}
