import React from 'react'
import { InputContext } from '@common/forms'
import { ConfirmarPresenca } from '@views/confirmar_presenca'
import { DEFAULT_VALUES, presenceInfoValidator } from 'services/presenca_infos'

export default function ConfirmarPresencaPage() {
  return (
    <InputContext defaultValues={DEFAULT_VALUES} schema={presenceInfoValidator}>
      <ConfirmarPresenca />
    </InputContext>
  )
}
