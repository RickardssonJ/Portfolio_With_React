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

const AboutMe = (props) => {
  return (
    // <div className="wrapper">
    //   <div className="aboutMe">
    //     <div className="aboutMeDiv">
    //       <motion.img
    //         initial="hidden"
    //         animate="visible"
    //         exit="exit"
    //         variants={pageTransition}
    //         className="meColor"
    //         src="/pictures/profilOrange.png"
    //         alt="Profil bild i färg"
    //       />

    //       <motion.div
    //         class="container"
    //         initial="hidden"
    //         animate="visible"
    //         exit="exit"
    //         variants={pageTransition}
    //         className="aboutMeText"
    //       >
    //         <div class="row ">
    //           <p>
    //             Mitt namn är Jimmy Rickardsson. Jag är 33år gammal och bor i
    //             Stockholm.
    //             <br />
    //             <br />
    //             Jag är i grund och botten en utbildad elektriker med många års
    //             erfarenhet inom byggbranschen men jag har alltid haft ett stort
    //             intresse för IT och programmering och nu har jag tagit beslutet
    //             att följa min dröm och bli en duktig utvecklare! <br />
    //             <br />
    //             För tillfället så studerar jag mitt första år på Nackademins
    //             yrkeshögskola i Solna och utbildningen web developer full stack
    //             opensource. <br />
    //             Det läggs mycket fokus på både front end och back end, men även
    //             på agilt arbete. <br />
    //             <br />
    //             Jag beräknas vara klar med min utbildning år 2022.
    //           </p>
    //         </div>
    //       </motion.div>

    //     </div>
    //   </div>
    // </div>

    <div className="wrapper">
      <div className="aboutMe">
    <div id="aboutMePage" class="row aboutMeDiv">
      <div class="col-lg-6 aboutMe my-auto">
        <motion.div
            class="container"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={pageTransition}
            className="aboutMeText"
          >
        <div class="aboutMeText">
          <div class="textAboutMe">
          <motion.img
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={pageTransition}
            className="meColor"
            src="/pictures/profilOrange.png"
            alt="Profil bild i färg"
          />
            <span>M</span>itt namn är Jimmy Rickardsson. Jag är 33år gammal
            och bor i Stockholm.<br />
            <br />
            <span>J</span>ag är i grund och botten en utbildad elektriker med
            många års erfarenhet inom byggbranschen men jag har alltid haft
            ett stort intresse för IT och programmering och nu har jag tagit
            beslutet att följa min dröm och bli en duktig utvecklare!
            <br />
            <br />
            <span>F</span>ör tillfället så studerar jag mitt första år på
            Nackademins yrkeshögskola i Solna och utbildningen web developer
            full stack opensource. <br />
            Det läggs mycket fokus på både front end och back end, men även på
            agilt arbete. <br />
            <br />
            <span>J</span>ag beräknas vara klar med min utbildning år 2022.
          </div>
        </div>
        </motion.div>
      </div>
      <div class="col-lg-6 aboutMe my-auto">
      <motion.div
            class="container"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={pageTransition}
            className="knowledge"
          >
        <div class="knowledge">
          <p></p>
          <h4>Jag har kunskaper inom</h4>
          <br />
          <br />
          <p class="knowledgeP"><span>J</span>avaScript</p>
          <br />
          <p class="knowledgeP"><span>N</span>odeJS</p>
          <br />
          <p class="knowledgeP"><span>H</span>TML/CSS</p>
          <br />
          <p class="knowledgeP"><span>R</span>eact</p>
          <br />
          <p class="knowledgeP"><span>P</span>HP</p>
          <br />
          <p class="knowledgeP"><span>m</span>ySQL</p>
          <br />
          <p class="knowledgeP"><span>n</span>oSQL</p>
          <br />
        </div>
      </motion.div>
      </div>

    </div>
    </div>
    </div>

  )
}

export default AboutMe
