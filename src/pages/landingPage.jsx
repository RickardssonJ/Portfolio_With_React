import React from "react"

const LandingPage = (props) => {
  return (
    <div className="landingPage">
      <div className="landingText">
        <h1 className="slideRight">
          <span className="htmlTags">&lt;&#47;</span>Hej mitt namn är
          <span>Jimmy</span>
          <span className="htmlTags">&gt;</span>
        </h1>
        <p className="slideUp">
          På den här sidan kommer du att kunna läsa mer om mig.
        </p>
      </div>
    </div>
  )
}

export default LandingPage
