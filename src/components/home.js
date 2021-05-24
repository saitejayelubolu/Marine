// import logo from './logo.svg';
import '../App.css';
import * as ReactBootstrap from "react-bootstrap";

function App() {
  return (
    <div className="App">
      

      <ReactBootstrap.Carousel>
        <ReactBootstrap.Carousel.Item>
          <img
            className="d-block w-100"
            src="banner1.jpg"
            alt="First slide"
          />
          <ReactBootstrap.Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </ReactBootstrap.Carousel.Caption>
        </ReactBootstrap.Carousel.Item>
        <ReactBootstrap.Carousel.Item>
          <img
            className="d-block w-100"
            src="banner2.jpg"
            alt="Second slide"
          />

          <ReactBootstrap.Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </ReactBootstrap.Carousel.Caption>
        </ReactBootstrap.Carousel.Item>
        <ReactBootstrap.Carousel.Item>
          <img
            className="d-block w-100"
            src="banner3.jpg"
            alt="Third slide"
          />

          <ReactBootstrap.Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </ReactBootstrap.Carousel.Caption>
        </ReactBootstrap.Carousel.Item>
      </ReactBootstrap.Carousel>

      
    </div>
  );
}

export default App;
