import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import Carousel from "./Carousel";

function App() {
  return (
    <div id="body-container" className="container">
      <div className="card card-main border-0">
        <form>
          <Carousel />
        </form>
      </div>
    </div>
  );
}

export default App;
