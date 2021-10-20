import CardMovie from "../../components/CardMovie";
import Subtitle from "../../components/Subtitle";
import Navbar from "../../components/NavBar/navbar";

import './style.css'

export default function Home({popular, categories}) {

  

  return (
    <>
      <Navbar/>

      <Subtitle content='Popular movie'/>
      <CardMovie type='popular' img='#' title='EndGame' description='End Description'/>
      
      <Subtitle content='Categories'/>
      <CardMovie type='category' title='Action'/>
    </>
  )
}