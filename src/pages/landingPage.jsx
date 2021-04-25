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

const LandingPage = (props) => {
  return (
    <div className="wrapper">
      <div className="landingPage">
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={pageTransition}
          className="landingText"
        >
          <h1 className="slideRight">
            <span className="htmlTags">&lt;&#47;</span>Hej mitt namn är
            <span>Jimmy</span>
            <span className="htmlTags">&gt;</span>
          </h1>
          <p className="slideUp">
            På den här sidan kommer du att kunna läsa mer om mig.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default LandingPage

//.portfolioWrapper {
//   background-color: rgb(31, 39, 76);
// }
