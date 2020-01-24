import Layout from './MyLayout.js'
import SearchExampleStandard from '../real-compo/Search'
import GridExampleDividedNumber from '../real-compo/Grid'

export default function Entreprises() {
  return (
    <div className="entreprises page" id="entreprises">
      <div className="contain-cover">
        <div className="cover cover5"></div>
      </div>
      <div className="replace">
        <h2 className="pos20">Recherchez vos partenaires naturels !</h2>
        <SearchExampleStandard className="reworkSearch" />
      </div>
      <GridExampleDividedNumber />
    </div>
  )
}
