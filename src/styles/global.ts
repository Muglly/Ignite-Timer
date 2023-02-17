import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;

      ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.gray[600]};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => theme.colors.gray[800]};
    }
    }

    :focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green[500]};
    }

    body {
      background-color: ${({ theme }) => theme.colors.gray[900]};
      color: ${({ theme }) => theme.colors.gray[300]};
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1rem;
    }


`
