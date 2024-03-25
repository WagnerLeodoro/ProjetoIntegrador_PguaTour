import Logo from "../../assets/img/logo.png"

import { FaBars, FaUser, FaSearch } from "react-icons/fa"

import { Container, Banner } from "./styles"
import banner from "../../assets/img/banner.png"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"

export function Header() {
  const { user, signOut } = useAuth()
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
          <a className="navbar-brand" href="/">
            <img src={Logo} className="logo" alt="logo" />
          </a>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <a className="navbar-brand" href="/">
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
                    href="/"
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
              {!user ? (
                <button
                  onClick={() => navigate("/login")}
                  className="login-button nav-link p-0"
                >
                  Login
                  <FaUser className="icon" />
                </button>
              ) : (
                <button onClick={signOut} className="login-button nav-link p-0">
                  Sair
                  <FaUser className="icon" />
                </button>
              )}
              <form className="d-flex mt-3 formStyle" role="search">
                <input
                  id="search"
                  className="form-control me-2 inputSearch"
                  type="search"
                  placeholder="Pesquisar"
                  aria-label="Search"
                />
                <button
                  id="searchButton"
                  className="btn btn-success"
                  type="submit"
                >
                  <FaSearch />
                </button>
              </form>
              {!user ? (
                <button
                  onClick={() => navigate("/login")}
                  className="nav-link login-lg offcanvas p-0"
                >
                  Login
                  <FaUser className="icon" />
                </button>
              ) : (
                <button
                  onClick={signOut}
                  className="nav-link login-lg offcanvas p-0"
                >
                  Sair
                  <FaUser className="icon" />
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      <Banner>
        <img src={banner} alt="" />
      </Banner>
    </Container>
  )
}
