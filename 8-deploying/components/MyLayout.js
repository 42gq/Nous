import Header from './Header'
import Missions from './Missions'

export default function Layout(props) {
  return (
    <div>
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <title>NOUS</title>
        <link href="/static/styles2.css" rel="stylesheet" />
      </head>

      <div className="layout">
        <Header />
        {props.children}
        <Missions />
      </div>
      <script src="static/smooth.js"></script>
    </div>
  )
}
