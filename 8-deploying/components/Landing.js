export default function Layout(props) {
  return (
    <div>
      <div className="lname">
        <h1 className="landing-h1">
          <b className="N-h1">N</b>
          <b className="OUS-h1">OUS</b>
        </h1>
        <p className="sub-title">
          <font>ASSO</font>
          <font>&CIE</font>
        </p>
      </div>
      <div className="catch-sentance front">
        <p>
          <i>
            « S'investir.
            <br />
            Agir pour <b className="N-text">S</b>oi et pour les{' '}
            <b className="N-text">A</b>utres. »
          </i>
        </p>
        {/* <p className="info">
          De nombreuses causes valent la peine, impliquez vous socialement dans
          les associations locales !
        </p> */}
      </div>
      <div className="front">
        <a href="#inscription">
          <button className="landing-button">
            <span>
              REJOIGNEZ <b className="N-button">N</b>OUS
            </span>
          </button>
        </a>
      </div>
      <div className="contain-cover">
        <div className="cover1 cover"></div>
        {/* <p className="landing-desc-2">
          Definir les besoins des associations et acteurs solidaires locaux.
          <br />
          Répondre à la volonté d’engagement de vos collaborateurs.
        </p> */}
      </div>
      {/* <div class="landing-desc-bottom">
        <p>
          SAAS B2B sociale et solidaire pour que vos collaborateurs puissent
          s’engager localement.
          <br />
          Definir les besoins des associations et acteurs solidaires locaux.
          <br />
          Répondre à la volonté d’engagement de vos collaborateurs.
        </p>
      </div> */}

      <div></div>
    </div>
  )
}
