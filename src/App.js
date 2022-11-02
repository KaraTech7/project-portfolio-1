import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import theme from "./theme";

const App = () => {
  // const stars = () => {
  //   const row = []
  //   for (let i = 0; i < 20; i++) {
  //     row.push(<li />)
  //   }
  //   return row
  // }

  return (
    <ChakraProvider theme={theme}>
     <Nav />
      <div className="context">
        <div className="area">
          {/* <ul className="circles">{stars()}</ul> */}
        </div>
      </div>
      
      <Header />
      <Footer />
    </ChakraProvider>
  );
};

export default App;
