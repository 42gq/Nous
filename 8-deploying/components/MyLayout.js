import Header from './Header'
import Missions from './Missions'

export default function Layout(props) {
  return (
    <div>
      <div className="layout">
        <Header />
        {props.children}
        <Missions />
      </div>
      <script src="static/smooth.js"></script>
    </div>
  )
}
