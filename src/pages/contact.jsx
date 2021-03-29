import React from "react"

const Contact = (props) => {
  return (
    <div id="contact" className="contactDiv">
      <div className="contactInfo">
        <h1>Kom i kontakt med mig</h1>
        <ul>
          <li>
            <span>Mail. </span>
            <a href="mailto:Rickardssonjimmy@gmail.com">
              Rickardssonjimmy@gmail.com
            </a>
          </li>
          <li>
            <span>Telefon.</span> 076-244 93 14
          </li>
        </ul>
        <div className="logos">
          <a href="mailto:Rickardssonjimmy@gmail.com">
            <img id="mail" src="./pictures/mail.png" alt="ett brev" />
          </a>
          <a href="https://github.com/RickardssonJ" target="_blank">
            <img id="gitHub" src="./pictures/github.png" alt="Githubs logga" />
          </a>
          <a
            href="https://www.linkedin.com/in/jimmy-rickardsson-829072173/"
            target="_blank"
          >
            <img
              id="linktedIn"
              src="./pictures/linkedin.png"
              alt="Linkedin logga"
            />
          </a>
          <a
            href="https://www.facebook.com/jimmy.rickardsson.3"
            target="_blank"
          >
            <img
              id="facebook"
              src="./pictures/facebook.png"
              alt="Facebook logga"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
