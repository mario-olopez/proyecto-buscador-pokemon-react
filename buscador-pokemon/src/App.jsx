import Head from "./components/Head"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom";

import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Head />
        <Main />
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
