import { Input } from '@common/forms'
import { Button } from '@common/button'
import React, { useEffect, useState } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import axios from 'axios'
import styles from './styles.module.css'
import { FaTrash } from 'react-icons/fa'
import { If } from '@common/If'
import LoadingOverlay from '@common/LoadiingOverlay/Index'

export function ConfirmarPresenca() {
  const { handleSubmit, getValues, setValue, reset, control, formState } =
    useFormContext()

  const qtdePessoas = getValues('qtdePessoas')
  const { fields, append, remove } = useFieldArray({
    name: 'nomes', // unique name for your Field Array
  })
  const [isSuccess, setIsSuccess] = useState(false)
  const [hasError, setHasError] = useState(false)
  useEffect(() => {
    console.log(formState.errors)
  }, [formState])
  function handleAddName() {
    append({ nome: '' })
    setValue('qtdePessoas', qtdePessoas + 1)
  }
  function handleRemoveName(index: number) {
    remove(index)
    setValue('qtdePessoas', qtdePessoas - 1)
  }
  async function onSubmitForm(data: any) {
    try {
      const response = await axios.post('/api/confirmar_presenca', data)
      if (response.status === 200) {
        setIsSuccess(true)
        reset()
      } else {
        setHasError(true)
      }
    } catch (e) {
      console.log(e)
      setHasError(true)
    }
  }
  return (
    <div>
      <section>
        <h3>Confirmar presença</h3>
        <p className="center-text">Ainda não confirmou sua presença?</p>
        <p className="center-text">
          É só preencher o formulário abaixo é rapidinho
        </p>
      </section>
      <section>
        <form
          className={styles.formWrapper}
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <div className={styles.form}>
            <Input name="nome" label="Nome" />
            <Input name="telefone" mask="(99) 99999-9999" label="Telefone" />
            <Input
              name="qtdePessoas"
              label="Quantidade de pessoas"
              disabled
              hide
            />
            <section className={styles.additionalFieldsWrapper}>
              {fields.map((n, index) => (
                <div key={n.id} className={styles.nameWrapper}>
                  <Input name={`nomes.${index}.nome`} label={`Nome`} />
                  <Button
                    type="button"
                    variant="danger"
                    name={`remover-${n.id}`}
                    onClick={() => handleRemoveName(index)}
                  >
                    <FaTrash size="1.5em" />
                  </Button>
                </div>
              ))}
              <div className={styles.addFieldWrapper}>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={handleAddName}
                  name="adicionar-campo"
                >
                  Adicionar
                </Button>
              </div>
            </section>
            <div className={styles.sendButtonWrapper}>
              <If condition={formState.isSubmitting}>
                <LoadingOverlay />
              </If>
              <If condition={!formState.isSubmitting}>
                <Button type="submit" variant="primary" name="adicionar-campo">
                  Enviar
                </Button>
              </If>
            </div>
          </div>
        </form>

        <If condition={isSuccess}>
          <p className={styles.success}>
            Sua presença foi confirmada, obrigado!
          </p>
        </If>
        <If condition={hasError}>
          <p className={styles.error}>Desculpe, ocorreu um erro</p>
        </If>
      </section>
    </div>
  )
}
