import { Header } from './style.app'
import { useEffect } from 'react'
import { api } from './lib/axios'

export const App = () => {
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
          <input type="text" placeholder="digite sua cidade"></input>
          <p>São Paulo, Brazil</p>
          <p>26°C</p>
        </form>
      </Header>
    </>
  )
}
