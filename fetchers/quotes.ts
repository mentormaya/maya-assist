import axios from 'axios'

const API = "https://api.quotable.io"
const tags = ["technology","famous-quotes"].join(",")
export const endpoint = "/quotes/random"
const url = `${API}${endpoint}?tags=${tags}`

export const getRandomQuote = async () => {
  const q = await axios.get(url)
  return q.data[0]
}