import { z } from 'zod'
export type PresenceInfo = {
  nome: string
  telefone: string
  qtdePessoas: number
  nomes: string[]
}

export const presenceInfoValidator = z.object({
  nome: z
    .string({
      required_error: 'Nome é obrigatório',
      invalid_type_error: 'Nome precisa de conter letras somente',
    })
    .min(3, { message: 'Mínimo 3 caracteres' })
    .max(100, { message: 'Máximo 100 caracteres' })
    .regex(/\D/gm, "Use somente letras"),
  telefone: z
    .string({
      required_error: 'Telefone é obrigatório',
      invalid_type_error: 'Telefone precisa de conter apenas números',
    })
    .min(11, { message: 'Mínimo 11 caracteres' })
    .max(15, { message: 'Máximo 15 caracteres' })
    .regex(/(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/gm, {
      message: 'Utilize o formato: "(16) 99999-9999"',
    }),
  qtdePessoas: z.number().min(1, { message: 'Mínimo 1 pessoa' }),
  nomes: z
    .array(
      z.object({
        nome: z.string({ required_error: 'Nome é obrigatório' })
        .min(3, { message: 'Mínimo 3 caracteres' })
        .max(100, { message: 'Máximo 100 caracteres' })
        .regex(/\D/gm, "Use somente letras"),
      })
    )
    .optional(),
})

export type Presence = z.infer<typeof presenceInfoValidator>

export const DEFAULT_VALUES = {
  nome: '',
  telefone: '',
  qtdePessoas: 1,
  nomes: [],
}
