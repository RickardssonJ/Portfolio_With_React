import React from "react"
import { motion } from "framer-motion"

const pageTransition = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60 },
  },
  exit: {
    x: "+100vw",
    transition: { ease: "easeInOut", delay: 0.3 },
  },
}

const Portfolio = (props) => {
  return (
    <div class="container">
      <div className="wrapper">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={pageTransition}
          className="portfolio"
          //class=" portfolio"
        >
          <div class="row h-100">
            <div class="col-lg-4  projectOne">
              {/* <div className="projectOne"> */}
              <div className="quiz">
                <img
                  className="quizPic"
                  src="./pictures/quiz-time-678x381.jpg"
                  alt="quiz skylt i neon färg"
                />
                <ul>
                  <li>Quiz där frågorna hämtas via ett API</li>
                  <br></br>
                  <li>All javaScript bygger på OOP</li>
                  <li>
                    <a
                      href="https://github.com/RickardssonJ/Quiz"
                      target="_blank"
                    >
                      Till github repot
                    </a>
                  </li>
                </ul>
              </div>

              {/* </div> */}
            </div>
            <div class="col-lg-4 ">
              <div className="projecTwo">
                <div className="yatzy">
                  <img
                    className="yatzyPic"
                    src="./pictures/yatzyjpg.jpg"
                    alt="Yatzy bild med två tärningar"
                  />
                  <ul>
                    <li>
                      Klassiskt yatzy där fokus låg på att bygga projektet
                      objektorienterat
                    </li>
                    <li>All javaScript bygger på OOP</li>
                    <li>
                      <a
                        href="https://github.com/RickardssonJ/finalYatzy"
                        target="_blank"
                      >
                        Till github repot
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-lg-4 ">
              <div className="projecThree">
                <div className="event">
                  <img
                    className="eventPic"
                    src="./pictures/party.jpg"
                    alt="Bild på ett musik event"
                  />
                  <ul>
                    <li>
                      I det här projektet låg fokus på att kunna hämta och lagra
                      data i localstorage
                    </li>
                    <li>All javaScript bygger på OOP</li>
                    <li>
                      <a
                        href="https://github.com/RickardssonJ/ACME"
                        target="_blank"
                      >
                        Till github repot
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio
