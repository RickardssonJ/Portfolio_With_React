import React from "react"

const Portfolio = (props) => {
  return (
    <div className="portfolio">
      <div className="projectOne">
        <div className="quiz">
          <img
            className="quizPic"
            src="./pictures/quiz-time-678x381.jpg"
            alt="quiz skylt i neon färg"
          />
          <ul>
            <li>Quiz där frågorna hämtas via ett API</li>
            <li>All javaScript bygger på OOP</li>
            <li>
              <a href="https://github.com/RickardssonJ/Quiz" target="_blank">
                Till github repot
              </a>
            </li>
          </ul>
        </div>
      </div>
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
      <div className="projecThree">
        <div className="event">
          <img
            className="eventPic"
            src="./pictures/party.jpg"
            alt="Bild på ett musik event"
          />
          <ul>
            <li>
              I det här projektet låg fokus på att kunna hämta och lagra data i
              localstorage
            </li>
            <li>All javaScript bygger på OOP</li>
            <li>
              <a href="https://github.com/RickardssonJ/ACME" target="_blank">
                Till github repot
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
