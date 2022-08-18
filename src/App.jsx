import { ThemeProvider } from "styled-components";
import { myTheme } from "./components/syled/Theme";
import { GlobalStyles } from "./components/syled/Global";
import { Container } from "./components/syled/Container.styled";
import Header from "./components/Header";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>Hello useless bitch, go and die somewhere</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
