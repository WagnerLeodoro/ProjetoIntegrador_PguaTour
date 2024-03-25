import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { Container } from "./styles"

export function SignIn() {
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
                  <label for="InputUser"></label>
                  <input
                    type="text"
                    className="form-control w-75 m-auto"
                    id="InputUser"
                    placeholder="Usuário"
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

                <div className="buttons-container">
                  <button
                    type="button"
                    id="accessAccount"
                    className="btn btn-primary btn-form w-50"
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
