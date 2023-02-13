import * as zod from 'zod'
import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { differenceInSeconds } from 'date-fns'
import { zodResolver } from '@hookform/resolvers/zod'

import * as S from './styles'

const newFormCycleValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minuteAmount: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newFormCycleValidationSchema>

interface Cycle {
  id: string
  task: string
  minuteAmount: number
  startDate: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountScondsPassed] = useState(0)

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newFormCycleValidationSchema),
    defaultValues: {
      task: '',
      minuteAmount: 0,
    },
  })

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  useEffect(() => {
    if (activeCycle) {
      setInterval(() => {
        setAmountScondsPassed(
          differenceInSeconds(new Date(), activeCycle.startDate)
        )
      }, 1000)
    }
  }, [activeCycle])

  function handleCreateNewCycle(data: NewCycleFormData) {
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minuteAmount: data.minuteAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)

    reset()
  }

  const totalSeconds = activeCycle ? activeCycle.minuteAmount * 60 : 0
  const correntseconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(correntseconds / 60)
  const secondsAmount = correntseconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <S.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <S.FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <S.TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="projeto 1" />
            <option value="projeto 2" />
            <option value="projeto 3" />
            <option value="projeto 4" />
            <option value="projeto 5" />
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <S.MinutesAmountInput
            id="minutesAmount"
            type="number"
            placeholder="00"
            step={5}
            max={60}
            {...register('minuteAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </S.FormContainer>

        <S.CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <S.Separator>:</S.Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </S.CountdownContainer>

        <S.StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          começar
        </S.StartCountdownButton>
      </form>
    </S.HomeContainer>
  )
}
