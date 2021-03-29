//Importing
import "./App.scss"
import { Route, Switch } from "react-router-dom"
import LandingPage from "./pages/landingPage"
import AboutMe from "./pages/aboutMe"
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"
import MobileNavBar from "./components/MobileNavBar"
import DesktopNavBar from "./components/DesktopNavBar"

function App() {
  return (
    <div className="App">
      <MobileNavBar />

      <Switch>
        <Route path="/aboutMe">
          <AboutMe />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <LandingPage />
        </Route>
      </Switch>

      <DesktopNavBar />
    </div>
  )
}

export default App
