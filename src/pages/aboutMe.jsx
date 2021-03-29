import React from "react"

const AboutMe = (props) => {
  return (
    <div className="aboutMe">
      <div className="aboutMeDiv">
        <img
          className="meColor"
          src="/pictures/profilOrange.png"
          alt="Profil bild i färg"
        />

        <div className="aboutMeText">
          <p>
            Mitt namn är Jimmy Rickardsson. Jag är 33år gammal och bor i
            Stockholm.
            <br />
            <br />
            Jag är i grund och botten en utbildad elektriker med många års
            erfarenhet inom byggbranschen men jag har alltid haft ett stort
            intresse för IT och programmering och nu har jag tagit beslutet att
            följa min dröm och bli en duktig utvecklare! <br />
            <br />
            För tillfället så studerar jag mitt första år på Nackademins
            yrkeshögskola i Solna och utbildningen web developer full stack
            opensource. <br />
            Det läggs mycket fokus på både front end och back end, men även på
            agilt arbete. <br />
            <br />
            Jag beräknas vara klar med min utbildning år 2022.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
