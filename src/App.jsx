import { Suspense } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'

const fetchPlayer= async()=>
{
  const res= await fetch("/data.json");
  return res.json();
}

function App() {
  const playerPromise=fetchPlayer();
  return (
    <>
    <header>
    <NavBar></NavBar>
    <Banner></Banner>
    </header>

    <main>
    <Suspense 
    fallback={
    <div className='flex justify-center items-center min-h-[30vh]'>
      <span className="loading loading-ring loading-xl scale-300"></span>
    </div>
  }>
      <AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
    </Suspense>
    </main>

    <footer>

    </footer>
 
      
     
    </>
  )
}

export default App
