import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import Available from './Available'

import { ToastContainer, toast } from 'react-toastify';

function App() {

  let [coins , setCoins] = useState(0);

  let addCoins = () => {
      let claimedCoins = coins + 10000
      setCoins(claimedCoins)
      toast.success(`You claimed 10,000 coins!`)
  }

  let [players , getPlayers] = useState([])
  useEffect (() => {
    fetch('/playerdata.json')
    .then(res => res.json())
    .then(data => {getPlayers(data.players)}) },[])


  return (
    <>
     <Header addCoins={addCoins} coins={coins}></Header>
     <Available players = {players}></Available>
     <ToastContainer position="top-center" autoClose={1500} hideProgressBar={false} />
    </>
  )
}

export default App
