import baseAPI from "./config"

interface UserPayload {
  name            :string
  email           :string
  password        :string
}

export function accountUser(payload :UserPayload) {
  return baseAPI.post('/news-api/v1/user', payload)
}

// Rota autenticada no servidor.
export function listUsers(token :string) {
  return baseAPI.get('/news-api/v1/users', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}