import { Button } from "./components/Button";

import { ThemeProvider } from "styled-components";
import { defaultThemes } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={defaultThemes}>
      <Button />
      <Button />
      <Button />
      <Button />
    </ThemeProvider>
  );
}
