import axios from "axios"

const api = axios.create({
  baseURL: "https://api.github.com",
})

export async function fetchGitHubUser(username) {
  const response = await api.get(`/users/${username}`)

  return response.data
}