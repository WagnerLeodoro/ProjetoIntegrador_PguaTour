import { Container } from "./styles"
import cardImg from "../../assets/img/card-img.jpg"
export function Card() {
  return (
    <Container className="wrap">
      <div className="tourismCard">
        <div id="carouselOne" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-target="#carouselOne"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselOne" data-slide-to="1"></li>
            <li data-target="#carouselOne" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner h-auto">
            <div className="carousel-item active carousel">
              <img src={cardImg} alt="Primeiro Slide" />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={cardImg}
                alt="Segundo Slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={cardImg}
                alt="Terceiro Slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselOne"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Anterior</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselOne"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Próximo</span>
          </a>
        </div>

        <div className="cardContent">
          <h2>Título</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quaerat quidem quasi, quod quibusdam quae, quod quaerat quasi, quod
            quaerat quasi, quod quaerat quasi, quod quaerat quasi, quod quaerat
            quasi, quod quaerat quasi, quod quaerat quasi, quod quaerat quas
          </p>

          <button type="button" className="btn btn-info">
            Saiba Mais <i className="bi bi-geo-alt-fill"></i>
          </button>
        </div>
      </div>
    </Container>
  )
}
