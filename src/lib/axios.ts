import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  // headers: { Authorization: import.meta.env.API_KEY },
})
