import FormExampleFieldControlId from '../real-compo/Form'
import AppWithBasic from '../real-compo/Datepicker'
import SelectExample from '../real-compo/Selector'

export default function Associations() {
  return (
    <div className="associations page" id="associations">
      <div className="contain-cover">
        <div className="cover cover3"></div>
      </div>
      <div className="asso">
        <h2 className="pos21">
          Associations, faites part de vos besoins humains !
        </h2>
        <div className="field mission-name">
          <label>Nom de la Mission</label>
          <div className="form-input">
            <input
              type="text"
              placeholder="Soutien informatique, Maraudes, ..."
            />
          </div>
        </div>
        <div className="field adresse">
          <label>Adresse de la mission</label>
          <div className="form-input">
            <input type="text" placeholder="" />
          </div>
        </div>

        <div className="field date">
          <label>Date</label>
          <AppWithBasic className="resize-calend" />
        </div>

        <div className="field nbheures">
          <label>Durée de la mission</label>
          <div className="form-input">
            <input type="text" placeholder="70hrs" />
          </div>
        </div>
        <div className="field nbpersonnes">
          <label>Nombre de personnes nécessaires</label>
          <div className="form-input">
            <SelectExample />
          </div>
        </div>
        <div className="field descriptif">
          <label>Description de la mission</label>
          <div className="form-input">
            <input
              className="large-input"
              type="text"
              placeholder="La mission consiste à entretenir et réparer le materiel informatique de l'association..."
            />
          </div>
        </div>
        <div className="field descriptif">
          <label>Compétences (si requises)</label>
          <div className="form-input">
            <input type="text" placeholder="" />
          </div>
        </div>
        <div className="field remarques">
          <label>Remarques & Infos</label>
          <div className="form-input">
            <input
              className="large-input"
              type="text"
              placeholder="L'association se trouve au fond d'une petite cour. Pensez à prendre un pull, il fait frais dans les locaux !"
            />
          </div>
        </div>
        <div className="field contact">
          <label>Contact</label>
          <div className="form-input">
            <input type="text" placeholder="Joe Dalton" />
          </div>
          <div className="form-input">
            <input type="text" placeholder="0607080910" />
          </div>
          <div className="form-input">
            <input type="text" placeholder="contact@email.com" />
          </div>
        </div>
      </div>
    </div>
  )
}
