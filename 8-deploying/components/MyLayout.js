import Header from './Header'
import Concept from './Concept'
import Values from './Values'
import Associations from './Associations'
import Entreprises from './Entreprises'
import Salaries from './Salaries'
import Missions from './Missions'
import Inscription from './Inscription'

export default function Layout(props) {
  return (
    <div>
      <div className="layout">
        <Header />
        {props.children}
        <Concept />
        <Values />
        <Associations />
        <Entreprises />
        <Salaries />
        <Missions />
        <Inscription />
      </div>
      <script src="static/smooth.js"></script>
    </div>
  )
}
