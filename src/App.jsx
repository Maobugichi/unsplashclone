import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import HomePage from './components/HomePage'

function App() {
  const [fetchAnswer, setFetchAnswer] = useState(0)
  const [searchParam,setSearchParam] = useState('Africa')
  const apiURL = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  
  useEffect(() => {
    axios.get(`${apiURL}`, {
      headers: {
        'Authorization': `Client-ID ${apiKey}`,
      }, params: {
        query: searchParam,
      },
    
    })
      .then(response => {
       
        setFetchAnswer(response.data.results)
      })
      .catch(error => {
        console.error(error);
      });
  },[searchParam])
  
  return (
    <>
     <HomePage
      fetchAnswer={fetchAnswer}
      setSearchParam={setSearchParam}
     />
    </>
  )
}

export default App
