import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { Container } from "./styles"
import { useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  async function handleNewUser() {
    if (!name) {
      return alert("Digite um nome de usuário!")
    }
    if (!email) {
      return alert("Digite um email!")
    }
    if (!password) {
      return alert("Digite uma senha para o seu usuário!")
    }

    try {
      await api.post("/users", {
        name,
        email,
        password,
      })
      alert("Usuário cadastrado com sucesso!")
      navigate("/login")
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
        window.location.reload()
      }
    }
  }
  return (
    <Container>
      <Header />
      <div className="app mb-5">
        <h1>Faça Parte!</h1>
        <p className="d-flex w-75 mx-auto mb-4 align-center justify-content-center fs-4 ">
          Ao se cadastrar no programa Guia Parnanguara você contruibui com a
          experiência de todos, cadastre-se e deixe sua avaliação nos melhores
          pontos tuísticos de Paranaguá!
        </p>

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
                    placeholder="Usuário"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="InputEmail"></label>
                  <input
                    type="text"
                    className="form-control w-75 m-auto"
                    id="InputEmail"
                    placeholder="E-mail"
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

                <div className="button-container d-flex justify-content-around ">
                  <button
                    type="button"
                    className="btn btn-primary btn-form"
                    onClick={handleNewUser}
                  >
                    Cadastre-se
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-form"
                    onClick={() => navigate("/login")}
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
