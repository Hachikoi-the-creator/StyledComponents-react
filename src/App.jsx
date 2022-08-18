import { ThemeProvider } from "styled-components";
import { myTheme } from "./components/syled/Theme";
import { GlobalStyles } from "./components/syled/Global";
import { Container } from "./components/syled/Container.styled";
import Header from "./components/Header";
import content from "./content";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <Card item={content[0]} />
          <Card item={content[1]} />
          <Card item={content[2]} />
          {/* NO IDEA WAY MAPPING AINT WORKING T.T */}
          {/* {content.map((item, idx) => {
            console.log(item.title, "before");
            <Card item={item} key={idx} />;
            console.log(item.title, "after");
          })} */}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
