import Layout from './MyLayout.js'

export default function Missions() {
  return (
    <div className="missions page" id="missions">
      <div className="contain-cover">
        <div className="cover cover7"></div>
      </div>
      {/* <div className="other-name">
        <h1 className="classic-h1">
          <b className="other-cap">R</b>echercher une mission
        </h1>
      </div> */}
      <div className="searchBar">
        <imput placeholder="Vous cherchez une association ?"></imput>
        <button>Chercher</button>
      </div>
      {/* <ul className="annuary">
        <li clasName="item-annuary">Mission n.1</li>
        <li clasName="item-annuary">Mission n.2</li>
        <li clasName="item-annuary">Mission n.3</li>
      </ul> */}
    </div>
  )
}
