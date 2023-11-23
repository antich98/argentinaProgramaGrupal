import Carousel from 'react-bootstrap/Carousel';
const Carrousel = () => {
    return (
        <Carousel>
      <Carousel.Item>
        <img className="imagenCarrusel" src='https://images.pexels.com/photos/3831552/pexels-photo-3831552.jpeg?auto=compress&cs=tinysrgb&w=1600' text="First slide" />
        <Carousel.Caption>
          <h3>Tu seguro de confianza</h3>
          <p>Una empresa dedicada a brindarte las mejores soluciones.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  className="imagenCarrusel" src='https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' text="Second slide" />
        <Carousel.Caption>
          <h3>Experiencia en el rubro.</h3>
          <p>Llevamos más de diez años en el mercado y conocemos a nuestros clientes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="imagenCarrusel" src='https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=1600' text="Third slide" />
        <Carousel.Caption>
          <h3>Confiabilidad.</h3>
          <p>
            Nuestros clientes siempre confían en nosotros.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Carrousel;