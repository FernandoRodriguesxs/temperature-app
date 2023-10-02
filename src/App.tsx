import { Header } from './style.app'
import { useState } from 'react'

const api = {
  key: '92ad08ad99cfb8a7ae1831156d2a75c2',
  base: 'https://api.openweathermap.org/data/2.5/',
}

export const App = () => {
  const [search, setSearch] = useState('') // estado da pesquisa setado sem valor inicial
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [weather, setWeather] = useState<any>({})

  const searchPressed = () => {
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`) // chamando a func fetch e passando as info da const api (base e key)
      .then((res) => res.json()) // transforma o res em json
      .then((result) => {
        setWeather(result) // passando o result para o estado SetWeather
      })
  }
  console.log(weather)
  return (
    <>
      <Header>
        <div className="form">
          <input
            type="text"
            placeholder="Digite sua Cidade"
            onChange={(e) => setSearch(e.target.value)} // função onChange pegando o valor do input e setando pra variavel setSearch
          />

          <button type="submit" onClick={searchPressed}>
            Search
          </button>
          <p>{weather?.name}</p>
          <p>{weather?.main?.temp}ºC</p>
          <p>{weather.weather?.[0].main}</p>
        </div>
      </Header>
    </>
  )
}
