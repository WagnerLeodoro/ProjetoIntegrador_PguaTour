import { Container } from "./styles"

export function TextCard() {
  return (
    <Container>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner gap-2">
          <div className="carousel-item active">
            <div className="cardColor">
              <div className="content">
                <h5 className="title-page">Missão</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla perspiciatis distinctio maiores molestiae placeat in
                  modi vel repudiandae fugit nemo earum porro, natus neque rem
                  impedit accusamus ratione, possimus quibusdam!
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cardColor">
              <div className="content">
                <h5 className="title-page">Visão</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla perspiciatis distinctio maiores molestiae placeat in
                  modi vel repudiandae fugit nemo earum porro, natus neque rem
                  impedit accusamus ratione, possimus quibusdam!
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="cardColor">
              <div className="content">
                <h5 className="title-page">Valores</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nulla perspiciatis distinctio maiores molestiae placeat in
                  modi vel repudiandae fugit nemo earum porro, natus neque rem
                  impedit accusamus ratione, possimus quibusdam!
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleCaptions"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </Container>
  )
}
