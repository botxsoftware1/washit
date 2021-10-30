import "./App.css";
import { Our } from "./ourservice";
import { Testimonials } from "./testimonials";
import { Footer } from "./footer";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Our />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
