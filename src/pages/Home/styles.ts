import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
    width: 100%;
  }
`

const BasicCountdownButton = styled.button`
  width: 100%;
  border: 0;
  border-radius: 8px;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  color: ${({ theme }) => theme.colors.gray[100]};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BasicCountdownButton)`
  background-color: ${({ theme }) => theme.colors.green[500]};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.green[700]};
  }
`

export const StopCountdownButton = styled(BasicCountdownButton)`
  background-color: ${({ theme }) => theme.colors.red[500]};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.red[700]};
  }
`
