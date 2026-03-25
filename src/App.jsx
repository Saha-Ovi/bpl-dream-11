import { Suspense, useState } from 'react'
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
 import { ToastContainer } from 'react-toastify';

const fetchPlayer= async()=>
{
  const res= await fetch("/data.json");
  return res.json();
}

function App() {
  const playerPromise=fetchPlayer();
  const [coins,setCoins]=useState(30000);
  return (
    <>
    <header>
    <NavBar coins={coins}></NavBar>
    <Banner></Banner>
    </header>

    <main>
    <Suspense 
    fallback={
    <div className='flex justify-center items-center min-h-[30vh]'>
      <span className="loading loading-ring loading-xl scale-300"></span>
    </div>
  }>
      <AvailablePlayers playerPromise={playerPromise} coins={coins} setCoins={setCoins}></AvailablePlayers>
    </Suspense>
    </main>

    <footer>

    </footer>
 
      
     <ToastContainer />
    </>
  )
}

export default App
