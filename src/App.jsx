import { BrowserRouter } from "react-router-dom"

import {
  Contact,
  Experience,
  Home,
  Navbar,
  Projects,
  Skills,
  Stars,
} from "./components/index"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div>
          <Stars />
          <Navbar />
          <Home />
        </div>
        <Skills />
        <Experience />
        <Projects />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
