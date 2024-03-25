import { useState } from "react"
import { useAuth } from "../../hooks/useAuth"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { Container } from "./styles"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { signIn } = useAuth()

  async function handleLogin() {
    if (!email) {
      return alert("Digite seu email!")
    }
    if (!password) {
      return alert("Digite a senha do seu usuário!")
    }

    try {
      signIn({ email, password })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      }
    }
  }
  return (
    <Container>
      <Header />
      <div className="app mb-5">
        <h1>Faça Parte!</h1>
        <div className="col-sm">
          <div className="jumbotron jumbotron-fluid w-75 m-auto text-center ">
            <div className="container text-center">
              <form className="w-100">
                <div className="form-group">
                  <label htmlFor="InputUser"></label>
                  <input
                    type="text"
                    className="form-control w-75 m-auto"
                    id="InputUser"
                    placeholder="e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="InputPassword"></label>
                  <input
                    type="password"
                    className="form-control w-75 m-auto"
                    id="InputPassword"
                    placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className="buttons-container">
                  <button
                    type="button"
                    id="accessAccount"
                    className="btn btn-primary btn-form w-50"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  )
}
