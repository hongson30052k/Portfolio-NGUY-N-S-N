import { Fragment } from "react/jsx-runtime";
import Header from "./components/Header/Header";
import HomePage from "./page/Home/HomePage";
import About from "./Module/About/About";
import AboutPage from "./page/About/AboutPage";
import ServicesPage from "./page/Services/ServicesPage";

function App() {
  return (
    <Fragment>
      <Header />
      <HomePage />
      <AboutPage />
      <ServicesPage />
    </Fragment>
  );
}

export default App;
