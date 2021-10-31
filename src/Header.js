import Navbar from "./Navbar";
import Banner from "./l.png";
import Login from "./Login";

const Header = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid header">
        <div className="container small-header">
          <div className="row">
            <div className="col-lg-4 p-5 mt-5">
              <h4 className="display-3  mt-4 text-center">Login</h4>
              <Login />
            </div>
            <div className="col-lg-8">
              <img src={Banner} alt="" srcset="" className="banner mt-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
