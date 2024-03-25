import Logo from "../../assets/img/logo.png"

import { FaBars, FaSearch, FaUser } from "react-icons/fa"

import { Container, Banner } from "./styles"
import banner from "../../assets/img/banner.png"
import { useNavigate } from "react-router-dom"

export function Header() {
  const navigate = useNavigate()

  return (
    <Container>
      <nav
        id="navStyle"
        className="navbar border-body fixed navbar-expand-lg"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FaBars />
            </span>
          </button>
          <a className="navbar-brand" href="/home">
            <img src={Logo} className="logo" alt="logo" />
          </a>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <a className="navbar-brand" href="/home">
                <img src={Logo} className="logo" alt="logo" />
              </a>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body align-items-baseline">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 links">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="linkHome"
                    aria-current="page"
                    href="/home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/attractions/eco"
                  >
                    Turismo Ecológico
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/attractions/historic"
                  >
                    Turismo Historico
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/about"
                  >
                    Quem Somos
                  </a>
                </li>
              </ul>
              <a href="/login" className="login-lg nav-link active p-0">
                <div className="botaoConta">
                  Login
                  <FaUser className="icon" />
                </div>
              </a>
              <form className="d-flex mt-3 formStyle" role="search">
                <input
                  id="search"
                  className="form-control me-2 inputSearch"
                  type="search"
                  placeholder="Pesquisar"
                  aria-label="Search"
                />
                <button id="search" className="btn btn-success" type="button">
                  <FaSearch />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="offcanvas align-items-baseline">
          <a href="/login" className="nav-link active p-0 text-center">
            <FaUser className="icon" />
            Login
          </a>
        </div>
      </nav>
      <Banner>
        <img src={banner} alt="" />
      </Banner>
    </Container>
  )
}
