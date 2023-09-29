import { Header } from './style.app'
import { useState } from 'react'

const api = {
  key: '92ad08ad99cfb8a7ae1831156d2a75c2',
  base: 'https://api.openweathermap.org/data/2.5/',
}

export const App = () => {
  const [search, setSearch] = useState('') // estado da pesquisa setado sem valor inicial
  const [weather, setWeather] = useState({})

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`) // chamando a func fetch e passando as info da const api (base e key)
      .then((res) => res.json()) // transforma o res em json
      .then((result) => {
        setWeather(result)
        console.log(setWeather)
        console.log(weather)
      })
  }

  return (
    <>
      <Header>
        <form className="form">
          <h1>Storm App</h1>
          <input
            type="text"
            placeholder="digite sua cidade"
            onChange={(e) => setSearch(e.target.value)} // função onChange pegando o valor do input e setando pra variavel setSearch
          ></input>
          <button onClick={searchPressed}>Search</button>
          <p></p>
          <p></p>
        </form>
      </Header>
    </>
  )
}
