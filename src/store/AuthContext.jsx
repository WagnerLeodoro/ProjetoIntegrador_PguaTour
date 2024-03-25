import { createContext, useEffect, useState } from "react"
import { api } from "../services/api"

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [data, setData] = useState({})

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/session", { email, password })

      const { token, user } = response.data

      localStorage.setItem("@pguatour:user", JSON.stringify(user))
      localStorage.setItem("@pguatour:token", token)

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({ token, user })
    } catch (err) {
      if (err.response) {
        alert(err.response.data.message)
      } else {
        alert("Não foi possível entrar!")
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@pguatour:user")
    localStorage.removeItem("@pguatour:token")
    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem("@pguatour:user")
    const token = localStorage.getItem("@pguatour:token")

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user),
      })
    }
  }, [])

  return (
    <AuthContext.Provider value={{ signIn, user: data.user, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
