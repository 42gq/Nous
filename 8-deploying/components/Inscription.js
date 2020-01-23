export default function Inscription() {
  return (
    <div className="inscription page" id="inscription">
      <div className="contain-cover">
        <div className="cover cover8"></div>
      </div>
      <div className="inscription-pan">
        <h2>Découvrez comment vous engager !</h2>
        <form action="" method="get" className="inscription-form">
          <div className="col col-1">
            <div className="form-example">
              <label htmlFor="name">Prénom :</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                className="input-field"
                placeholder="Joe"
                required
              />
            </div>
            <div className="form-example">
              <label htmlFor="email">E-mail :</label>
              <input
                type="email"
                name="email"
                id="email"
                className="input-field"
                placeholder="hdt@nous.com"
                required
              />
            </div>
          </div>
          <div className="col">
            <div className="form-example">
              <label htmlFor="name">Nom :</label>
              <input
                type="text"
                name="name"
                id="name"
                className="input-field"
                placeholder="Dalton"
                required
              />
            </div>
            <div className="form-example">
              <label htmlFor="phone">Téléphone :</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="0607080910"
                className="input-field"
                required
              />
            </div>
          </div>
          <div className="form-example">
            <label htmlFor="type">Qui êtes vous ?</label>
            <select
              type="role"
              name="role"
              id="role"
              placeholder="Je suis..."
              className="select-field"
              required
            >
              <option>
                Je suis <b>un étudiant</b> en quête de sens !
              </option>
              <option>
                Je suis <b>une association</b> en quête de bénévoles !
              </option>
              <option>
                Je suis <b>un salarié/une salariée</b> avec l'envie de servir !
              </option>
              <option>
                Je suis <b>une entreprise</b> préoccupée par son inpact !
              </option>
            </select>
          </div>

          <div>
            <input
              type="submit"
              value="En savoir plus !"
              className="submit-button"
            />
          </div>
        </form>
      </div>
    </div>
  )
}
