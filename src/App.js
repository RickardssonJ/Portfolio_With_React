//Importing
import "./App.scss"
import { Route, Switch, useLocation } from "react-router-dom"
import LandingPage from "./pages/landingPage"
import AboutMe from "./pages/aboutMe"
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"
import MobileNavBar from "./components/MobileNavBar"
import DesktopNavBar from "./components/DesktopNavBar"

import { AnimatePresence } from "framer-motion"

function App() {
  const location = useLocation()
  return (
    <div className="app">
      <MobileNavBar />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
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
      </AnimatePresence>

      <DesktopNavBar />
    </div>
  )
}

export default App
