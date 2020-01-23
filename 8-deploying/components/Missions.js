import Layout from './MyLayout.js'
import SearchExampleStandard from '../real-compo/Search'
import GridExampleDividedNumber from '../real-compo/Grid'

export default function Missions() {
  return (
    <div className="missions page" id="missions">
      <div className="contain-cover">
        <div className="cover cover7"></div>
      </div>
      <div className="replace">
        <h2 className="pos20">Recherchez la mission qui vous convient !</h2>
        <SearchExampleStandard className="reworkSearch" />
      </div>
      <GridExampleDividedNumber />
    </div>
  )
}
