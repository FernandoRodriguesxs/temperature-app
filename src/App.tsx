import { Header } from './style.app'
import { useState, useEffect } from 'react'
import { api } from './lib/axios'

export const App = () => {
  const [search, setSearch] = useState('') // estado da pesquisa setado sem valor inicial

  const searchPressed = () => {
    console.log(search)
  }

  useEffect(() => {
    const getRequisicao = async () => {
      const response = await api.get(
        `/?q=London&appid=92ad08ad99cfb8a7ae1831156d2a75c2`,
      )

      console.log(response)
    }
    getRequisicao()
  }, [])

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
          <p>São Paulo, Brazil</p>
          <p>26°C</p>
        </form>
      </Header>
    </>
  )
}
