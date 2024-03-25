import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { Container } from "./styles"

export function SignUp() {
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
                  <label for="InputUser"></label>
                  <input
                    type="text"
                    className="form-control w-75 m-auto"
                    id="InputUser"
                    placeholder="Usuário"
                  />
                </div>
                <div className="form-group">
                  <label for="InpuEmail"></label>
                  <input
                    type="text"
                    className="form-control w-75 m-auto"
                    id="InputEmail"
                    placeholder="E-mail"
                  />
                </div>

                <div className="form-group">
                  <label for="InputPassword"></label>
                  <input
                    type="password"
                    className="form-control w-75 m-auto"
                    id="InputPassword"
                    placeholder="Senha"
                  />
                </div>

                <div className="button-container d-flex justify-content-around ">
                  <button
                    type="button"
                    id="accessAccount"
                    className="btn btn-primary btn-form"
                  >
                    Cadastre-se
                  </button>
                  <button
                    type="button"
                    id="accessAccount"
                    className="btn btn-primary btn-form"
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
