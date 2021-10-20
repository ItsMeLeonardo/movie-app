import Button from "../../components/Button";
import Navbar from "../../components/NavBar/navbar";
import Stats from "./components/Stats";

import './style.css'

export default function Detail() {
  return (
    <container className="container">
      <Navbar/>
      <img className="detailImage" src=""/>
      <main className="main">
        <div className="detailName">
          <h1 className="titleMovie">Name of movie</h1>
          <div className="detailButtons">
            <Button content="See trailer" type="White"/>
            <Button content="See movie" type="Secondary"/>
          </div>
        </div>
        <div className="detailInfo">
          <div className="detailDescription" >
            <header className="detailHeader">Description</header>
            <p className="description">A Dicken’s classic brought thrillingly up to date in the teeming heartland of modern London, where a group of street smart young hustlers plan the heist of the century for the ultimate payday.</p>
          </div>
          <div className="detailStats">
            <header className="detailHeader">Stats</header>
            <div className="stats">
              <Stats title="Release Date" data='2021-01-22' />
              <Stats title="Popularity" data='996.424'/>
            </div>
          </div>
        </div>
        
      </main>
    </container>
  )
}